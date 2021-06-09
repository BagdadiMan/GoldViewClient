<template>
  <v-card class="frame pa-md-2" style="background: #E0E0E0" elevation="12" width="256">
    <h2 style="color: #FFFFFF">{{title}}</h2>
    <v-navigation-drawer floating permanent>
      <v-list style="background: #E0E0E0" dense rounded>
        <router-link
          style="text-decoration:none"
          v-for="item in items"
          :key="item.title"
          :to="{path:`${title}/${item.title}`}"
          append
        >
          <v-list-item style="background: #FFAB91; margin-bottom: 12px" link>
            <v-list-item-content>
              <v-list-item-title style="color: #FFFFFF;">{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      require: true
    },
    title: {
      type: String,
      default: "room"
    }
  }
};
</script>

<style>
.v-navigation-drawer.v-navigation-drawer--floating.v-navigation-drawer--open.theme--light {
  background-color: transparent !important
}

.frame {
    background-color: rgb(236, 236, 236);
    padding: 5vh;
    margin: 2vh;
    border-radius: 2vh;
    color: black;
    font-size: 2vh;
    width: 100%;
    height: 43vh;
}
</style>