<template>
  <v-form class="d-flex justify-center align-center">
    <v-container class="d-flex justify-center align-center">
      <v-row>
        <v-col cols="12" sm="10" md="10">
          <v-text-field
            label="Import JSON"
            placeholder="Put your JSON file like [{},{},{}]"
            v-model="jsonImport"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="2" md="2" class="text-center">
          <div class="my-1">
            <v-btn depressed x-large color="cyan" v-on:click="btnImport">Import</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: function() {
    return {
      jsonImport: null
    };
  },
  methods: {
    btnImport() {
      let jsonParse = JSON.parse(this.jsonImport);
      let myUser = jsonParse;

      if (myUser[0] === undefined) {
        this.name = myUser.name;
        this.surname = myUser.surname;
        this.phone = myUser.phone;
        this.email = myUser.email;
        this.$store.state.myArray.push({
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          email: this.email
        });
        localStorage.setItem(
          "array",
          JSON.stringify(this.$store.state.myArray)
        );
        this.name = "";
        this.surname = "";
        this.phone = "";
        this.email = "";

        this.jsonImport = "";
      } else {
        for (let i = 0; i < myUser.length; i++) {
          this.name = myUser[i].name;
          this.surname = myUser[i].surname;
          this.phone = myUser[i].phone;
          this.email = myUser[i].email;

          this.$store.state.myArray.push({
            name: this.name,
            surname: this.surname,
            phone: this.phone,
            email: this.email
          });
          localStorage.setItem(
            "array",
            JSON.stringify(this.$store.state.myArray)
          );

          this.name = "";
          this.surname = "";
          this.phone = "";
          this.email = "";

          this.jsonImport = "";
        }
      }
    }
  }
};
</script>