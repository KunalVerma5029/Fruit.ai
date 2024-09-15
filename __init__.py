from flask import Flask
from app.database import db
from app.routes import faq_blueprint

def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///faqs.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    app.register_blueprint(faq_blueprint)

    with app.app_context():
        db.create_all()

    return app
