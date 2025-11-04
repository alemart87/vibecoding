"""
Configuración de la aplicación Flask
"""
import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    """Configuración base"""
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CORS_ORIGINS = os.getenv('CORS_ORIGINS', 'http://localhost:3000').split(',')
    
    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    """Configuración para desarrollo"""
    DEBUG = True
    DATABASE_URL = os.getenv('DATABASE_URL', 'sqlite:///db.sqlite3')
    SQLALCHEMY_DATABASE_URI = DATABASE_URL


class ProductionConfig(Config):
    """Configuración para producción"""
    DEBUG = False
    DATABASE_URL = os.getenv('DATABASE_URL')
    if not DATABASE_URL:
        raise ValueError("DATABASE_URL no está configurada")
    SQLALCHEMY_DATABASE_URI = DATABASE_URL
    SECRET_KEY = os.getenv('SECRET_KEY')
    if not SECRET_KEY:
        raise ValueError("SECRET_KEY no está configurada")


config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}

