from pymongo import MongoClient

#lista da palavras que queremos apagar
list = ["palavra1", "palavra2"]
#ligacao a BD
cluster = MongoClient("mongodb+srv://memetations:lXYYl3PQoKxcv4AW@santa-nossa.jzn3z.mongodb.net/maindb?retryWrites"
                      "=true&w=majority")
db = cluster["maindb"]
collection = db["stories-unchecked"]

#inserir posts para testes
post1 = {"name": "Dona Maria", "email": "dona@maria.pt", "story": "devia ficar",
         "lat": 39.65645, "lng": -8.151855, "image": ""}

post2 = {"name": "Prima da Dona Maria", "email": "Primadona@maria.pt", "story": "esta tinha que sair niggg",
         "lat": 39.65645, "lng": -8.151855, "image": ""}

post3 = {"name": "Tia da Dona Maria", "email": "tia@maria.pt", "story": "esta tem que ficar tambem",
         "lat": 39.65645, "lng": -8.151855, "image": ""}

post4 = {"name": "Mae da Dona Maria", "email": "mae@maria.pt", "story": "isto é feito com o pymongo...outra vez",
         "lat": 39.65645, "lng": -8.151855, "image": ""}

post5 = {"name": "Pai da Dona Maria", "email": "pai@maria.pt", "story": "para apagar fag",
         "lat": 39.65645, "lng": -8.151855, "image": ""}

post6 = {"name": "Irmao da Dona Maria", "email": "irmao@maria.pt", "story": "isto é feito com o pymongo...outra vez",
         "lat": 39.65645, "lng": -8.151855, "image": ""}

post7 = {"name": "Avo da Dona Maria", "email": "avo@maria.pt", "story": "isto é feito com o pymongo...outra vez",
         "lat": 39.65645, "lng": -8.151855, "image": ""}

#inserir historia de teste
collection.insert_many([post1, post2,post3,post4,post5,post6,post7])
#mostrar o que está na collection agora
r2=collection.find({})
for x in r2:
    print(x)

#eliminar todas as historias com as palavras listadas na secção "story"
#percorrer todas as palavras na lista de palavras
for x in list:
    collection.delete_many({"story": { "$regex": x}})
#mostrar resultado final
results = collection.find({})
print("-------------------------")
for x in results:
    print(x)