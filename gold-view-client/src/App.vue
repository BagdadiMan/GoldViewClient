<template>

  <v-app id="app">
    <v-container>
    <h1 class="first-title">GoldView</h1>
    <p class="second-title">Hospitals view</p>
    <div class="pl-8 scala-content">
      <p class="text">Sick</p>
      <div>
          <div class="scala">
          </div>
      </div>
      <p class="text">Very Sick</p>
    </div>
    <router-view/>
    </v-container>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.first-title {
  font-size: 10vh;
}

.second-title {
  font-size: 5vh;
}

.scala {
    background-color: rgb(53, 177, 235);
    width: 43vw;
    padding: 1vh;
    margin: 1vh;
    border-radius: 4vh;
}


.scala-content {
    display: flex;
    justify-items: center;
    justify-content: center;

}

</style>
