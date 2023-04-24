import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Donate from './pages/Donate';
import Location from './pages/Location';
import Profile from './pages/Profile';
import authReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/signIn' element={<Signin />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/location' element={<Location />} />
          <Route path='/userProfile' element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode >
);
