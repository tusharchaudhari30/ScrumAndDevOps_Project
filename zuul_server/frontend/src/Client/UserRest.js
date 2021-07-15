import ClientCrud from "./ClientCrud";

class UserRest {
    static getBoard(projectid) {
        return fetch(ClientCrud.Resthost + "/board/" + projectid).then((res) => res.json());
    }

    static getTimeline(projectid) {
        return fetch(ClientCrud.Resthost + "/timeline/" + projectid).then((res) => res.json());
    }

    static getProjects() {
        return fetch(ClientCrud.Resthost + "/getprojects").then((res) => res.json());
    }
}

export default UserRest;
