import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import reducer from "./reducer"

//Esta linea sirve para conectar nuestra app con la extension REDUX DEVTOOLS del navegador.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // esta linea sirve para que podamos hacer peticiones a una API/servidor.
    )

export default store;