import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import contentTypePickerSlice from './contentTypePickerSlice'

const reducers = {
  form: formReducer,
  content: contentTypePickerSlice,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
