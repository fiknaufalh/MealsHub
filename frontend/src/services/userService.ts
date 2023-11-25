import axios from "axios";

export const getUser = () =>
    localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null;

export const login = async (email: string, password: string) => {
    const { data } = await axios.post("/users/login", { email, password });
    localStorage.setItem("user", JSON.stringify(data));
    return data;
};

export const logout = () => {
    localStorage.removeItem("user");
};
