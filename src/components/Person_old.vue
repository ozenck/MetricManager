<template>
    
<!-- <div class="card">
    <div class="card-header">{{name}}</div>
    <div class="card-body">
        <p>{{name}}</p>
    </div>
    <div class="card-footer">{{data}}</div>
  </div> -->

   <div class="Person-card">
        <img
          class="Person-img"
          :src=image
          :alt=name
        />
        <div class="Person-info">
          <div class="details-title">
            <span>{{name}}</span><br />
            <small>{{info}}</small>
          </div>
          <div class="details-body">{{engineer_info}}</div>
          <button @click="clickme">Show Metrics cildirgac mi</button> 
        </div>
      </div>

</template>
 
<script>
export default {
  name: "Person",
  data: () => ({
  }),
  created() {
    console.log("Preview started");
  },
  props:{
    name: String,
    info: String,
    engineer_info: String,
    image: String,
    data: Object
  },
  methods:{
    clickme(){
    alert("yeni ekran cikacak tam bu satir yerine")
  }
  }
};


</script>

<style scoped>
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrQ.ttf)
    format("truetype");
}
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVs9pbCIPrQ.ttf)
    format("truetype");
}
.Person-card {
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  height: 300px;
  width: 320px;
  overflow: hidden;
  border: 1px solid #2780e3;
}
.Person-card .Person-img {
  width: 100%;
  height: auto;
}
.Person-card .Person-info {
  position: absolute;
  top: 236px;
  height: 300px;
  width: 100%;
  color: #fff;
  background-color: #2780e3;
  opacity: 0.9;
  -ms-transition: -ms-transform 0.75s;
  -webkit-transition: -webkit-transform 0.75s;
  transition: transform 0.75s;
}
.Person-card .Person-info:hover {
  -ms-transform: translateY(-236px);
  -webkit-transform: translateY(-236px);
  transform: translateY(-236px);
}
.Person-card .Person-info .details-title {
  height: 44px;
  font-size: 20px;
  padding: 10px;
}
.Person-card .Person-info .details-title small {
  font-size: 70%;
  color: #f7f7f7;
}
.Person-card .Person-info .details-body {
  padding: 10px;
  text-align: center;
}
</style>
