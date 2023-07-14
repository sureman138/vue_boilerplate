<template>
  <div class="container">
    <!-- <AcademicFitReport :athlete="athlete_info"/> -->
    <AthleteInfoBar :athlete="athlete_info"/>
  </div>
</template>

<script>
// import AcademicFitReport from "@/components/AcademicFitReport.vue";
import AthleteData from "@/assets/data.json";
import AthleteInfoBar from "./components/AthleteInfoBar.vue";

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
