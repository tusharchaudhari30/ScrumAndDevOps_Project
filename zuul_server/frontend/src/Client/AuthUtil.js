import axios from "axios";

class AuthUtil {
    static getToken(username, password) {
        const config = {
            method: "post",
            url:
                "http://localhost:8080/login?username=" +
                username +
                "&password=" +
                password,
        };
        return axios(config).then((req) => req.data);
    }

    static checkToken() {
        const config = {
            method: "get",
            url: "http://localhost:8080/login/check",
        };
        return axios(config).then((req) => req.data);
    }
}

export default AuthUtil;
