import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';

// create
export default function () {
  return configureStore({
    reducer,
    middleware: [logger],
  });
}
