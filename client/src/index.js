import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Components/Store/index';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Provider store={store}>
        <App />
      </Provider>
    </LocalizationProvider>
);


reportWebVitals();
