import { Suspense, lazy } from 'react';

import './app.css';

import Loading from './components/Loading';

const Twemoji = lazy(() => import('react-twemoji'));
const Routes = lazy(() => import('./routes/routes'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<Loading content="Carregando tela..." />} >
      <Twemoji options={{ className: 'emoji' }}>
        <Routes />
        <Footer />
      </Twemoji>
    </Suspense>
  );
}

export default App;
