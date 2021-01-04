import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3030",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin":  "*",
    },
    withCredentials: true,
});
