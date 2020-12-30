import {combineReducers} from 'redux'
import authUser from './userReducer.js'
import error from './error.js'

export default combineReducers({
	authUser,
	error																																		
})																																																							