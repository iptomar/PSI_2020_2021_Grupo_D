# Script usado para manipular entries na base de dados do MongoDB
# usando este script poder-se-ia eliminar e/ou editar novas entries

from pymongo import MongoClient


cluster = MongoClient("mongodb+srv://memetations:lXYYl3PQoKxcv4AW@santa-nossa.jzn3z.mongodb.net/maindb?retryWrites"
                      "=true&w=majority")
db = cluster["maindb"]
collection = db["stories-unchecked"]

#apaga todos os dados na colecao
collection.delete_many({})

results = collection.find({})
for x in results:
    print(x)

#conta o numero de documentos na coleçao/deve ser 0
post_count = collection.count_documents({})
print(post_count)
