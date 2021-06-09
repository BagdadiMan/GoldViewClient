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
            items:[{sickness:1,title:12},{sickness:1,title:43},{sickness:1,title:24},{sickness:3,title:1}]
        }
    }
}
</script>

<style>

</style>