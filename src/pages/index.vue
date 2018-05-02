<template>
  <div>
    <Header></Header>
    <router-view>
      <Qution></Qution>
    </router-view>
  </div>
</template>
<script>
import Header from '@/components/common/header';
import Qution from '@/pages/qution/qution';

export default {
  components: {
    Header,
    Qution
  }
}
</script>
<style scoped>

</style>
