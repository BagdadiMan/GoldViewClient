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
         console.log(this.$route.name )
         console.log(this.$route.params)
        if(this.$route.name == "Hospital"){
            const response = await api.departments().getDepartmentsByHospitalID(this.$route.params.id);
            this.items = response.data;
        } else if(this.$route.name == "Department"){
            const response = await api.rooms().getRoomsByDepartmentID(this.$route.params.dept);
            this.items = response.data;
        }

        console.log(this.items)

    },

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