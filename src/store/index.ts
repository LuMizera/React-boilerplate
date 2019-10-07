import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./ducks/rootReducer";
import { ApplicationState } from "../models";
import rootSaga from "./ducks/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
