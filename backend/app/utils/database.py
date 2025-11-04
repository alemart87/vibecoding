"""
Configuración de base de datos con SQLAlchemy
"""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def init_db(app):
    """
    Inicializa la base de datos con la aplicación Flask
    """
    db.init_app(app)
    
    with app.app_context():
        # Crear todas las tablas
        db.create_all()
    
    return db

