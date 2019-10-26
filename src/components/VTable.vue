<template>
  <v-data-table
    :headers="headers"
    :items="this.$store.state.myArray"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-tab to="/main">
              <v-btn color="primary" dark class="mb-2">New Item</v-btn>
            </v-tab>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.surname" label="surname"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.phone" label="phone"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="email"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <div class="my-2">
        <v-btn x-small color="success mr-1" dark>
          <v-tab to="/main" class="edit-btn">edit</v-tab>
        </v-btn>
        <v-btn x-small color="error" dark @click="deleteItem(item)">delete</v-btn>
      </div>
    </template>
    <template v-slot:no-data></template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: "Name", value: "name" },
      { text: "Surname", value: "surname" },
      { text: "Phone", value: "phone" },
      { text: "Email", value: "email" },
      { text: "Actions", value: "action", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      name: "",
      surname: "",
      phone: 0,
      email: ""
    },
    defaultItem: {
      name: "",
      surname: "",
      phone: 0,
      email: ""
    }
  }),

  mounted() {
    if (localStorage.getItem("array") == null) {
      localStorage.setItem("array", JSON.stringify(this.$store.state.myArray));
    } else {
      this.$store.state.myArray = JSON.parse(localStorage.getItem("array"));
    }
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    deleteItem(item) {
      const index = this.$store.state.myArray.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.$store.state.myArray.splice(index, 1);

      localStorage.setItem("array", JSON.stringify(this.$store.state.myArray));
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(
          this.$store.state.myArray[this.editedIndex],
          this.editedItem
        );
        localStorage.setItem(
          "array",
          JSON.stringify(this.$store.state.myArray)
        );
      } else {
        this.$store.state.myArray.push(this.editedItem);

        localStorage.setItem(
          "array",
          JSON.stringify(this.$store.state.myArray)
        );
      }
      this.close();
    }
  }
};
</script>
