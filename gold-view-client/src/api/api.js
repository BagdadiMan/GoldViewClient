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
            
        }
    }
}