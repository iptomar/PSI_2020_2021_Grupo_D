import React from "react";
import {Form,Col,Button} from 'react-bootstrap'



const MapForm = () => {
  return (
    <Form>
    <Form.Group controlId="formExit">
        <Button variant="secondary" >Voltar para o Mapa</Button>
    </Form.Group>
    <Form.Group controlId="formName">
        <Form.Label>Introduza o seu Nome</Form.Label>
        <Form.Control type="text" className="my-auto" placeholder="Seu Nome"/>
    </Form.Group>

  <Form.Group controlId="formEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Email" />
    <Form.Text className="text-muted">
    Não vamos partilhar o seu email com mais ninguem.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formStory">
    <Form.Label> Conte-nos a sua história</Form.Label>
    <Form.Control as="textarea" rows={5}/>
  </Form.Group>

    <Form.Group controlId="formCoordinates">
        <Form.Row>
            <Col>
            <Form.Control type="" placeholder="Latitude" disabled/>
            </Col>
            <Col>
            <Form.Control type="" placeholder="Longitude" disabled/>
            </Col>
        </Form.Row>
    </Form.Group>

    <Form.Group controlId="formImages">
        <Form.Label>Mostre-nos as suas Fotos</Form.Label>
        <Form.File id="imageFile" multiple/>
    </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )
}

export default MapForm