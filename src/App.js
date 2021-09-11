import { Suspense, lazy, useEffect, useState } from 'react';

import './_custom.scss'

import Loading from './components/Loading';
import NotificationToast from './components/NotificationToast';

const Routes = lazy(() => import('./routes'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [notification, setNotification] = useState(false);
  const [info, setInfo] = useState({
    title: '',
    message: '',
    className: ''
  });

  useEffect(() => {
    window.addEventListener('updatefound', () => {
      setInfo({
        title: 'Atualização',
        message: 'Há uma atualização pendente para o app. Para concluir, basta fechar todas as abas do app e entrar novamente (sem reabrir a aba anterior).',
        className: 'primary'
      });
      setNotification(true);
    });

    window.addEventListener('online', () => {
      setInfo({
          title: 'Você está online',
          message: 'Sua internet está funcionando novamente e voltamos a ficar conectados com o servidor 🔛😎',
          className: 'success'
      });
      setNotification(true);
    });

    window.addEventListener('offline', () => {
      setInfo({
          title: 'Você está offline',
          message: 'Parece que há um problema na sua conexão e estamos offline📴😭. Verifique sua conexão antes de tentar realizar alguma ação online.',
          className: 'warning text-dark'
      });
      setNotification(true);
    });
  }, []);

  return (
    <Suspense fallback={<Loading content="Preparando menu..." />} >
      {notification && (
        <NotificationToast autoHide="false" data={info}>
          <div className="d-grid gap-2 d-md-block pt-1" style={{ zIndex: 3100 }}>
            <button className="btn btn-dark btn-sm" type="button" data-bs-dismiss="toast" onClick={e => setNotification(false)}>Fechar</button>
          </div>
        </NotificationToast>
      )}
      <Routes />
      <Footer />
    </Suspense>
  );
}

export default App;
