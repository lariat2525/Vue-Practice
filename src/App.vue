<template>
  <div id="app">
    <myheader></myheader>
    <div class="contents">
      <img class="contents-bg" src="./assets/bg-1.jpg">
      <div class="titles-contents">
         <router-view/>
      </div>
      <card></card>
    </div>
  </div>
</template>

<!-- <button class="btn btn-primary">test</button> -->
<!-- <router-view/> -->

<script>
import myheader from './components/myheader'
import card  from './components/card'

export default {
  name: 'App',
  components: {
    myheader,
    card
  },
}
</script>

<style>
#app {
  font-family: 'IFC RAILROAD 2','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  display: flex;
  flex-direction: column;
}

.contents{

  position: relative;
  top:20%;
  bottom:0;
  color:yellow;
  display: flex;
  flex-direction: column;
}
/* .contents p{

  position: absolute;
  top:0;
  bottom:0;
} */

.contents-bg{
  width:100%;
  max-width: 100%;
  height: auto;
}

.titles-contents{

  position:absolute;
  left:33%;
  top:1%;
  font-size:3.5rem;
  color:rgba(243, 243, 243, 0.733);
  letter-spacing:3px;
  text-align:none;
}
</style>