import { combineReducers } from 'redux'
import ProfileReducer from './reducer_profiles'
import ActiveProfile from './reducer_active_profile'

const rootReducer = combineReducers({
  profiles: ProfileReducer,
  activeProfile: ActiveProfile
});

export default rootReducer;
