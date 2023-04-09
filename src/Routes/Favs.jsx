import React , { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { actualTheme } = useContext(ContextGlobal);
  const cards = [];
  return (
    <Container
      fluid
      as="main"
      className={`pb-5 bg-${actualTheme} bg-opacity-50`}
      data-bs-theme={actualTheme}
    >
      <Container data-bs-theme={actualTheme}>
        <h1 className={`text-dark-emphasis`}>Dentists Favs</h1>
        <Row className="g-4">
          {cards.map((card, index) => (
            <Col>
              <Card user={card} key={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Favs;
