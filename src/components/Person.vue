<template>
  <div class="tile__media btn btn-1" @click="showMetrics(metrics, name_surname)">


    <h1>{{ name_surname }}</h1>
    <br />
    <small>{{ info }}</small>
    <div>{{ engineer_info }}</div>
    <!-- <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg" alt=""  /> -->
  
    <heat-map  v-if="showMe % 2 == 1" v-bind:name="name_surname" v-bind:metrics="metrics" />
  </div>

</template>
 
<script>
import HeatMap from "./HeatMap";

export default {
  name: "Person",
  data: () => ({
    isModalVisible: false,
    showMe: 0,
  }),
  components: {
    HeatMap
  },
  created() {
    console.log("Preview started");
  },
  props: {
    name_surname: String,
    info: String,
    engineer_info: String,
    image: String,
    metrics: Array,
  },
  methods: {
    showMetrics(metrics, name_surname) {
      this.showMe++;
      console.log("showmetrics clicked", metrics);
      console.log(name_surname);
    }
  }
};
</script>


<style scoped>
.tile__img {
  width: 250px;
  height: 140.625px;
  -o-object-fit: cover;
  object-fit: cover;
}
.tile__details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  font-size: 10px;
  opacity: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: 450ms opacity;
}
.tile__details:after,
.tile__details:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: #000;
}
.tile__details:after {
  margin-top: -25px;
  margin-left: -25px;
  width: 50px;
  height: 50px;
  border: 3px solid #ecf0f1;
  line-height: 50px;
  text-align: center;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.tile__details:before {
  content: "▶";
  left: 0;
  width: 100%;
  font-size: 30px;
  margin-left: 7px;
  margin-top: -18px;
  text-align: center;
  z-index: 2;
}
.tile:hover .tile__details {
  opacity: 1;
}
.tile__title {
  position: absolute;
  bottom: 0;
  padding: 10px;
}
.row__inner:hover .tile:hover {
  transform: scale(1.1);
  opacity: 1;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  background: none;
  border: 2px solid;
  border-bottom-width: 4px;
  font: inherit;
  letter-spacing: inherit;
  margin: 1em;
  padding: 1em 2em;
  text-transform: inherit;
  transition: color 1s;
  border-radius: 30px;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: none;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

/* .btn {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
} */

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.btn-1 {
  color: #4e4e4e;
}
.btn-1:hover {
  -webkit-animation: halftone 1s forwards;
          animation: halftone 1s forwards;
  background: radial-gradient(circle, #fcfcfc 0.2em, transparent 0.25em) 0 0/1.25em 1.25em, radial-gradient(circle, #fcfcfc 0.2em, transparent 0.25em) 6.25em 6.25em/1.25em 1.25em;
  color: #000000;
}

@-webkit-keyframes halftone {
  100% {
    background-size: 2.375em 2.375em, 0.1em 0.1em;
  }
}

</style>
