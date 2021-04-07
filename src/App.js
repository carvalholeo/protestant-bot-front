import { Suspense, lazy } from 'react';

import './app.css';

const Twemoji = lazy(() => import('react-twemoji'));
const Routes = lazy(() => import('./routes/routes'));
const Footer = lazy(() => import('./components/Footer/'));

function App() {
  return (
    <Suspense fallback={
      <div className="d-flex justify-content-center align-items-center h4 pt-3">
        <p className="text-center">Carregando tela...</p>
      </div>
    }
    >
      <Twemoji options={{ className: 'emoji' }}>
        <Routes />
        <Footer />
      </Twemoji>
    </Suspense>
  );
}

export default App;
