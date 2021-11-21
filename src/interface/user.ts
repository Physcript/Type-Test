

export interface IUserProps {
    firstName: string,
    lastName: string,
    email: string,
    verified: string,
    token: string
}

export interface IAuthState {
    USER: IUserProps | null,
    AUTH: boolean,
}

export interface ILoginProps {
    email: string,
    password: string
}

export interface IActionLogin {
    type: 'LOGIN',
    payload: IUserProps
}

export interface IActionLogout {
    type: 'LOGOUT',

}

export type IActionProps  = IActionLogin | IActionLogout
