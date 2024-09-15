from flask import Blueprint, jsonify, request
from app.models import FAQ
from app.database import db

faq_blueprint = Blueprint('faq', __name__)

def handle_404(error_message="FAQ not found"):
    return jsonify({'error': error_message}), 404

@faq_blueprint.route('/faqs', methods=['GET'])
def get_faqs():
    faqs = FAQ.query.all()
    return jsonify([faq.to_dict() for faq in faqs])

@faq_blueprint.route('/faqs/<int:id>', methods=['GET'])
def get_faq(id):
    faq = FAQ.query.get(id)
    if faq is None:
        return handle_404()
    return jsonify(faq.to_dict())

@faq_blueprint.route('/faqs', methods=['POST'])
def create_faq():
    data = request.get_json()

    if not data or not 'question' in data or not 'answer' in data:
        return jsonify({'error': 'Both question and answer are required!'}), 400

    new_faq = FAQ(question=data['question'], answer=data['answer'])
    db.session.add(new_faq)
    db.session.commit()

    return jsonify(new_faq.to_dict()), 201

@faq_blueprint.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    faq = FAQ.query.get(id)
    if faq is None:
        return handle_404()

    data = request.get_json()

    if not data or not 'question' in data or not 'answer' in data:
        return jsonify({'error': 'Both question and answer are required!'}), 400

    faq.question = data['question']
    faq.answer = data['answer']
    db.session.commit()

    return jsonify(faq.to_dict()), 200

@faq_blueprint.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    faq = FAQ.query.get(id)
    if faq is None:
        return handle_404()

    db.session.delete(faq)
    db.session.commit()

    return jsonify({'message': 'FAQ deleted successfully!'}), 200
