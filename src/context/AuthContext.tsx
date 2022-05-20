import { createContext } from "react";



export interface auth_state_interface {
    isLoggedIn: boolean;
    user_id?: string;
    user_name?: string;
}

export const auth_state_initial:auth_state_interface = {
    isLoggedIn: false,
    user_id: undefined,
    user_name: undefined
}

export interface auth_context_props {
    authState: auth_state_interface;
    signIn: ()=> void;
    signOut: ()=> void;

}

export const AuthContext = createContext({} as auth_context_props)

export const AuthProvider = ( { children }: any ):JSX.Element =>{
    return(
        <AuthContext.Provider
            value={{
                authState: auth_state_initial,
                signIn: ()=> {},
                signOut: ()=> {}
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}