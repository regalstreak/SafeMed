<template>
  <div>
    <!-- <a href="https://imgbb.com/">
      <img
        src="https://i.ibb.co/NmqQvKq/photo-2019-01-06-09-06-50.jpg"
        alt="photo-2019-01-06-09-06-50"
        border="0"
      >
    </a>-->
    <qrcode-vue :value="account" :size="100" level="H"></qrcode-vue>
    {{ account }}
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed>
      <v-btn color="teal" @click="homeClicked" flat value="home">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="teal" @click="qrClicked" flat value="QR">
        <span>QR</span>
        <v-icon>texture</v-icon>
      </v-btn>

      <v-btn color="teal" @click="historyClicked" flat value="history">
        <span>History</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal" @click="accountClicked" flat value="account">
        <span>Account</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import store from "../../../store.js";
import web3 from "../../../util/getWeb3.js";
import QrcodeVue from "qrcode.vue";
export default {
  data() {
    return {
      account: ""
    };
  },
  components: {
    QrcodeVue
  },
  methods: {
    homeClicked() {
      this.$store.commit("changeBottomNavState", "home");
      this.$router.push("/patient");
    },
    qrClicked() {
      this.$store.commit("changeBottomNavState", "QR");
      this.$router.push("/patient/qr");
    },
    historyClicked() {
      this.$store.commit("changeBottomNavState", "history");
      this.$router.push("/patient/history");
    },
    accountClicked() {
      this.$store.commit("changeBottomNavState", "account");
      this.$router.push("/patient/account");
    }
  },
  computed: {
    bottomNav: {
      get() {
        return store.getters.bottomNavState;
      },
      set() {}
    }
  },

  async mounted() {
    const accounts = await web3.eth.getAccounts();
    this.account = accounts[0];
    console.log("ACCOUNT: " + accounts[0]);
  }
};
</script>

<style>
</style>
