import axios from "axios";

export default axios.create({
    baseURL: "localhost:8888",
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});
