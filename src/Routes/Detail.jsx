import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import DocDetails from "../Components/DocDetails";
import Container from "react-bootstrap/Container";

const Detail = () => {
  const { id } = useParams();
  const { actualTheme } = useContext(ContextGlobal);
  const [user, setUser] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const docts = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = await docts.json();
        setUser(user);
      } catch (e) {
        console.log("🚀 ~ file: global.context.jsx:34 ~ getData ~ e:", e);
      }
      console.log("🚀 ~ file: Detail.jsx:23 ~ getData ~ user:", user);
    }
    getData();
  }, [id, user]);

  return (
    <>
      <Container
        fluid
        as="main"
        className={`pb-5 bg-${actualTheme} bg-opacity-50`}
        data-bs-theme={actualTheme}
      >
        <Container data-bs-theme={actualTheme}>
          <h1 className={`text-dark-emphasis`}>Detalles del Dentista{id} </h1>
          {user && (
            <>
              <h1>{user.name}</h1>
              <DocDetails
                user={user}
                theme={actualTheme === "dark" ? actualTheme : "light"}
              />
            </>
          )}
        </Container>
      </Container>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
