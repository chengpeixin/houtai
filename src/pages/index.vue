<template>
  <div>
    <Header></Header>
    <router-view :class="$style.right">
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
<style lang="stylus" module>
.right {
  float: left;
  width: 90%;
  height: 700px;
  overflow: scroll;
  overflow-x: hidden;
}
</style>
