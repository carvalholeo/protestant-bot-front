import { Suspense, lazy } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import Loading from './components/Loading';

const Routes = lazy(() => import('./routes/routes'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<Loading content="Carregando tela..." />} >
      <Routes />
      <Footer />
    </Suspense>
  );
}

export default App;
