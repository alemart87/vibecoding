"""
Punto de entrada para ejecutar la aplicación Flask
"""
import os
from app import create_app
from app.utils.config import config
from app.utils.database import db
from flask.cli import FlaskGroup

# Determinar el entorno
env = os.getenv('FLASK_ENV', 'development')
app = create_app(config[env])

cli = FlaskGroup(app)


@cli.command('init-db')
def init_db():
    """
    Inicializa la base de datos
    """
    with app.app_context():
        db.create_all()
        print("Base de datos inicializada correctamente")


if __name__ == '__main__':
    cli()

