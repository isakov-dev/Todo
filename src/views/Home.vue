<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <GroupsList/>
  </div>
</template>

<script>
// @ is an alias to /src
import GroupsList from '@/components/GroupList.vue'

export default {
  name: 'Home',
  components: {
    GroupsList
  }
}
</script>
