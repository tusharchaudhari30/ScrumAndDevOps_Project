class ClientCrud {
    static Resthost: string = "http://localhost:8080/api/project";

    static update(objects, name) {
        return fetch(this.Resthost + "/" + name + "/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objects),
        }).then((req) => req.json());
    }

    static delete(objects, name) {
        return fetch(this.Resthost + "/" + name + "/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objects),
        });
    }

    static drag(objects, name) {
        fetch(this.Resthost + "/" + name + "/drag", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objects),
        });
    }
}

export default ClientCrud;
