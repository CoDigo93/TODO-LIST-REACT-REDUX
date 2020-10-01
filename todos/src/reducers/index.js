import {combineReducers} from 'redux';

import todos from './todos';
import total from './total';

export default combineReducers({
    todos,
    total
});