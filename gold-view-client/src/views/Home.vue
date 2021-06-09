<template>
    <v-container fluid class="content align-center">
        <v-row justify="space-around">
            <v-col md="4" sm class="container" v-for="hospital in hospitals" :key="hospital.id">
                 <router-link class="hospital-text" :to="`/hospital/${hospital.id}`">
                    <hospitalName  :name="hospital.name"></hospitalName>
                 </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import hospitalName from '../components/HospitalName.vue'
import api from "../api/api";

export default {
    name: "home",
    components: {
        hospitalName,
    },
    data() {
        return {
            hospitals: [{name:"0", id: 0}],
        }
    },
    props: {
    },

    computed: {
    },
    async mounted() {
        const response = await api.hospitals().getHospitals();
        this.hospitals = response.data;
    },
}
</script>

<style scoped>
.content {
    width: 50%;
}

.container {
    display: flex;
    justify-content: center;
}

.text {
    font-size: 2vh;
}

.hospital-text {
    text-decoration: none;
}
</style>