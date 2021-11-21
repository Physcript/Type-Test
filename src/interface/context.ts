import React from 'react';

import { IActionProps, IAuthState } from './user';

export interface IAuthContextProps {
    authState: IAuthState,
    authDispatch: React.Dispatch<IActionProps>
}
