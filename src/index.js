import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="inforce-test-task">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();
