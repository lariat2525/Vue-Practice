<template>
<div class="card">
  <img class="card-img-top" src="../assets/test.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="card-day">
      <p class="card-day-reset">Day: 2021/6/23~7/30</p>
    </div>
    <div class="card-text-wrap">
    <p class="card-text">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </p>
    </div>
    <!-- <a href="#!" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</template>
<script>

</script>
    


<style>

.card{
    
    width:350px;
    height:90%;
    color:white;
    background:rgb(65, 65, 65);
    border-radius:6px;
    opacity:0.95;
    margin:0;
    box-shadow:9px 8px 15px rgba(0, 0, 0, 0.39);
}
.card img{

    width:92%;
    height:58%;
    margin-left:16px;
    margin-top:12px;
    border-radius:6px;
    box-shadow:9px 8px 15px rgba(0, 0, 0, 0.39);
}
.card-body{

    padding:0;
}
.card-title{
    margin:5px 0 0 14px;
    font-size:1.4vw;
    min-width:;
}
.card-day{
    margin:0 0 0 32px;
    color:rgba(255, 255, 255, 0.623);
}
.card-day-reset{
    font-size:0.5vw;
    margin:1px 0 0 0;
}
.card-text-wrap{
    width:95%;
    margin:0 0 15px 0;
    padding:0;
}
.card-text{
    color:rgba(255, 255, 255, 0.897);
    margin:0px 0 0 42px;
    font-size:1.3vw;
    white-space: normal;
    line-height:0.9;
}
</style>