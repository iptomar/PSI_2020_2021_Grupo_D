const mapService = require("../services/map-service.js");

exports.getStories = (_, res) => {
  mapService
    .getStories()
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
};

exports.getUncheckedStories = (_, res) => {
  mapService
    .getUncheckedStories()
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
};

exports.createStory = (req, res) => {
  mapService
    .createStory(req.body.lat, req.body.lng, req.body.desc)
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => res.status(500).send(error.message));
};

exports.checkStory = (req, res) => {
  mapService
    .checkStory(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
};

exports.removeStory = (req, res) => {
  mapService
    .removeStory(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
};
