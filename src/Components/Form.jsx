import React, { useState } from "react";
import {
  Form as FormBs,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleQuestionsChange = (event) => {
    setQuestions(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setShowSuccess(true);
      setShowError(false);
    } else {
      setShowSuccess(false);
      setShowError(true);
    }
  };

  const validateForm = () => {
    const nameLength = name.length;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    return nameLength > 5 && isValidEmail;
  };

  return (
    <FormBs onSubmit={handleSubmit}>
      {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          Por favor verifique su información nuevamente.
        </Alert>
      )}
      {showSuccess && (
        <Alert
          variant="success"
          onClose={() => setShowSuccess(false)}
          dismissible
        >
          Gracias {name}, te contactaremos cuando antes vía mail.
        </Alert>
      )}
      <FormBs.Group controlId="formName">
        <FormBs.Label>Nombre completo</FormBs.Label>
        <FormBs.Control
          type="text"
          placeholder="Escribe tu nombre completo"
          value={name}
          onChange={handleNameChange}
        />
      </FormBs.Group>
      <FormBs.Group controlId="formEmail">
        <FormBs.Label>Email</FormBs.Label>
        <InputGroup>
          <FormControl
            type="email"
            placeholder="Escribe tu email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </InputGroup>
      </FormBs.Group>
      <FormBs.Group controlId="formQuestions">
        <FormBs.Label>Preguntas</FormBs.Label>
        <FormBs.Control
          as="textarea"
          rows={3}
          placeholder="Escribe tus preguntas"
          value={questions}
          onChange={handleQuestionsChange}
        />
      </FormBs.Group>
      <Button type="submit">Enviar</Button>
    </FormBs>
  );
};

export default Form;
