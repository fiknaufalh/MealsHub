import axios from "axios";

export const getUser = () =>
    localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null;

export const login = async (email: string, password: string, role: string) => {
    console.log("masuk sini login di user service");
    const { data } = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
        role,
    });
    console.log("axios berhasil");
    localStorage.setItem("user", JSON.stringify(data));
    console.log("data berhasil disimpan, user berhasil ganti");
    return data;
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const register = async (
    fullname: string,
    email: string,
    username: string,
    password: string,
    role: string,
) => {
    const { data } = await axios.post("http://localhost:8000/auth/register", {
        fullname,
        email,
        username,
        password,
        role,
    });
    localStorage.setItem("user", JSON.stringify(data));
    return data;
};

export const updateProfile = async (user: any) => {
    const { data } = await axios.put("/api/users/updateProfile", user);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
};

export const changePassword = async (passwords: string) => {
    await axios.put("/api/users/changePassword", passwords);
};
