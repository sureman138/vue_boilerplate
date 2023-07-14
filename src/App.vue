<template>
  <div class="container">
    <AthleteInfoBar :athlete="athlete_info"/>
  </div>
</template>

<script>
import AthleteData from "@/assets/data.json";
import AthleteInfoBar from "./components/AthleteInfoBar.vue";
import './assets/tailwind.css';

export default {
  name: "app",
  components: {
    AthleteInfoBar
  },
  data: function() {
    return {
      athlete_info: AthleteData.data[0]
    };
  }
};
</script>
