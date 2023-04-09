import React, { useContext, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link, useNavigate } from "react-router-dom";

import {
  Button,
  Card as CardBs,
  ButtonGroup,
  Row,
  Alert,
} from "react-bootstrap";

const Card = ({ doct }) => {
  console.log("🚀 ~ file: Card.jsx:18 ~ Card ~ doct:", doct);
  const [alert, showAlert] = useState(false);
  const addFav = () => {
    const action = isFav ? FAVS_ACTIONS.REMOVE : FAVS_ACTIONS.ADD;
    dispatchFavs({ type: action, payload: doct });
    showAlert(action);
    setTimeout(() => {
      showAlert(false);
    }, 2000);
  };

  const navigate = useNavigate();
  const { dispatchFavs, favs, FAVS_ACTIONS } = useContext(ContextGlobal);
  const isFav = favs.some((person) => person.id === doct.id);
  return (
    <CardBs key={doct.id}>
      <Link to={`/detail/${doct.id}`} className="text-decoration-none">
        <CardBs.Img variant="top" src="images/doctor.jpg" />
        <CardBs.Body>
          <CardBs.Title className="text-decoration-none">
            {doct.name}
          </CardBs.Title>
          <CardBs.Text className="text-decoration-none">
            {doct.username}
          </CardBs.Text>
        </CardBs.Body>
        <Row>
          {alert === "ADD" && (
            <Alert
              variant="success"
              style={{
                fontSize: "8px",
                padding: "1px",
                margin: "0px",
                zIndex: "10",
              }}
            >
              <p className="text-center m-0">Dentista añadido de los favoritos</p>
            </Alert>
          )}
          {alert === "REMOVE" && (
            <Alert
              variant="danger"
              style={{
                fontSize: "8px",
                padding: "1px",
                margin: "0px",
                zIndex: "10",
              }}
            >
              <p className="text-center m-0"> Dentista removido de los favoritos</p>
            </Alert>
          )}
        </Row>
      </Link>
      <ButtonGroup
        size="xs"
        aria-label="Basic example"
        style={{ "padding-bottom": "10px" }}
      >
        <Button
          title="See Details"
          variant="info"
          size="xs"
          onClick={() => navigate(`/detail/${doct.id}`)}
        >
          🔎
        </Button>
        <Button
          title={isFav ? "Quitar de Favoritos" : "Agregar a Favoritos"}
          onClick={addFav}
          size="xs"
          className="favButton"
        >
          {isFav ? "⛔" : "⭐"}
        </Button>
      </ButtonGroup>
    </CardBs>
  );
};

export default Card;
