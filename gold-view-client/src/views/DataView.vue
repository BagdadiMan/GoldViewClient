<template>
<div class="all-row">
    <div @click="goBack" class="back">
        <p class="my-button">back</p>
    </div>
    <div class="hospital-data">
        <DataContainer 
        :name="name" 
        :ventilators="ventilators" 
        :avilableVentilators="avilableVentilators" 
        :patiants="patiants" 
        :avilableBeds="avilableBeds"></DataContainer>
        <SideView :title="getType" :items="items"></SideView>
    </div>
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
        },
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

    methods: {
        goBack() {
            this.$router.go(-1);
        }
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

.back {
    font-size: 4vh;
    float: left;
}

.all-row {
    display: flex;
    flex-flow: column;
}

.my-button {
    cursor: pointer;
    float: left;
    margin-left: 4%;

}
</style>