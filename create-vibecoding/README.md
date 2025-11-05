# create-vibecoding

NPX installer for VibeCoding - A full-stack learning project with Next.js and Flask.

## Quick Start

Install and run VibeCoding with a single command:

```bash
npx create-vibecoding my-project
```

Or use the default project name:

```bash
npx create-vibecoding
```

## What does it do?

This installer will:

1. ✅ Clone the VibeCoding repository
2. ✅ Install all frontend (Next.js) dependencies
3. ✅ Set up Python virtual environment for backend
4. ✅ Install all backend (Flask) dependencies
5. ✅ Create `.env` configuration files
6. ✅ Optionally start the frontend development server

## Prerequisites

Before running the installer, make sure you have:

- **Node.js** (v14 or higher)
- **Git**
- **Python 3** (optional, for backend)

The installer will check these prerequisites and guide you through the setup.

## After Installation

Once the installation is complete:

### Start the Frontend

```bash
cd my-project/frontend
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Start the Backend (optional)

In a new terminal:

```bash
cd my-project/backend

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Run the Flask server
python run.py
```

The backend API will be available at `http://localhost:5000`

## What You'll Learn

VibeCoding is an educational project that teaches:

- Building modern full-stack applications
- Using AI tools (like Cursor AI) for development
- Next.js with TypeScript and Tailwind CSS
- Flask with modular architecture
- Database design with SQLAlchemy
- Migration from SQLite to PostgreSQL
- Best practices for .env and configuration
- API design and integration

## Project Structure

After installation, you'll have:

```
my-project/
├── frontend/          # Next.js application
│   ├── app/          # Next.js App Router
│   ├── components/   # React components
│   ├── styles/       # Global styles
│   └── ...
├── backend/          # Flask application
│   ├── app/
│   │   ├── models/   # Database models
│   │   ├── services/ # Business logic
│   │   ├── utils/    # Utilities
│   │   └── routes/   # API routes
│   └── ...
└── README.md         # Complete documentation
```

## Troubleshooting

### Python not found

If you don't have Python installed, the installer will skip the backend setup. You can:
- Install Python 3 from [python.org](https://www.python.org/)
- Or use the frontend only and add the backend later

### npm install fails

Try:
```bash
cd my-project/frontend
rm -rf node_modules package-lock.json
npm install
```

### Virtual environment issues

If the Python virtual environment fails to create:
```bash
cd my-project/backend
python3 -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

## Learn More

- Check the complete README in your project folder
- Visit the [VibeCoding GitHub repository](https://github.com/alemart87/vibecoding)
- Explore the step-by-step tutorials included in the project

## License

MIT

## Support

For issues or questions, please visit the [GitHub Issues](https://github.com/alemart87/vibecoding/issues) page.
