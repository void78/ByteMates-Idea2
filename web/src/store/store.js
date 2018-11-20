import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form';
import ThemeOptions from './ThemeOptions';
import Auth from './Auth';
// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
    form: formReducer,
    ThemeOptions,
    Auth,
});

const store = createStore(rootReducer);

export default store;