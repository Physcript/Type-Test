
import { IActionProps, IAuthState } from '../../interface/user';

const reducer = (state: IAuthState, action: IActionProps):IAuthState => {
    switch ( action.type ) {
        case 'LOGIN':
            return {
                ...state,
                USER: action.payload,
                AUTH: true
            }
        case 'LOGOUT':
            return  {
                ...state,
                USER: null,
                AUTH: true
            }
        default:
            return {
                ...state
            }
    }
}


export default reducer
