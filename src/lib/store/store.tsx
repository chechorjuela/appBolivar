import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';
import rootSaga from "@/lib/store/root.saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
