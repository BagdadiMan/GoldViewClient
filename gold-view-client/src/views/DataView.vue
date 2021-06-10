<template>
    <div class="hospital-data">
        <div class="data">
            <!-- <div class="controls">
                BACK
            </div> -->
            <DataContainer 
            :name="name" 
            :ventilators="ventilators" 
            :avilableVentilators="avilableVentilators" 
            :patiants="patiants" 
            :avilableBeds="avilableBeds"></DataContainer>
        </div>
        <SideView :title="getType" :items="items"></SideView>
    </div>
</template>

<script>
import DataContainer from "../components/DataContainer.vue"
import SideView from '../components/SideView'
import api from "../api/api";

export default {
    name: "hospital",
    components: {
        DataContainer,
        SideView
    },
    data() {
        return {
            ventilators: 55, 
            avilableVentilators: 34,
            patiants: 23,
            avilableBeds: 567,
            items: []
        }
    },
    props: {
        id: Number,
        name: String,
        type: String
    },

    computed: {
        getType() {
            if(this.$route.name == "Hospital"){
                return "department";
            } 
             return "room";
        }
    },
     async created() {
        if(this.$route.name == "Hospital"){
            const response = await api.departments().getDepartmentsByHospitalID(this.$route.params.id);
            this.items = response.data;
        } else if(this.$route.name == "Department"){
            const response = await api.rooms().getRoomsByDepartmentID(this.$route.params.dept);
            this.items = response.data;
        }
    },
    async updated() {
        if(this.$route.name == "Hospital"){
            const response = await api.departments().getDepartmentsByHospitalID(this.$route.params.id);
            this.items = response.data;
        } else if(this.$route.name == "Department"){
            const response = await api.rooms().getRoomsByDepartmentID(this.$route.params.dept);
            this.items = response.data;
        }
    },

    creatded() {
        // setTimeout(() => { this.isLoading = false }, 1000)
    }
}
</script>

<style scoped>
.hospital-data {
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.data {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
}
.controls {
    width: 100%;
    text-align: left;
}
</style>