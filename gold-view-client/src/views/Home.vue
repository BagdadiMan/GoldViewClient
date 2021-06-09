<template>
    <v-container fluid class="content align-center">
        <v-row justify="space-around">
            <v-col md="4" sm class="container" v-for="hospital in hospitals" :key="hospital">
                 <router-link class="hospital-text" to="/dataView">
                    <hospitalName  :name="hospital.name"></hospitalName>
                 </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import hospitalName from '../components/HospitalName.vue'

export default {
    name: "home",
    components: {
        hospitalName,
    },
    data() {
        return {
            hospitals: [{name: "A", id: 0}, {name: "A", id: 0}, {name: "A", id: 0}, {name: "A", id: 0}, {name: "A", id: 0}, {name: "A", id: 0}],
        }
    },
    props: {
    },

    computed: {
    },

    created() {
        // setTimeout(() => { this.isLoading = false }, 1000)
    }
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