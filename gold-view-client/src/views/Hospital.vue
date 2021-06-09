<template>
  <div>
      <side-view :items=items :title="'department'">

      </side-view>

  </div>
</template>

<script>
import SideView from '../components/SideView'
export default {
    components: {
        SideView
    },
    data: () => {
        return {
            items:[]
        }
    }
}
</script>

<style>

</style>