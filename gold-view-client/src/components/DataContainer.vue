<template>
    <div class="frame">
        <p class="data-text">Patiants: {{patiants}}</p>
        <p class="data-text">Available beds: {{avilableBeds}}</p>
        <p class="data-text">Ventilators: {{ventilators}}</p>
        <p class="data-text">Available ventilators: {{avilableVentilators}}</p>
    </div>
</template>
    
<script>
export default {
    name: "hospitalname",
    components: {
    },
    data() {
        return {
            
        }
    },

    props: {
        patiants: Number,
        avilableBeds: Number,
        ventilators: Number,
        avilableVentilators: Number,
        name: String
    },

    computed: {
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
    width: 70%;
    height: 100%;
}

.data-text {
    display: flex;
    align-content: left;
}
</style>