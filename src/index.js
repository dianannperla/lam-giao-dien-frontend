import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

const App = () => {
    return (
        <div>
            <h1>Chào mừng đến với Lam Giao Diện Frontend</h1>
            <Button label="Nhấn vào đây" onClick={() => alert('Clicked!')} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));