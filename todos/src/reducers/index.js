import {combineReducers} from 'redux';

import tasks from './tasks';
import total from './total';

export default combineReducers({
    tasks,
    total
});