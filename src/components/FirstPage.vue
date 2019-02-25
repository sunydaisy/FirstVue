<template>
  <div class="first-box">
    <div class="inner-box">nice to meet {{msg}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: this.$route.params.userName,
    };
  }
};
</script>
<style scoped>
.first-box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner-box {
  width: 300px;
  height: 100px;
  color:brown;
}
</style>



