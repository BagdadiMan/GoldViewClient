<template>
  <v-container fluid class="content align-center">

      <v-row>

      <v-col class="container" v-for="item in items" :key="item.name">
      <v-card  style="background: #E0E0E0;" class="mx-auto" max-width="150">
        <font-awesome-icon icon="external-link-alt" style="margin-left: 135px;" />
        <v-card-text class="text-center black--text">
          <h2 class="font-weight-black">{{ item.name }}</h2>
          <br />
          <h2 style="margin-bottom: 5px;">Temp</h2>
          <h3 style="margin-bottom: 5px;" class="font-weight-bold">{{ item.temp }}</h3>
          <h2 style="margin-bottom: 5px;">H. Rate</h2>
          <h3 style="margin-bottom: 5px;">{{ item.rate }}</h3>
          <h2 style="margin-bottom: 5px;">B. Pressure</h2>
          <h3 style="margin-bottom: 5px;">{{ item.prasure }}</h3>
          <h2 style="margin-bottom: 5px;">Saturation</h2>
          <h3 style="margin-bottom: 5px;">{{ item.situration }}</h3>
        </v-card-text>
      </v-card>
      </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faExternalLinkAlt);
export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    items: {
      type: Array,
      require: true
    }
  },
  data: function() {
    return {
      //   category: ["temp","H. Rate", "B. Prasure", "Situration"]
    };
  }
};
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