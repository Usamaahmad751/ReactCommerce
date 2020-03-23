import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import '../node_modules/bootstrap-4-react/dist/bootstrap-4-react';
import App from './App';
import { Provider } from 'react-redux'
import reducer from './reducer/reducer'
import * as serviceWorker from './serviceWorker';
import Practice from './Practice';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
