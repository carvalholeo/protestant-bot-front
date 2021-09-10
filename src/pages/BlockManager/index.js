import { useState, useEffect } from 'react';
import Toast from "bootstrap/js/src/toast";

import apiProtestantBot from '../../services/apiProtestantBot';
import analytics from '../../services/analytics';

import Breadcrumb from '../../components/Breadcrumb';

function BlockManager() {
  analytics();
  const [userBlock, setUserBlock] = useState('');
  const [userUnblock, setUserUnblock] = useState('');
  const [apiResponse, setApiResponse] = useState({
    title: "Bloqueio e desbloqueio de usuário",
    time: "Alguns segundos atrás",
    className: "warning text-dark",
    message: 'Você precisa preencher um usuário para ser bloqueado ou desbloqueado.'
  });
  const [toast, setToast] = useState(new Toast());

  useEffect(() => {
    const toastLive = document.getElementById("liveToast");
    const toast = new Toast(toastLive);
    setToast(toast);
  }, []);

  function handleUser(event, block = true) {
    const inputDirty = event.target.value;
    const inputClean = inputDirty.replaceAll('@', '');

    if (block) {
      setUserBlock(inputClean);
    } else {
      setUserUnblock(inputClean);
    }
  }

  async function handleBlock(event) {
    event.preventDefault();

    if (userBlock === '') {
      toast.show();
      return;
    }

    const confirmation = window.confirm('Você tem certeza que deseja BLOQUEAR o bot?');

    const data = {
      user: userBlock
    };

    if (confirmation) {
      await apiProtestantBot.post('/blocklist/block', data)
        .then(() => {
          setApiResponse({
            title: "Desbloquear usuário",
            time: "Alguns segundos atrás",
            className: "success",
            message: `Usuário @${userBlock} bloqueado com sucesso.`
          });
          setUserBlock('');
        })
        .catch(error => {
          setApiResponse({
            title: "Desbloquear usuário",
            time: "Alguns segundos atrás",
            className: "danger",
            message: `Tivemos um problema para te bloquear e tudo que este app sabe é: "${error.message}". Tente de novo mais tarde.`,
          });
        })
        .finally(() => toast.show());
    } else {
      alert('Bloqueio cancelado');
    }
  }

  async function handleUnblock(event) {
    event.preventDefault();

    if (userUnblock === '') {
      toast.show();
      return;
    }

    const data = {
      user: userUnblock
    };

    await apiProtestantBot.put('/blocklist/unblock', data)
      .then(() => {
        setApiResponse({
          title: "Desbloquear usuário",
          time: "Alguns segundos atrás",
          className: "success",
          message: `Usuário @${userUnblock} foi desbloqueado com sucesso. Seja bem-vindx de volta!`,
        });
        setUserUnblock('');
      })
      .catch((error) => {
        setApiResponse({
          title: "Desbloquear usuário",
          time: "Alguns segundos atrás",
          className: "danger",
          message: `Tivemos um problema para te desbloquear e tudo que este app sabe é: "${error.message}". Tente de novo mais tarde.`,
        });
      })
      .finally(() => toast.show());
  }


  return (
    <main>
      <div className='container'>
        <Breadcrumb message="Bloquear o bot" />

        <h1>Bloqueio e desbloqueio do bot</h1>
        <p>Esta área é para você fazer o bloqueio ou o desbloqueio de um usuário.</p>

        <h2>Explicação</h2>
        <p>Na área de bloqueio, basta digitar o nome do usuário (a famosa @) e em seguida, clicar/tocar no botão Enviar. Isso fará com que os tweets desse usuário sejam <strong>IMPEDIDOS</strong> de retweet pelo sistema.</p>
        <p>Já na área de desbloqueio, o processo é bem semelhante: Digitar a @ no campo e depois, clicar ou tocar em enviar. Isso fará com que o bot seja novamente <strong>AUTORIZADO</strong> a dar RT nessa conta (e para ter o RT, a conta não pode estar trancada).</p>
        <p>Lembre-se que o uso desse recurso está descrito nos termos de uso e, ao usá-lo, você está concordando com ele.</p>

        <hr />
        <h3>Bloqueio</h3>
        <p>Esta é a parte para efetuar o <mark>bloqueio</mark> do bot na sua conta. Assim, ao perceber que um tweet pertence à você, ele é automaticamente ignorado.</p>
        <form onSubmit={e => handleBlock(e)} className="row g-3">
          <div className="input-group mb-3 col-auto">
            <span className="input-group-text" id="user_block">@</span>
            <input
              type="text"
              className="form-control"
              placeholder="Usuário do Twitter"
              aria-label="Usuário do Twitter para bloquear"
              onChange={e => handleUser(e, true)}
              value={userBlock}
            />
            <button className="btn btn-danger" type="submit">Bloquear</button>
          </div>
        </form>

        <hr />
        <h3>Desbloqueio</h3>
        <p>Esta é a parte para voltar a <mark>autorizar</mark> o bot a dar RT na sua conta. Tweets feitos entre o bloqueio e o desbloqueio são ignorados.</p>
        <form onSubmit={e => handleUnblock(e)} className="row g-3">
          <div className="input-group mb-3 col-auto">
            <span className="input-group-text" id="user_unblock">@</span>
            <input
              type="text"
              className="form-control"
              placeholder="Usuário do Twitter"
              aria-label="Usuário do Twitter para desbloquear"
              onChange={e => handleUser(e, false)}
              value={userUnblock}
            />
            <button className="btn btn-primary" type="submit">Desbloquear</button>
          </div>
        </form>
        <div className="position-relative" style={{ zIndex: 2000 }}>
          <div className="toast-container position-absolute bottom-0 end-0 pb-3">
            <div
              className={`toast bg-${apiResponse.className}`}
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              id="liveToast"
              data-bs-delay="10000"
            >
              <div className="toast-header">
                <strong className="me-auto">{apiResponse.title}</strong>
                <small>{apiResponse.time}</small>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Fechar"
                ></button>
              </div>
              <div className="toast-body">{apiResponse.message}</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default BlockManager;
