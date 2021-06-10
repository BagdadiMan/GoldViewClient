<template>
  <div>
    <patient-info :items="items"></patient-info>
  </div>
</template>

<script>
import PatientInfo from "../components/PatientInfo";
export default {
  data: () => {
    return {
      items: [
        {
          name: "noa ravski",
          temp: "37.2",
          rate: "70",
          prasure: "82",
          situration: "97%"
        },
        {
          name: "adam gold",
          temp: "37.4",
          rate: "90",
          prasure: "128",
          situration: "99%"
        },
        {
          name: "lior mohalem",
          temp: "37.2",
          rate: "70",
          prasure: "82",
          situration: "97%"
        },
        {
          name: "idan efraim",
          temp: "37.4",
          rate: "90",
          prasure: "128",
          situration: "99%"
        },
        {
          name: "nimrod bagdadi",
          temp: "37.4",
          rate: "90",
          prasure: "128",
          situration: "99%"
        }
      ]
    };
  },
  components: {
    PatientInfo
  }
};
</script>

<style>
</style>