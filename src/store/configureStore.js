import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

// create
export default function () {
  return configureStore({ reducer: reducer });
}
