<template>
  <div id="app" class="d-flex flex-column">
    <myheader></myheader>
    <div class="contents d-flex flex-column">
      <div class=titles-ps>
      <titles></titles>
      </div>
      <div class="contents-uni">
      <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from './components/myheader'
import titles from './components/titles'


export default {
  name: 'App',
  components: {
    myheader,titles
  }
}

</script>

<style>
body{

  width:100%;
  max-width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-image:url("./assets/bg-1.jpg")
}
#app {
  font-family: 'Comic Sans MS', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:5rem;
  color: black;
}

/* .contents{

  width:100%;
  height:100vh;

} ??? */
.contents-bg{

  position: absolute;
  width:100%;
  max-width: 100%;
  height: auto;
}

.titles-ps{

  margin:2.2% 0 8% 29%;
}
.contents-un{

  position: absolute;
}
</style>