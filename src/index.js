import { StrictMode } from 'react';
import { render } from 'react-dom';
import { HelmetProvider } from "react-helmet-async";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './lib/reportWebVitals';

import App from './App';
import OnlineOfflineProvider from './contexts/OnlineOfflineContext';
import { analyticsActions } from './services/analytics';

render(
  <StrictMode>
    <OnlineOfflineProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </OnlineOfflineProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(analyticsActions);
