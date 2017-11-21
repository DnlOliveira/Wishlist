import axios from 'axios';

var utils = {
    saveItem(data) {
        var revised = {
            value: data
        }
        axios.post('http://localhost:3000/api/newitem', revised);
    },

    saveNewPerson(data) {
        axios.post('http://localhost:3000/api/newUser', data);
    },

    checkCred(data) {
        return axios.get('http://localhost:3000/api/checkCred', {
            params: {
                user: data
            }
        })
    },

    getAllLists() {
        return axios.get('http://localhost:3000/api/getall')
    }
}

export default utils;