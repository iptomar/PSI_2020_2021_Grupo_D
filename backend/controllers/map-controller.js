const mapService = require("../services/map-service.js");

exports.getPoints = (req, res) => {
  mapService
    .getPoints()
    .then((data) => res.send(data))
    .catch((message) => res.status(500).send(message));
};

exports.createPoint = (req, res) => {
  mapService
    .createPoint(req.body.lat, req.body.lng, req.body.desc)
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => res.status(500).send(error.message));
};
