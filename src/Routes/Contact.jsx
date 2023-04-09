import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Container from "react-bootstrap/Container";
import Form from "../Components/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { actualTheme } = useContext(ContextGlobal);
  return (
    <Container
      fluid
      className={`bg-${actualTheme} bg-opacity-50`}
      style={{ height: "80vh" }}
      data-bs-theme={actualTheme}
    >
      <Container data-bs-theme={actualTheme}>
        <Row className="pb-2">
          <Col>
            <h2 className={`text-dark-emphasis`}>Quieres Saber Mas</h2>
            <p>Envianos tus preguntas y nos pondremos en contacto </p>
          </Col>
        </Row>
        <Row className="p-10">
          <Col>
            <Form />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
