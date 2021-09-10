import { Suspense, lazy } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import Loading from './components/Loading';

const Routes = lazy(() => import('./routes'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<Loading content="Preparando menu..." />} >
      <Routes />
      <Footer />
      <div className="bg-success bg-danger bg-warning active text-dark" style={{ display: 'none' }}></div>
    </Suspense>
  );
}

export default App;
