# Script inicialmente utilizado para colocar pontos/histórias no mapa
# com ligação direta à base de dados do MongoDB


import random
from pymongo import MongoClient

cluster = MongoClient(
    "mongodb+srv://memetations:lXYYl3PQoKxcv4AW@santa-nossa.jzn3z.mongodb.net/maindb?retryWrites=true&w=majority")
db = cluster["maindb"]
collection = db["stories-unchecked"]


def random_generator(number1, number2):
    random_number = [random.uniform(number1, number2)]
    return random_number


for x in range(100):
    lat1 = random.uniform(37.0, 43.5)
    lng1 = random.uniform(-9.0, -1.8)
    post1 = {"lat": lat1, "lng": lng1, "desc": f"{x}º entry do script"}

    collection.insert_one(post1)
