import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import toast from './middleware/toast';

// create
export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), toast, logger],
  });
}
