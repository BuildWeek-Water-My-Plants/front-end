import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL: "API LINK GOES HERE", //<---API info needed here
        headers: {
            Authorization: token,
        }
    });
};