import Twemoji from 'react-twemoji';

import Routes from './routes/routes';

import Footer from './components/Footer/';

import './app.css';

function App() {
  return (
    <Twemoji options={{ className: 'emoji' }}>
      <Routes />
      <Footer />
    </Twemoji>
  );
}

export default App;
