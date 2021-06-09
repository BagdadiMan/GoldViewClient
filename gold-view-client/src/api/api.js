import axios from 'axios';
export default {
    hospitals() {
        return {
            getHospitals: async () => {
                return await axios.get('http://gold-view-server-goldview.apps.openforce.openforce.biz/hospitals');
            },
            getHospitalByID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/hospital/${id}`);
            },
        }
    },
    patients() {
        return {
            getPatientsByRoomID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/patients/${id}`);
            },
        }
    },
    departments() {
        return {
            getDepartmentsByHospitalID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/departments/hospital/${id}`);
            },
            getPatientByDepartmentID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            }, 
            getAvailableBedsByDepartmentID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            }, 
            getVentilatorsByDepartmentID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            },
            getAvailableventilatorsByDepartmentID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            },

        }
    },
    rooms() {
        return {
            getRoomsByDepartmentID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            },
            getPatientByRoomID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            }, 
            getAvailableBedsByRoomID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            }, 
            getVentilatorsByRoomID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            },
            getAvailableventilatorsByRoomID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            },
        }
    }
}