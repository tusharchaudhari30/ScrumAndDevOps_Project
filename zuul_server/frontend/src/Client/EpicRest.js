import ClientCrud from "./ClientCrud";

class EpicRest {
    static getWorklistwithnoepic() {
        return fetch(ClientCrud.Resthost + '/work/noepic')
            .then(res => res.json())
    }

}

export default EpicRest;