import API from ".";
import { UserData } from "../utils/types";

export const registerUser = async (data: UserData) => {
        const response = await API.post("/auth/signup", data);
        return response.data;
    };

export const loginUser = async (data: UserData) => {
    const response = await API.post("/auth/login", data);
    return response.data;
}
