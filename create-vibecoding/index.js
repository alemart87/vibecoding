#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Simple colored console output (no dependencies)
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function execCommand(command, cwd = process.cwd(), silent = false) {
  try {
    execSync(command, {
      cwd,
      stdio: silent ? 'pipe' : 'inherit',
      encoding: 'utf-8'
    });
    return true;
  } catch (error) {
    if (!silent) {
      log(`Error executing: ${command}`, 'red');
      log(error.message, 'red');
    }
    return false;
  }
}

function checkPrerequisites() {
  log('\n🔍 Checking prerequisites...', 'cyan');

  // Check Node.js
  try {
    const nodeVersion = execSync('node --version', { encoding: 'utf-8' }).trim();
    log(`✅ Node.js: ${nodeVersion}`, 'green');
  } catch {
    log('❌ Node.js is not installed. Please install Node.js first.', 'red');
    process.exit(1);
  }

  // Check Git
  try {
    const gitVersion = execSync('git --version', { encoding: 'utf-8' }).trim();
    log(`✅ Git: ${gitVersion}`, 'green');
  } catch {
    log('❌ Git is not installed. Please install Git first.', 'red');
    process.exit(1);
  }

  // Check Python
  let pythonCmd = 'python3';
  try {
    execSync('python3 --version', { encoding: 'utf-8' });
    log(`✅ Python: ${execSync('python3 --version', { encoding: 'utf-8' }).trim()}`, 'green');
  } catch {
    try {
      execSync('python --version', { encoding: 'utf-8' });
      pythonCmd = 'python';
      log(`✅ Python: ${execSync('python --version', { encoding: 'utf-8' }).trim()}`, 'green');
    } catch {
      log('⚠️  Python is not installed. Backend setup will be skipped.', 'yellow');
      pythonCmd = null;
    }
  }

  return { pythonCmd };
}

async function main() {
  log('\n╔═══════════════════════════════════════════════════════╗', 'magenta');
  log('║                                                       ║', 'magenta');
  log('║           🎉 Welcome to VibeCoding! 🎉               ║', 'magenta');
  log('║                                                       ║', 'magenta');
  log('║     Full-Stack Tutorial: Next.js + Flask             ║', 'magenta');
  log('║                                                       ║', 'magenta');
  log('╚═══════════════════════════════════════════════════════╝', 'magenta');

  const projectName = process.argv[2] || 'vibecoding-project';
  const targetDir = path.join(process.cwd(), projectName);

  log(`\n📦 Creating project in: ${targetDir}`, 'cyan');

  // Check prerequisites
  const { pythonCmd } = checkPrerequisites();

  // Clone repository
  log('\n📥 Cloning VibeCoding repository...', 'cyan');
  if (!execCommand(`git clone https://github.com/alemart87/vibecoding.git "${targetDir}"`)) {
    log('❌ Failed to clone repository', 'red');
    process.exit(1);
  }

  log('✅ Repository cloned successfully!', 'green');

  // Setup Frontend
  log('\n🎨 Setting up Frontend (Next.js)...', 'cyan');
  const frontendDir = path.join(targetDir, 'frontend');

  if (fs.existsSync(frontendDir)) {
    log('📦 Installing frontend dependencies (this may take a few minutes)...', 'cyan');
    if (!execCommand('npm install', frontendDir)) {
      log('⚠️  Frontend dependencies installation had issues', 'yellow');
    } else {
      log('✅ Frontend dependencies installed!', 'green');
    }

    // Create .env.local if it doesn't exist
    const envLocalPath = path.join(frontendDir, '.env.local');
    const envExamplePath = path.join(frontendDir, '.env.example');

    if (!fs.existsSync(envLocalPath)) {
      if (fs.existsSync(envExamplePath)) {
        fs.copyFileSync(envExamplePath, envLocalPath);
        log('✅ Created .env.local from .env.example', 'green');
      } else {
        // Create a basic .env.local
        const envContent = `# API Backend URL
NEXT_PUBLIC_API_URL=http://localhost:5000

# Environment
NEXT_PUBLIC_ENV=development
`;
        fs.writeFileSync(envLocalPath, envContent);
        log('✅ Created .env.local with default configuration', 'green');
      }
    }
  }

  // Setup Backend
  if (pythonCmd) {
    log('\n🐍 Setting up Backend (Flask)...', 'cyan');
    const backendDir = path.join(targetDir, 'backend');

    if (fs.existsSync(backendDir)) {
      // Create virtual environment
      log('📦 Creating Python virtual environment...', 'cyan');
      const venvCmd = `${pythonCmd} -m venv venv`;
      if (!execCommand(venvCmd, backendDir)) {
        log('⚠️  Failed to create virtual environment', 'yellow');
      } else {
        log('✅ Virtual environment created!', 'green');

        // Install Python dependencies
        log('📦 Installing Python dependencies...', 'cyan');
        const isWindows = process.platform === 'win32';
        const activateCmd = isWindows
          ? 'venv\\Scripts\\activate && pip install -r requirements.txt'
          : '. venv/bin/activate && pip install -r requirements.txt';

        if (!execCommand(activateCmd, backendDir)) {
          log('⚠️  Failed to install Python dependencies', 'yellow');
          log('💡 You can install them manually later with:', 'cyan');
          log(`   cd ${backendDir} && ${activateCmd}`, 'cyan');
        } else {
          log('✅ Python dependencies installed!', 'green');
        }
      }

      // Create .env if it doesn't exist
      const envPath = path.join(backendDir, '.env');
      const envExamplePath = path.join(backendDir, '.env.example');

      if (!fs.existsSync(envPath)) {
        if (fs.existsSync(envExamplePath)) {
          fs.copyFileSync(envExamplePath, envPath);
          log('✅ Created .env from .env.example', 'green');
        } else {
          // Create a basic .env
          const envContent = `# Flask Configuration
FLASK_APP=run.py
FLASK_ENV=development
FLASK_DEBUG=1

# Secret Key
SECRET_KEY=dev-secret-key-change-in-production

# Database Configuration (SQLite for development)
DATABASE_URL=sqlite:///db.sqlite3

# CORS Configuration
CORS_ORIGINS=http://localhost:3000
`;
          fs.writeFileSync(envPath, envContent);
          log('✅ Created .env with default configuration', 'green');
        }
      }
    }
  }

  // Success message
  log('\n╔═══════════════════════════════════════════════════════╗', 'green');
  log('║                                                       ║', 'green');
  log('║          🎉 Installation Complete! 🎉                ║', 'green');
  log('║                                                       ║', 'green');
  log('╚═══════════════════════════════════════════════════════╝', 'green');

  log('\n📚 Next steps:', 'cyan');
  log(`\n1️⃣  Navigate to your project:`, 'bright');
  log(`   cd ${projectName}`, 'cyan');

  log(`\n2️⃣  Start the Frontend:`, 'bright');
  log(`   cd frontend`, 'cyan');
  log(`   npm run dev`, 'cyan');
  log(`   Open http://localhost:3000 in your browser`, 'magenta');

  if (pythonCmd) {
    log(`\n3️⃣  Start the Backend (in a new terminal):`, 'bright');
    log(`   cd backend`, 'cyan');
    const isWindows = process.platform === 'win32';
    if (isWindows) {
      log(`   venv\\Scripts\\activate`, 'cyan');
    } else {
      log(`   source venv/bin/activate`, 'cyan');
    }
    log(`   python run.py`, 'cyan');
    log(`   Backend will run on http://localhost:5000`, 'magenta');
  }

  log(`\n📖 For more information, check the README.md in the project folder`, 'yellow');
  log(`\n💡 Want to start the frontend automatically? Run:`, 'bright');
  log(`   cd ${projectName}/frontend && npm run dev\n`, 'cyan');

  // Ask if user wants to start the frontend now
  log('🚀 Would you like to start the frontend now? (y/n)', 'bright');

  // Simple readline for user input
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('', (answer) => {
    rl.close();
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      log('\n🚀 Starting frontend...', 'green');
      log('Press Ctrl+C to stop the server\n', 'yellow');
      execCommand('npm run dev', frontendDir, false);
    } else {
      log('\n👋 Happy coding! Run "npm run dev" in the frontend folder when ready.\n', 'green');
    }
  });
}

main().catch(error => {
  log('\n❌ An error occurred:', 'red');
  log(error.message, 'red');
  process.exit(1);
});
