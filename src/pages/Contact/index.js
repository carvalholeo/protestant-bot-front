import { useState } from "react";

import api from "../../services/apiProtestantBot";
import Breadcrumb from "../../components/Breadcrumb";
import NotificationToast from "../../components/NotificationToast";
import analytics from "../../services/analytics";

function Contact() {
  analytics();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [message, setMessage] = useState("");
  const [size, setSize] = useState(0);
  const [apiResponse, setApiResponse] = useState({});
  const [notification, setNotification] = useState(false);
  const [className, setClassName] = useState('');

  function handleTwitter(event) {
    const inputDirty = event.target.value;
    const inputClean = inputDirty.replaceAll("@", "");

    if (inputClean.length <= 30) {
      setTwitter(inputClean);
    }
  }

  function handleField(event, size, field) {
    const input = event.target.value;
    if (input.length <= size) {
      field(input);
    }
  }

  function handleTextArea(event) {
    const input = event.target.value;
    if (input.length <= 2000) {
      setSize(input.length);
      setMessage(input);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (size <= 0 || message.trim().length <= 0) {
      setApiResponse({
        title: "Contato",
        className: "warning text-dark",
        message: `O único campo obrigatório, da mensagem, está vazio. Por favor, preencha para enviar seu contato.`,
      });
      setNotification(true);
      return;
    }

    const data = {
      name,
      twitter,
      email,
      message,
    };

    setClassName('disabled');
    await api
      .post("contact", data)
      .then(() => {
        setApiResponse({
          title: "Contato",
          time: "Alguns segundos atrás",
          className: "success",
          message: "Seu contato foi enviado com sucesso!",
        });
        setName("");
        setTwitter("");
        setEmail("");
        setMessage("");
        setSize(0);
      })
      .catch((error) => {
        setApiResponse({
          title: "Contato",
          time: "Alguns segundos atrás",
          className: "danger",
          message: `Tivemos um problema pra registrar seu contato. Tudo que este app sabe é: "${error.message}". Por gentileza, tente novamente.`,
        });
      })
      .finally(_ => {
        setNotification(true);
        setClassName('');
      });
  }

  return (
    <main>
      <div className="container">
        <Breadcrumb message="Contato" />

        <h1>Contato</h1>
        <p>
          Para qualquer coisa que você queira falar, basta usar o formulário
          abaixo. Assim que possível, eu vou te responder!
        </p>
        {notification && (
          <NotificationToast data={apiResponse} autoHide="false" />
        )}
        <form onSubmit={(e) => handleSubmit(e)} className="row g-2 mb-3">
          <div className="input-group mb-3 col-auto">
            <label className="col-sm-2 col-form-label me-3" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Fulano da Silva"
              id="name"
              aria-label="Seu nome vai neste campo"
              onChange={(e) => handleField(e, 50, setName)}
              value={name}
            />
          </div>
          <div className="input-group mb-3 col-auto">
            <label className="col-sm-2 col-form-label me-3" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="fulano@gmail.com"
              aria-label="Seu email para contato"
              onChange={(e) => handleField(e, 100, setEmail)}
              value={email}
            />
          </div>
          <div className="input-group mb-3 col-auto">
            <label className="col-sm-2 col-form-label me-3" htmlFor="twitter">
              Usuário do Twitter
            </label>
            <span className="input-group-text" id="user_twitter">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="BotLutero"
              id="twitter"
              aria-label="Usuário do Twitter para contato"
              onChange={(e) => handleTwitter(e)}
              value={twitter}
            />
          </div>
          <div className="input-group mb-3 col-auto">
            <label className="col-sm-2 col-form-label me-3" htmlFor="message">
              Sua mensagem <span className="text-info">*</span>
            </label>
            <textarea
              className="form-control"
              placeholder="Gostaria de agradecer pelo bot por causa de..."
              aria-label="Área para digitar sua mensagem"
              id="message"
              onChange={(e) => handleTextArea(e)}
              required
              value={message}
            ></textarea>
          </div>
          <p className="d-inline">{size} caractere(s) do limite de 2000.</p>
          <div className="mb-3 col-12 justify-content-center d-flex">
            <button className={"btn btn-danger col-3 me-3 " + className} type="reset">
              Apagar tudo
            </button>
            <button className={"btn btn-success col-5 " + className}>Enviar</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
