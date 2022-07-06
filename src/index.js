import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Flowbite } from 'flowbite-react';
import 'flowbite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Flowbite
  theme={{
    theme: {
      button: {
        base: '',
      },
      navbar: {
        base: 'px-2 py-2.5 sm:px-4',
        collapse: {
          list: 'mt-4 flex flex-col md:items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
        },
        link: {
          active: {
            on: 'bg-primary text-white dark:text-white md:bg-transparent md:text-primary',
            off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary md:dark:hover:bg-transparent md:dark:hover:text-white',
          },
        },
      },
    },
  }}>
    <App />
</Flowbite>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
