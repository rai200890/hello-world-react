from random import randrange
from flask import Flask, jsonify
from faker import Faker
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)


@app.route("/users")
def users():
    fake = Faker("pt_BR")
    response = [{"name": fake.name(),
                 "email": fake.email(),
                 "ip": fake.ipv4(network=False)}
                for i in range(randrange(10))]
    return jsonify(response)
