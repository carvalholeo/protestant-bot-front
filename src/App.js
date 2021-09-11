import { Suspense, lazy, useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import Loading from './components/Loading';
import NotificationToast from './components/NotificationToast';

const Routes = lazy(() => import('./routes'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('updatefound', () => {
      setShow(true);
    });
  }, []);

  return (
    <Suspense fallback={<Loading content="Preparando menu..." />} >
      {show && (
        <NotificationToast autoHide="false" style={{ zIndex: 3000 }} data={{
          title: 'Atualização',
          message: 'Há uma atualização pendente para o app. Para concluir, basta fechar todas as abas do app e entrar novamente (sem reabrir a aba anterior).',
          className: 'primary'
        }} systemCall />
      )}
      <Routes />
      <Footer />
      <div className="bg-success bg-danger bg-warning bg-primary active text-dark btn-dark btn-sm d-grid gap-2 d-md-block pt-1" style={{ display: 'none !important' }}></div>
    </Suspense>
  );
}

export default App;
