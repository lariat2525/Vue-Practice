<template>
      <div class="font-carib" id="titles">
        {{msg}}
        </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "Portfolio gallery"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.font-carib{

  position: absolute;
  font-family: 'Caribbean';
  font-size:3.4vw;
  color:rgba(243, 243, 243, 0.733);
  letter-spacing:3px;
}
</style>
