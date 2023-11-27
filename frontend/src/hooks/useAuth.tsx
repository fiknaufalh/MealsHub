import React, { useState, createContext, useContext, ReactNode } from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";

interface AuthUser {
    id: number;
    username: string;
    fullname: string;
    email: string;
    role: string;
    token: string;
}

interface AuthTable {
    num_seat: number;
    id_table: number;
    fullname: string;
    email: string;
    id: number;
}

interface newUser {
    id: number;
    fullname: string;
    email: string;
    username: string;
    password: string;
    role: string;
}

interface AuthContextProps {
    user: AuthUser | AuthTable | null;
    login: (email: string, password: string, role: string) => Promise<void>;
    logout: () => void;
    showUser: () => void;
    registers: (
        fullname: string,
        email: string,
        username: string,
        password: string,
        role: string,
    ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState(userService.getUser());
    console.log(user);

    const login = async (email: string, password: string, role: string) => {
        try {
            console.log(`email: ${email}, password: ${password}. MASUK`);
            const loggedInUser = await userService.login(email, password, role);
            setUser(loggedInUser);
            toast.success("Logged in successfully.");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message ||
                    "An error occurred during login.",
            );
        }
    };

    const registers = async (
        fullname: string,
        email: string,
        username: string,
        password: string,
        role: string,
    ) => {
        try {
            const user = await userService.register(
                fullname,
                email,
                username,
                password,
                role,
            );
            setUser(user);
            toast.success("Register Successful");
        } catch (error: any) {
            toast.error(error.response.data);
        }
    };

    const logout = () => {
        userService.logout();
        setUser(null);
        toast.success("Logged out successfully.");
    };

    // const updateProfile = async (user) => {
    //     const updatedUser = await userService.updateProfile(user);
    //     toast.success("Profile Update Was Successful");
    //     if (updatedUser) setUser(updatedUser);
    // };

    // const changePassword = async (passwords) => {
    //     await userService.changePassword(passwords);
    //     logout();
    //     toast.success("Password Changed Successfully, Please Login Again!");
    // };

    const showUser = () => {
        console.log(user);
    };

    const values: AuthContextProps = {
        user,
        login,
        logout,
        showUser,
        registers,
        // updateProfile,
        // changePassword,
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
