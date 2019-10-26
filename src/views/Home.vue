<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon x-large>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-tab to="/">Home</v-tab>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon x-large>mdi-widgets</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-tab to="/main">Main</v-tab>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>App</v-toolbar-title>
    </v-app-bar>

    <v-container class="d-flex align-center justify-center">
      <VTable />
    </v-container>
  </v-app>
</template>

<script>
import VTable from "../components/VTable.vue";

export default {
  components: {
    VTable
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
