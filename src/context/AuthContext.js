import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "65c708c4c2ec530b626185f2",
        username: "follower",
        email: "follower@sm.com",
        password: "$2b$10$SMRw0WcdIafFMTm7PlfDC.0i0WWCLI0Leq8EY05GWrFcs6Zz0n/8y",
        profilePicture: "person/2.jpeg",
        coverPicture: "",
        followers: [],
        followings: [
            "65c708a5c2ec530b626185f0"
        ],
        isAdmin: false,
        createdAt: "2024-02-10T05:25:24.630Z",
        updatedAt: "2024-02-10T18:25:13.651Z"
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value = {{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
