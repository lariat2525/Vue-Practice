<template>
        <div class="card-all">
          <div class="card-ps">
            <card></card>
          </div>
          <div class="card-ps">
            <card></card>
          </div>
          <div class="card-ps">
            <card></card>
          </div>
          <div class="card-ps">
            <card></card>
          </div>
          <div class="card-ps">
            <card></card>
          </div>
          <div class="card-ps">
            <card></card>
          </div>
        </div>
</template>

<script>

import card  from '../card'

export default {
  name: 'home',
  components: {
    card
  },
  data () {
    return {
      msg: 'Portforio Gallerys'
    }
},
}
</script>

<style>

.card-all{

  width:100%;
  height:100%;
  display:flex;
  flex-flow: row wrap;
}
.card-ps{

  margin:0 0 0 25px;
  padding:0;
}

</style>
