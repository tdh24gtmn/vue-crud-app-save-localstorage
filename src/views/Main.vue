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
      <v-toolbar-title>Table</v-toolbar-title>
    </v-app-bar>

    <v-container>
      <VImportJSON />
    </v-container>

    <v-container>
      <VTableActive />
    </v-container>
  </v-app>
</template>

<script>
import VTableActive from "../components/VTableActive.vue";
import VImportJSON from "../components/VImportJSON.vue";

export default {
  components: {
    VTableActive,
    VImportJSON
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>