



import { createContext } from 'react';

import { IAuthContextProps } from '../../interface/context';
import { IAuthState } from '../../interface/user';

export const initialState:IAuthState = {
    USER: null,
    AUTH: false
}

const AuthContext = createContext<IAuthContextProps>({
    authState: initialState,
    authDispatch: () => {}
})

export const AuthContextProvider = AuthContext.Provider
export const AuthContextConsumer = AuthContext.Consumer
export default AuthContext
