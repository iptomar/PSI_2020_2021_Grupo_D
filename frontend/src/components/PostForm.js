import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import { Button } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import services from "../services";

//notificaçoes
const notify = () =>
  toast.success("História submetida com sucesso!", {
    position: toast.POSITION.BOTTOM_RIGHT,
  });

const MapForm = ({ marker, toggleForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState({});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    services.map
      .createStory({ name, email, story, marker })
      .then((res) => {
        services.map
          .updateStoryImage(res._id, image)
          .catch((_) => console.error("error inserting image"));
      })
      .catch((_) => console.error("error creating story"));
  };

  const handleSelectedImage = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("image", evt.target.files[0]);
    setImage(formData);
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
        <Form.Label>
          Introduza o seu <span style={{ color: "#FFB81D" }}>Nome</span>
        </Form.Label>
        <Form.Control
          type="text"
          className="my-auto"
          placeholder="Seu Nome"
          onChange={(e) => setName(e.target.value)}
          maxlength="35"
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>
          Endereço de <span style={{ color: "#FFB81D" }}>Email</span>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          maxlength="40"
        />
        <Form.Text>
          <span style={{ color: "#FFB81D" }}>
            Não vamos partilhar o seu email
          </span>{" "}
          com mais ninguem.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formStory">
        <Form.Label>
          {" "}
          Conte-nos a sua <span style={{ color: "#FFB81D" }}>História</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          onChange={(e) => setStory(e.target.value)}
          maxlength="500"
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
        <Form.Label>
          Mostre-nos as suas <span style={{ color: "#FFB81D" }}>Fotos</span>
        </Form.Label>
        <Form.Control type="file" onChange={(e) => handleSelectedImage(e)} />
      </Form.Group>

      <Button
        primary
        type="submit"
        style={{ backgroundColor: "#FFB81D", color: "#253746" }}
        onClick={notify}
      >
        Publicar História!
      </Button>
      <ToastContainer />
    </Form>
  );
};

export default MapForm;
