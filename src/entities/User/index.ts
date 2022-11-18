import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
import { userActions, userReducer } from './model/slice/userSlice'
import { User, UserSchema } from './model/types/user'

export {
  userReducer,
  userActions,
  UserSchema,
  User,
  getUserAuthData,
}
