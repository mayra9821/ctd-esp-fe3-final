import React from "react";
import { Button, Card } from "react-bootstrap";

const CardComp = ({ name = "hola", username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <Card key={id}>
      <Card.Img variant="top" src="images/doctor.jpg" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Text</Card.Text>
        <Button onClick={addFav} className="favButton">
          ⭐ Add favorite
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
