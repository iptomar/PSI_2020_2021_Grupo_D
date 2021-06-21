from pymongo import MongoClient
import random
import math


cluster = MongoClient("mongodb+srv://memetations:lXYYl3PQoKxcv4AW@santa-nossa.jzn3z.mongodb.net/maindb?retryWrites"
                      "=true&w=majority")
db = cluster["maindb"]
collection = db["stories-unchecked"]

collection.delete_many({})

for x in range(10):
    #gerar latitudes e longitudes
    lat1 = random.uniform(-90, 90)
    lng1 = random.uniform(-180, 180)
    post1 = {"name": str(x) + "º script", "email": str(x)+"py@email.com", "lat": lat1, "lng": lng1, "story": f" NAO MEXER!!ISTO É PARA TESTAR COISAS"}
    #inserir na base de dados
    collection.insert_one(post1)

results = collection.find({})
y = True
for x in results:
    #calcular a distancia de cada ponto até ás as coordenadas da fundacao Andaluz em Santarem
    dist = math.dist([x['lng'], x['lat']], [39.333600, -8.635100])
    if y:
        #para colocar a primeira distancia calculada como min e max
        maX = dist
        miN = dist
        y = False

    if dist > maX:
        #atualizar o mais longe e guardar o seu ID para poder mostrar mais informacao mais tarde
        maX = dist
        maxId = x['_id']

    if dist < miN:
        miN = dist
        minId = x['_id']

print("A historia mais longe da nossa fundacao foi introduzida pelo " + collection.find_one({"_id": maxId})['name'])

print("E a mais perto foi introduzida por " + collection.find_one({"_id": minId})['name'])