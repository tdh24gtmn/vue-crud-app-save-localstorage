import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myArray: [
      {
        name: "Anton",
        surname: "Ivanov",
        phone: +380500000001,
        email: "AntonIvanov@mail.com"
      },
      {
        name: "Dimus",
        surname: "Petrov",
        phone: +380500000002,
        email: "DimusPetrov@mail.com"
      },
      {
        name: "Anna",
        surname: "Sidorova",
        phone: +380500000003,
        email: "AnnaSidorova@mail.com"
      }
    ],
  },
  mutations: {

  },
  actions: {

  }
})
