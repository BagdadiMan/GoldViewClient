<template>
    <div class="hospital-data">
        <hospitalData 
        :name="name" 
        :ventilators="ventilators" 
        :avilableVentilators="avilableVentilators" 
        :patiants="patiants" 
        :avilableBeds="avilableBeds"></hospitalData>
    </div>
</template>

<script>
import hospitalData from "../components/DataContainer.vue"

export default {
    name: "hospital",
    components: {
        hospitalData,
    },
    data() {
        return {
            ventilators: 0, 
            avilableVentilators: 0,
            patiants: 0,
            avilableBeds: 0,
        }
    },
    props: {
        id: Number,
        name: String,
        type: String
    },

    computed: {
    },

    created() {
        // setTimeout(() => { this.isLoading = false }, 1000)
    }
}
</script>

<style scoped>
.hospital-data {
    height: 40vh;
}
</style>