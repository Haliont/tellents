import { combineReducers } from 'redux';

const text = (state = 'Hello, react') => state;

export default combineReducers({ text });
