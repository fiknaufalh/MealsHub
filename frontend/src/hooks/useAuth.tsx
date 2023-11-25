import React, { useState, createContext, useContext, ReactNode } from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";

interface AuthContextProps {
    user: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState(userService.getUser());

    const login = async (email: string, password: string) => {
        try {
            const loggedInUser = await userService.login(email, password);
            setUser(loggedInUser);
            toast.success("Logged in successfully.");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message ||
                    "An error occurred during login.",
            );
        }
    };

    const logout = () => {
        userService.logout();
        setUser(null);
        toast.success("Logged out successfully.");
    };

    const values: AuthContextProps = {
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContext;
};
