import React, { useState, createContext, useContext, ReactNode } from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";

export interface AuthUser {
    id: number;
    username: string;
    fullname: string;
    email: string;
    role: string;
    token: string;
}

export interface AuthTable {
    num_seat: number;
    id_table: number;
    fullname: string;
    email: string;
    id: number;
}

interface AuthContextProps {
    user: AuthUser | AuthTable | null;
    login: (email: string, password: string, role: string) => Promise<void>;
    logout: () => void;
    showUser: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState(userService.getUser());
    console.log(user);

    const login = async (email: string, password: string, role: string) => {
        if (role === "tenant-cashier") {
            try {
                console.log(`email: ${email}, password: ${password}. MASUK`);
                const loggedInUser = await userService.login(
                    email,
                    password,
                    "tenant-cashier",
                );
                setUser(loggedInUser);
                toast.success("Logged in successfully.");
            } catch (error: any) {
                toast.error(
                    error.response?.data?.message ||
                        "An error occurred during login.",
                );
            }
        } else if (role === "customer") {
            try {
                console.log(`num_seat: ${email}, id_table: ${password}. MASUK`);
                const loggedInUser = await userService.login(
                    email,
                    password,
                    "customer",
                );
                setUser(loggedInUser);
                toast.success("Logged in successfully.");
            } catch (error: any) {
                toast.error(
                    error.response?.data?.message ||
                        "An error occurred during login.",
                );
            }
        }
    };

    // const register = async (data) => {
    //     try {
    //         const user = await userService.register(data);
    //         setUser(user);
    //         toast.success("Register Successful");
    //     } catch (error: any) {
    //         toast.error(error.response.data);
    //     }
    // };

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
        // register,
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
