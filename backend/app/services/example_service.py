"""
Servicio de ejemplo - Aquí va la lógica de negocio
"""
from app.models.base import BaseModel


class ExampleService:
    """
    Servicio de ejemplo que demuestra cómo estructurar la lógica de negocio
    """
    
    @staticmethod
    def get_example_data():
        """
        Ejemplo de método de servicio
        """
        return {
            'message': 'Este es un ejemplo de servicio',
            'status': 'success'
        }
    
    @staticmethod
    def process_data(data):
        """
        Ejemplo de procesamiento de datos
        """
        # Aquí iría la lógica de negocio
        processed = {
            'original': data,
            'processed': True,
            'timestamp': '2025-01-01T00:00:00Z'
        }
        return processed

