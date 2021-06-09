<template>

<v-card
    elevation="12"
    width="256"
>
    <h1>{{title}}</h1>
    <v-navigation-drawer
    floating
    permanent
    >
    <v-list
        dense
        rounded
    >
        <router-link
        v-for="item in items"
        :key="item.title"
        :to="{path:`${title}/${item.title}`}" 
        append>
            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
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

}
</script>

<style>

</style>