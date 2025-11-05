# Guía Práctica: Creación de un Proyecto Full-Stack con Next.js y Flask

## ✅ Descripción en Español

Este repositorio es una guía práctica para aprender a utilizar Cursor AI como asistente de desarrollo construyendo un proyecto full-stack moderno. Vamos a crear una aplicación con Next.js (frontend) y Python Flask (backend) siguiendo una arquitectura modular profesional que incluye models, services, utils y routes.

Dentro encontrarás instrucciones paso a paso para:

- Crear y estructurar el proyecto con Cursor AI
- Generar el README inicial con prompts asistidos
- Configurar la arquitectura base del sistema
- Agregar .gitignore y buenas prácticas de variables .env
- Usar SQLite para desarrollo y preparar la migración futura a PostgreSQL
- Ejecutar y levantar ambos servicios (frontend + backend)

Este repositorio es ideal para quienes desean aprender a usar herramientas de IA para acelerar sus proyectos de software y desarrollar una base escalable, limpia y lista para producción.

## ✅ Description in English

This repository is a practical guide to learning how to use Cursor AI as a development assistant by building a modern full-stack project. We will create an application using Next.js (frontend) and Python Flask (backend) following a professional modular architecture with models, services, utils, and routes.

Inside you'll find step-by-step instructions to:

- Create and structure the project with Cursor AI
- Generate the initial README using assisted prompts
- Set up the base system architecture
- Add .gitignore and .env best practices
- Start with SQLite and prepare the project for future migration to PostgreSQL
- Run both services (frontend + backend)

This repository is ideal for developers who want to leverage AI tools to speed up development and build a clean, scalable, and production-ready foundation.

---

## 🚀 Instalación Rápida / Quick Installation

### Con NPX (Recomendado / Recommended)

La forma más rápida de empezar es usando nuestro instalador NPX:

```bash
npx create-vibecoding my-project
```

El instalador automáticamente:
- ✅ Clona el repositorio
- ✅ Instala todas las dependencias (frontend y backend)
- ✅ Configura los archivos .env
- ✅ Crea el entorno virtual de Python
- ✅ Te ofrece iniciar el servidor de desarrollo

**The fastest way to get started is using our NPX installer:**

```bash
npx create-vibecoding my-project
```

The installer automatically:
- ✅ Clones the repository
- ✅ Installs all dependencies (frontend and backend)
- ✅ Sets up .env files
- ✅ Creates Python virtual environment
- ✅ Offers to start the development server

### Instalación Manual / Manual Installation

Si prefieres instalarlo manualmente, sigue las instrucciones en las secciones siguientes.

---

## 1. Prompts para Creación de Proyecto con Next.js y Flask

### Prompts para usar con Cursor AI:

**Para crear el frontend con Next.js:**
```
Crea un proyecto Next.js con TypeScript usando la última versión disponible. 
Configura el proyecto con App Router, Tailwind CSS y ESLint.
```

**Para crear el backend con Flask:**
```
Crea un proyecto Flask con arquitectura modular que incluya:
- Carpeta models para los modelos de base de datos
- Carpeta services para la lógica de negocio
- Carpeta utils para funciones utilitarias
- Carpeta routes para las rutas de la API
- Configuración con SQLAlchemy para usar SQLite en desarrollo y PostgreSQL en producción
```

**Para generar el README:**
```
Crea un README.md completo con instrucciones en español e inglés que incluya:
- Cómo crear y estructurar el proyecto
- Cómo iniciar los servicios frontend y backend
- Configuración de .gitignore y .env
- Guía de migración de SQLite a PostgreSQL
```

---

## 2. Estructura Básica y Arquitectura Modular

### Estructura del Proyecto Completo

```
vibecoding/
├── frontend/                 # Aplicación Next.js
│   ├── app/                 # App Router (Next.js 13+)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/            # API Routes de Next.js (opcional)
│   ├── components/         # Componentes reutilizables
│   ├── lib/                # Utilidades y configuraciones
│   ├── public/             # Archivos estáticos
│   ├── styles/             # Estilos globales
│   ├── types/              # Tipos TypeScript
│   ├── hooks/              # Custom hooks
│   ├── services/           # Servicios para llamadas API
│   ├── utils/              # Funciones utilitarias
│   ├── .env.local          # Variables de entorno (local)
│   ├── .env.example        # Ejemplo de variables de entorno
│   ├── next.config.js      # Configuración de Next.js
│   ├── tsconfig.json       # Configuración TypeScript
│   ├── tailwind.config.js  # Configuración Tailwind
│   └── package.json        # Dependencias npm
│
├── backend/                # Aplicación Flask
│   ├── app/
│   │   ├── __init__.py     # Inicialización de Flask
│   │   ├── models/         # Modelos de base de datos
│   │   │   ├── __init__.py
│   │   │   └── base.py     # Modelo base con SQLAlchemy
│   │   ├── services/       # Lógica de negocio
│   │   │   ├── __init__.py
│   │   │   └── example_service.py
│   │   ├── utils/          # Funciones utilitarias
│   │   │   ├── __init__.py
│   │   │   ├── database.py # Configuración de BD
│   │   │   └── validators.py
│   │   └── routes/         # Rutas de la API
│   │       ├── __init__.py
│   │       └── api.py      # Rutas principales
│   ├── migrations/         # Migraciones de base de datos (Alembic)
│   ├── venv/               # Entorno virtual (no se incluye en git)
│   ├── .env                # Variables de entorno
│   ├── .env.example        # Ejemplo de variables de entorno
│   ├── requirements.txt    # Dependencias Python
│   ├── config.py           # Configuración de la aplicación
│   └── run.py              # Punto de entrada para ejecutar Flask
│
├── .gitignore              # Archivos a ignorar en git
└── README.md               # Este archivo
```

### Arquitectura Modular del Backend

**Models (`app/models/`):**
- Definiciones de modelos de base de datos usando SQLAlchemy
- Relaciones entre modelos
- Validaciones a nivel de modelo

**Services (`app/services/`):**
- Lógica de negocio separada de las rutas
- Funciones reutilizables para operaciones complejas
- Integración con modelos y base de datos

**Utils (`app/utils/`):**
- Funciones de utilidad generales
- Helpers para validación, formateo, etc.
- Configuración de base de datos
- Manejo de errores

**Routes (`app/routes/`):**
- Definición de endpoints de la API
- Manejo de requests y responses
- Validación de entrada
- Llamadas a servicios

---

## 3. Cómo "Encender" los Sistemas

### Frontend (Next.js)

1. **Navegar al directorio frontend:**
   ```bash
   cd frontend
   ```

2. **Instalar dependencias (solo la primera vez):**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   - La aplicación estará disponible en `http://localhost:3000`

### Backend (Flask)

1. **Navegar al directorio backend:**
   ```bash
   cd backend
   ```

2. **Crear y activar entorno virtual (solo la primera vez):**
   
   **Windows:**
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```
   
   **Linux/Mac:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Instalar dependencias (solo la primera vez):**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   # Editar .env con tus valores
   ```

5. **Inicializar la base de datos (primera vez):**
   ```bash
   python run.py init-db
   ```

6. **Ejecutar el servidor Flask:**
   ```bash
   python run.py
   ```
   
   O usando Flask directamente:
   ```bash
   flask run
   ```

7. **Verificar que el backend está corriendo:**
   - El backend estará disponible en `http://localhost:5000`
   - Puedes probar con: `http://localhost:5000/api/health`

### Ejecutar Ambos Servicios Simultáneamente

**Opción 1: Terminales separadas**
- Abre dos terminales, una para frontend y otra para backend

**Opción 2: Usando npm scripts (recomendado)**
En la raíz del proyecto, puedes crear un script que ejecute ambos:
```bash
# En Windows (PowerShell)
cd frontend; Start-Process npm -ArgumentList "run dev"; cd ../backend; python run.py
```

---

## 4. GitIgnore

El archivo `.gitignore` debe incluir:

```gitignore
# Node.js / Frontend
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
.next/
out/
build/
dist/
*.local

# Python / Backend
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
venv/
env/
ENV/
env.bak/
venv.bak/
*.egg-info/
dist/
build/
*.egg

# Base de datos
*.db
*.sqlite
*.sqlite3
db.sqlite3

# Variables de entorno
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Logs
logs/
*.log

# Testing
coverage/
.nyc_output/

# Misceláneo
.cache/
temp/
tmp/
```

---

## 5. Recomendaciones para el .env

### Frontend (.env.local)

```env
# API Backend URL
NEXT_PUBLIC_API_URL=http://localhost:5000

# Entorno
NEXT_PUBLIC_ENV=development

# Otras variables públicas (prefijo NEXT_PUBLIC_ es necesario para exponerlas al cliente)
# NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

**Nota:** En Next.js, solo las variables con prefijo `NEXT_PUBLIC_` están disponibles en el navegador.

### Backend (.env)

```env
# Flask Configuration
FLASK_APP=run.py
FLASK_ENV=development
FLASK_DEBUG=1

# Secret Key (¡NUNCA compartas esta clave!)
SECRET_KEY=tu-clave-secreta-super-segura-aqui-cambiala-en-produccion

# Database Configuration
# Para SQLite (desarrollo)
DATABASE_URL=sqlite:///db.sqlite3

# Para PostgreSQL (producción) - descomentar cuando migres
# DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_bd

# CORS Configuration
CORS_ORIGINS=http://localhost:3000

# JWT Configuration (si usas autenticación)
# JWT_SECRET_KEY=tu-jwt-secret-key
# JWT_ACCESS_TOKEN_EXPIRES=3600

# Email Configuration (si usas email)
# MAIL_SERVER=smtp.gmail.com
# MAIL_PORT=587
# MAIL_USE_TLS=True
# MAIL_USERNAME=tu-email@gmail.com
# MAIL_PASSWORD=tu-contraseña
```

### Buenas Prácticas:

1. **Nunca commitees archivos `.env`** al repositorio
2. **Crea archivos `.env.example`** con valores de ejemplo (sin datos sensibles)
3. **Usa diferentes archivos `.env`** para desarrollo, testing y producción
4. **Genera claves secretas seguras** usando herramientas como:
   ```bash
   python -c "import secrets; print(secrets.token_hex(32))"
   ```
5. **Valida que las variables requeridas existan** al iniciar la aplicación
6. **Documenta todas las variables** en el README o en `.env.example`

---

## 6. Recomendaciones de Base de Datos: SQLite → PostgreSQL

### Configuración Inicial con SQLite

SQLite es perfecto para desarrollo porque:
- No requiere instalación de servidor
- Es rápido y ligero
- Los archivos de BD se guardan localmente
- Ideal para prototipado y desarrollo

**Configuración en Flask (usando SQLAlchemy):**

```python
# app/utils/database.py
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os

db = SQLAlchemy()

def init_db(app):
    database_url = os.getenv('DATABASE_URL', 'sqlite:///db.sqlite3')
    app.config['SQLALCHEMY_DATABASE_URI'] = database_url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    return db
```

### Preparación para Migración a PostgreSQL

Para facilitar la migración futura, sigue estas prácticas:

#### 1. Usa SQLAlchemy ORM (no SQL crudo)
```python
# ✅ Bien - Compatible con ambas bases de datos
user = User.query.filter_by(email=email).first()

# ❌ Evitar - Específico de SQLite
# user = db.execute("SELECT * FROM users WHERE email = ?", (email,))
```

#### 2. Define tipos de datos compatibles
```python
from sqlalchemy import Column, Integer, String, DateTime, Text, Boolean
from datetime import datetime

class User(db.Model):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True, nullable=False)
    name = Column(String(255), nullable=False)
    bio = Column(Text)  # Text es compatible con ambas
    created_at = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)
```

#### 3. Usa Alembic para Migraciones
```bash
# Instalar Alembic
pip install alembic

# Inicializar Alembic
alembic init migrations

# Crear migración
alembic revision --autogenerate -m "Initial migration"

# Aplicar migraciones
alembic upgrade head
```

#### 4. Configuración Multi-Entorno

```python
# config.py
import os
from urllib.parse import urlparse

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    DEBUG = True
    DATABASE_URL = os.getenv('DATABASE_URL', 'sqlite:///db.sqlite3')
    SQLALCHEMY_DATABASE_URI = DATABASE_URL

class ProductionConfig(Config):
    DEBUG = False
    DATABASE_URL = os.getenv('DATABASE_URL')
    if not DATABASE_URL:
        raise ValueError("DATABASE_URL no está configurada")
    SQLALCHEMY_DATABASE_URI = DATABASE_URL

config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
```

#### 5. Checklist para Migración a PostgreSQL

- [ ] Instalar PostgreSQL y crear la base de datos
- [ ] Actualizar `DATABASE_URL` en `.env`:
  ```
  DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_bd
  ```
- [ ] Instalar `psycopg2` o `psycopg2-binary`:
  ```bash
  pip install psycopg2-binary
  ```
- [ ] Ejecutar migraciones:
  ```bash
  alembic upgrade head
  ```
- [ ] Verificar que todas las queries funcionan correctamente
- [ ] Revisar índices y optimizaciones específicas de PostgreSQL
- [ ] Configurar backups regulares

#### 6. Diferencias Importantes SQLite vs PostgreSQL

| Característica | SQLite | PostgreSQL |
|---------------|--------|------------|
| Tipo de columna DATE | TEXT | DATE/TIMESTAMP |
| Auto-increment | INTEGER PRIMARY KEY | SERIAL/BIGSERIAL |
| Case-sensitive | No (por defecto) | Sí |
| Concurrencia | Limitada | Excelente |
| Transacciones | Básicas | Avanzadas (ACID) |

**Ejemplo de código compatible:**
```python
# Funciona en ambas bases de datos
from sqlalchemy import func

# Contar registros
count = db.session.query(func.count(User.id)).scalar()

# Paginación
users = User.query.paginate(page=1, per_page=10, error_out=False)
```

---

## Scripts Útiles

### Inicializar Proyecto Completo

```bash
# Crear estructura de carpetas
mkdir -p frontend backend/app/{models,services,utils,routes}

# Frontend
cd frontend
npx create-next-app@latest . --typescript --tailwind --app

# Backend
cd ../backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install flask flask-sqlalchemy flask-cors python-dotenv alembic
```

---

## Recursos Adicionales

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Flask](https://flask.palletsprojects.com/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Alembic Documentation](https://alembic.sqlalchemy.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## Contribuir

Este es un proyecto educativo. Siéntete libre de hacer fork, crear issues o pull requests con mejoras.

---

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

