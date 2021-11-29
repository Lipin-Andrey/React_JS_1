import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styles from './Message.modules.css';

const text = 'React';

const Message = (props) => {
    return <p className={styles.color}>{props.text}</p>;
};

const Homework=()=>{
    return(
        <div>
            <h1 >Homework-2</h1>
            <Message  text={text}/>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <Homework />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
