"""
Inicialización de la aplicación Flask
"""
from flask import Flask
from flask_cors import CORS
from app.utils.database import db, init_db
from app.utils.config import Config
from app.routes.api import api_bp


def create_app(config_class=Config):
    """
    Factory function para crear la aplicación Flask
    """
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Inicializar extensiones
    init_db(app)
    
    # Configurar CORS
    CORS(app, origins=app.config.get('CORS_ORIGINS', ['http://localhost:3000']))
    
    # Registrar blueprints
    app.register_blueprint(api_bp, url_prefix='/api')
    
    return app

