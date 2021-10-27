// import { combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import { phoneReducer } from './phoneBook/phonebook-reducer';

// const myMiddleware = store => next => action => {

//   next(action)
// }

// const rootReducer = combineReducers({
//   phoneBook: phoneReducer,

// });

// export const store = configureStore({
//   reducer: rootReducer,

//   middleware: (getDefaultMiddleware) => [
//       ...getDefaultMiddleware({
//        serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//       }),
//     myMiddleware,
//     logger,
//   ],

//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

// // const feedbackStore = {
// //   store,
// //   persistor,
// // };

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import { phoneReducer } from './phoneBook/phonebook-reducer';
const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phoneBook: phoneReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
