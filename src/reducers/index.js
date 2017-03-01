import { combineReducers } from 'redux'
import appReducer from './appReducer'

const reducer = combineReducers({
    mapState: appReducer
});

export default reducer
