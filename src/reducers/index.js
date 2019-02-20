import { combineReducers } from 'redux'
import MainReducers from './MainReducers'

const Reducers = combineReducers({
    main: MainReducers,
})

export default Reducers
