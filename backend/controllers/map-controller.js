const mapService = require("../services/map-service.js");
const formidable = require("formidable");

//Função de controller que permite ir buscar os dados das coordenadas ao serviço "map-service.js"
exports.getStories = (_, res) => {
  mapService
    .getStories()
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
};

//Função de controller que permite ir buscar os dados das coordenadas ao serviço "map-service.js"
exports.getUncheckedStories = (_, res) => {
  mapService
    .getUncheckedStories()
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
};

//Função de controller que permite criar coordenadas no serviço "map-service.js"
exports.createStory = (req, res) => {
  mapService
    .createStory(req.body.name, req.body.email, req.body.story, req.body.marker)
    .then((r) => res.status(200).json({ _id: r }))
    .catch((error) => res.status(500).send(error.message));
};

//Função de controller que permite ir buscar os dados de um marker ao "map-service.js"
exports.checkStory = (req, res) => {
  mapService
    .checkStory(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
};

//Função de controller que permite remover um marker pelo "map-service.js"
exports.removeStory = (req, res) => {
  mapService
    .removeStory(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
};

exports.updateStoryImage = (req, res) => {
  formidable().parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      mapService
        .updateStoryImage(req.params.id, files.image)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).send(err.message));
    }
  });
};
