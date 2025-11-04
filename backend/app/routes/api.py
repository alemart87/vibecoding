"""
Rutas principales de la API
"""
from flask import Blueprint, jsonify
from app.services.example_service import ExampleService

api_bp = Blueprint('api', __name__)


@api_bp.route('/health', methods=['GET'])
def health_check():
    """
    Endpoint de health check
    """
    return jsonify({
        'status': 'healthy',
        'message': 'Backend is running'
    }), 200


@api_bp.route('/example', methods=['GET'])
def get_example():
    """
    Endpoint de ejemplo
    """
    service = ExampleService()
    data = service.get_example_data()
    return jsonify(data), 200

