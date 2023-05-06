import { useState, lazy, Suspense, useContext, useEffect } from 'react';
import Modal from 'bootstrap/js/dist/modal';

import apiProtestantBot from '../../services/apiProtestantBot';

import Loading from "../../components/Loading";

import { OnlineOfflineContext } from '../../contexts/OnlineOfflineContext';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const Breadcrumb = lazy(() => import("../../components/Breadcrumb"));
const HelmetWrapper = lazy(() => import("../../components/HelmetWrapper"));
const NotificationToast = lazy(() => import("../../components/NotificationToast"));
const Mark = lazy(() => import("../../components/Mark"));

function BlockManager() {
  const { online } = useContext(OnlineOfflineContext);
  const { isDark } = useContext(DarkModeContext);
  const [userBlock, setUserBlock] = useState('');
  const [userUnblock, setUserUnblock] = useState('');
  const [apiResponse, setApiResponse] = useState({
    title: "Bloqueio e desbloqueio de usuário",
    time: "Alguns segundos atrás",
    className: "warning text-dark",
    message: 'Você precisa preencher um usuário para ser bloqueado ou desbloqueado.'
  });
  const [notification, setNotification] = useState(false);
  const [className, setClassName] = useState('');
  const [darkMode, setDarkMode] = useState('');
  const [buttonLight, setButtonLight] = useState('btn-close');
  const [blockConfirm, setBlockConfirm] = useState(false);
  const [data, setData] = useState({ user: '' });
  const [modal, setModal] = useState(() => { });

  useEffect(() => {
    if (online) {
      setClassName('');
      return;
    }
    setClassName('disabled');
  }, [online]);

  useEffect(() => {
    if (isDark) {
      setDarkMode('bg-dark');
      setButtonLight('btn-close-white');
      return;
    }
    setDarkMode('');
    setButtonLight('');
  }, [isDark]);

  useEffect(() => {
    if (blockConfirm) {
      setClassName('disabled');
      apiProtestantBot.post('/blocklist/block', data)
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
        .finally(_ => {
          setNotification(true);
          setClassName('');
          setBlockConfirm(false);
          modal.hide();
        });
    }
  }, [blockConfirm, userBlock, data, modal])

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
      setNotification(true);
      return;
    }
    const modal = document.querySelector('#modalConfirmation');
    const myModal = new Modal(modal);
    setModal(myModal);
    myModal.show();

    setData({ user: userBlock });
  }

  async function handleUnblock(event) {
    event.preventDefault();

    if (userUnblock === '') {
      setNotification(true);
      return;
    }

    setData({ user: userUnblock });

    setClassName('disabled');
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
      .finally(_ => {
        setNotification(true);
        setClassName('');
      });
  }

  return (
    <Suspense fallback={<Loading message="Carregando dados..." />}>
      <main>
        <HelmetWrapper
          title="Bloqueio e desbloqueio do bot"
          canonical="block-manager"
          keywords="bloquear bot lutero, block bot lutero, block protestant bot, bloquear protestant bot, desbloquear bot lutero, tirar block bot lutero, tirar block protestant bot, desbloquear protestant bot"
          description="Os usuários que não se sentem bem comigo dando RT em seus posts, têm o direito de me impedir, sem precisar me bloquear no Twitter. Esta é a página pra impedir e liberar meus RTs."
        />
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
          {notification && (
            <NotificationToast data={apiResponse} delay="10000" />
          )}
          <p>Esta é a parte para efetuar o <Mark>bloqueio</Mark> do bot na sua conta. Assim, ao perceber que um tweet pertence à você, ele é automaticamente ignorado.</p>
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
              <button className={"btn btn-danger " + className} type="submit">Bloquear</button>
            </div>
          </form>

          <hr />
          <h3>Desbloqueio</h3>
          <p>Esta é a parte para voltar a <Mark>autorizar</Mark> o bot a dar RT na sua conta. Tweets feitos entre o bloqueio e o desbloqueio são ignorados.</p>
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
              <button className={"btn btn-primary " + className} type="submit">Desbloquear</button>
            </div>
          </form>
        </div>
      </main>

      <section className="modal fade " id="modalConfirmation" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
        <div className="modal-dialog">
          <article className={"modal-content " + darkMode}>
            <header className="modal-header">
              <h5 className="modal-title" id="modalTitle">Confirmação de bloqueio</h5>
              <button type="button" className={"btn-close " + buttonLight} data-bs-dismiss="modal" aria-label="Fechar"></button>
            </header>
            <main className="modal-body">
              Você tem certeza que deseja <Mark>bloquear</Mark> o bot?
            </main>
            <footer className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Não, cancelar</button>
              <button type="button" className={"btn btn-danger " + className} onClick={_ => setBlockConfirm(true)}>Sim, bloquear</button>
            </footer>
          </article>
        </div>
      </section>
    </Suspense>
  );
}

export default BlockManager;
