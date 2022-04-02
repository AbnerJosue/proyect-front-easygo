import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./components/logic/reducer";
import mainSaga from "./components/logic/sagas";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(
    {
      key: "root",
      storage,
      whitelist: ["auth"],
    },
    reducer
  );

  let composeEnhancers = compose;

  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
  )(createStore)(persistedReducer);

  const persistor = persistStore(store);

  sagaMiddleware.run(mainSaga);

  return { store, persistor };
};
