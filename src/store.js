import {createStore} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import mySaga from "./sagas";

// Instacia o saga middleware
const sagaMiddleware = createSagaMiddleware();

// Constrói o Store com o middleware do saga
export default createStore(reducer, applyMiddleware(sagaMiddleware));

// Executa o saga
sagaMiddleware.run(mySaga);