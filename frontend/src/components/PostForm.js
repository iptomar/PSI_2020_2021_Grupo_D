import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import { Button } from "semantic-ui-react";
import services from "../services";

const MapForm = ({ marker, toggleForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  //TODO: image here, or image function

  const handleSubmit = (evt) => {
    evt.preventDefault();

    services.map
      .createStory({ name, email, story, marker })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <Form onSubmit={(evt) => handleSubmit(evt)}>
      <Form.Group controlId="formExit">
        <Button
          secondary
          onClick={toggleForm}
          style={{ backgroundColor: "darkred", color: "white" }}
        >
          Voltar para o Mapa
        </Button>
      </Form.Group>
      <Form.Group controlId="formName">
        <Form.Label>Introduza o seu Nome</Form.Label>
        <Form.Control
          type="text"
          className="my-auto"
          placeholder="Seu Nome"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text>Não vamos partilhar o seu email com mais ninguem.</Form.Text>
      </Form.Group>

      <Form.Group controlId="formStory">
        <Form.Label> Conte-nos a sua história</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          onChange={(e) => setStory(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formmarkerinates">
        <Form.Row>
          <Col>
            <Form.Control value={marker[0]} placeholder="Latitude" disabled />
          </Col>
          <Col>
            <Form.Control value={marker[1]} placeholder="Longitude" disabled />
          </Col>
        </Form.Row>
      </Form.Group>

      <Form.Group controlId="formImages">
        <Form.Label>Mostre-nos as suas Fotos</Form.Label>
        <Form.File id="imageFile" multiple />
      </Form.Group>

      <Button
        primary
        type="submit"
        style={{ backgroundColor: "#a379c9", color: "white" }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default MapForm;
