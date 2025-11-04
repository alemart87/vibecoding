"""
Modelo base para todos los modelos de la aplicación
"""
from datetime import datetime
from app.utils.database import db


class BaseModel(db.Model):
    """
    Clase base abstracta para todos los modelos
    Proporciona campos comunes como id, created_at, updated_at
    """
    __abstract__ = True
    
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
    
    def to_dict(self):
        """
        Convierte el modelo a diccionario
        """
        return {
            'id': self.id,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }
    
    def save(self):
        """
        Guarda el modelo en la base de datos
        """
        db.session.add(self)
        db.session.commit()
        return self
    
    def delete(self):
        """
        Elimina el modelo de la base de datos
        """
        db.session.delete(self)
        db.session.commit()
    
    @classmethod
    def get_by_id(cls, id):
        """
        Obtiene un modelo por su ID
        """
        return cls.query.get(id)
    
    @classmethod
    def get_all(cls):
        """
        Obtiene todos los registros del modelo
        """
        return cls.query.all()

