import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/app"
// import reportWebVitals from './reportWebVitals';

const elem = <h2>Hello world!</h2>;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);


