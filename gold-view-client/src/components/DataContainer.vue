<template>
    <div class="frame">
        <p class="data-text">Patients: {{patients}}</p>
        <p class="data-text">Available beds: {{avilableBeds}}</p>
        <p class="data-text">Ventilators: {{ventilators}}</p>
        <p class="data-text">Available ventilators: {{avilableVentilators}}</p>
    </div>
</template>
    
<script>
import api from "../api/api";

export default {
    name: "hospitalname",
    components: {
    },
    data() {
        return {
            
        }
    },

    props: {
        patients: Number,
        avilableBeds: Number,
        ventilators: Number,
        avilableVentilators: Number,
    },

    async mounted() {
        if(this.$route.name == "Hospital"){
            const response = await api.departments().getPatientByHospitalID(this.$route.params.id);
            this.patients= response.data;

            const response2 = await api.departments().getAvailableBedsByHospitalID(this.$route.params.id);
            this.avilableBeds= response2.data;

            const response3 = await api.departments().getVentilatorsByHospitalID(this.$route.params.id);
            this.ventilators= response3.data;

            const response4 = await api.departments().getAvailableVentilatorsByHospitalID(this.$route.params.id);
            this.avilableVentilators= response4.data;
        } else if(this.$route.name == "Department"){
         const response = await api.departments().getPatientByDepartmentID(this.$route.params.id);
            this.patients= response.data;

            const response2 = await api.departments().getAvailableBedsByDepartmentID(this.$route.params.id);
            this.avilableBeds= response2.data;

            const response3 = await api.departments().getVentilatorsByDepartmentID(this.$route.params.id);
            this.ventilators= response3.data;

            const response4 = await api.departments().getAvailableVentilatorsByDepartmentID(this.$route.params.id);
            this.avilableVentilators= response4.data;
        }
    },
    // async updated() {
    //     if(this.$route.name == "Hospital"){
    //         const response = await api.departments().getPatientByDepartmentID(this.$route.params.id);
    //         this.patients= response.data;

    //         const response2 = await api.departments().getAvailableBedsByDepartmentID(this.$route.params.id);
    //         this.avilableBeds= response2.data;

    //         const response3 = await api.departments().getVentilatorsByDepartmentID(this.$route.params.id);
    //         this.ventilators= response3.data;

    //         const response4 = await api.departments().getAvailableVentilatorsByDepartmentID(this.$route.params.id);
    //         this.avilableVentilators= response4.data;
    //     } else if(this.$route.name == "Department"){
    //         const response = await api.rooms().getPatientByRoomtID(this.$route.params.id);
    //         this.patients= response.data;

    //         const response2 = await api.rooms().getAvailableBedsByRoomID(this.$route.params.id);
    //         this.avilableBeds= response2.data;

    //         const response3 = await api.rooms().getVentilatorsByRoomID(this.$route.params.id);
    //         this.ventilators= response3.data;
            
    //         const response4 = await api.rooms().getAvailableVentilatorsByRoomID(this.$route.params.id);
    //         this.avilableVentilators= response4.data;
    //     }
    // },

    created() {
        // setTimeout(() => { this.isLoading = false }, 1000)
    }
}
</script>

<style scoped>
.frame {
    background-color: rgb(236, 236, 236);
    padding: 5vh;
    margin: 5vh;
    border-radius: 2vh;
    color: black;
    font-size: 3vh;
    width: 90%;
    height: 100%;
}

.data-text {
    display: flex;
    align-content: left;
}
</style>