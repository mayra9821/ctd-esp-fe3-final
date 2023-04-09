import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { actualTheme, dataDocs } = useContext(ContextGlobal);
  console.log("🚀 ~ file: Home.jsx:12 ~ Home ~ dataDocs:", dataDocs);

  return (
    <Container
      fluid
      as="main"
      className={`pb-5 bg-${actualTheme} bg-opacity-75`}
      data-bs-theme={actualTheme}
    >
      <Container data-bs-theme={actualTheme}>
        <h1 className={`text-dark-emphasis`}>Inicio</h1>
        <Row className="g-4">
          {dataDocs.map((doct, index) => (
            <Col>
              <Card doct={doct} key={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
