import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const myfirstelement = <h1>Hello React!</h1>;

const mysecondelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const mythirdelement = <h1>React is {5 + 5} times better with JSX</h1>;

const myfourthelement = (
    <div>
      <h1>I am a Header.</h1>
      <h1>I am a Header too.</h1>
    </div>
);

const myfifthelement = <input type="text" />;

// ReactDOM.render(myfirstelement, document.getElementById('root'));
// ReactDOM.render(mysecondelement, document.getElementById('root'));
// ReactDOM.render(mythirdelement, document.getElementById('root'));
// ReactDOM.render(myfourthelement, document.getElementById('root'));
ReactDOM.render(myfifthelement, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
