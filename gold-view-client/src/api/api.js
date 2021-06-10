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
            getPatientByHospitalID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/patients/count/department/${id}`);
            }, 
            getAvailableBedsByHospitalID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            }, 
            getVentilatorsByHospitalID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            },
            getAvailableventilatorsByHospitalID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
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
            getAvailableVentilatorsByDepartmentID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            },

        }
    },
    rooms() {
        return {
            getRoomsByDepartmentID: async (id) => {
                return await axios.get(`http://gold-view-server-goldview.apps.openforce.openforce.biz/rooms/department/${id}`);
            },
        }
    }
}