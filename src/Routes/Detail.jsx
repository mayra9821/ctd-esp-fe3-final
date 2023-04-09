import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { actualTheme } = useContext(ContextGlobal);
  return (
    <>
      <h1></h1>

      <Container
        fluid
        as="main"
        className={`pb-5 bg-${actualTheme} bg-opacity-50`}
        data-bs-theme={actualTheme}
      >
        <Container data-bs-theme={actualTheme}>
          <h1 className={`text-dark-emphasis`}>Detail Dentist id </h1>
          <Row className="g-4">
            <Col>
              <h1>data</h1>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
