import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



let a = 5
a = 6
/*a = "dsdsd"
a = true*/


let b = {
    name: "illy",
    age: 15,
    school: {
        school: 19,
    }
}




let student = [
    {
        lyceum: {
            group_a: {
                class_a: 11,
                class_b: 12,
            },
            group_b: {
                class_a: 21,
                class_b: 22,
            },
            group_c: {
                class_a: 31,
                class_b: 32,
            },
            group_d: {
                class_a: 41,
                class_b: 42,
            },
        }
    }
    ];



let c: number;
c = 4
/*c = true
c = 'ftft'*/