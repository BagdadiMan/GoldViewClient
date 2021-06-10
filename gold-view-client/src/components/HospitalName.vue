<template>
    <div class="frame">
        <p>Hospital {{name}}</p>
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
        name: String,
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
    background-color: rgb(53, 177, 235);
    padding: 5vh;
    margin: 5vh;
    border-radius: 2vh;
    color: white;
    font-size: 3vh;
    width: 10vw;
    height: 20vh;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-content: center;
}
</style>