<template>
  <div class="contain">
    <div class="row">
      <div class="row__inner">
        <div class="tile" v-for="item in teamList" :key="item.name">
          <Person
          :class="['tile-' + item.name_surname]"
            v-bind:name_surname="item.name_surname"
            v-bind:info="item.info"
            v-bind:image="item.image"
            v-bind:engineer_info="item.engineer_info"
            v-bind:metrics="item.metrics"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <ul>
    <li v-for="item in teamList" :key="item.date">
      <h1>{{item}}</h1>
      <div class="Person-card">
        <img
          class="Person-img"
          src="https://tse4.mm.bing.net/th?id=OIP.WSIF0y0YfMWNk6H88Sw7igHaE8&pid=Api&P=0&w=238&h=159"
          alt="Bill Gates"
        />
        <div class="Person-info">
          <div class="details-title">
            <span>Sarp Yucel</span><br />
            <small>XOR Culture Member</small>
          </div>
          <div class="details-body">Python Developer - 14 Level</div>
        </div>
      </div>

    </li>

  </ul> -->
</template>

<script>
import { mapState } from "vuex";
import Person from "./Person";
import { bus } from "../main.js";

export default {
  name: "MainPage",
  created() {
    console.log("mainpage started");
    bus.$on("switchComp", (comp) => {
      this.currentComp = comp;
    });
  },
  data: () => ({}),
  components: {
    Person,
  },
  computed: {
    // ...mapGetters(['teamList'])
    // ...mapState("data", {
    //   teamList: state => state.teamList
    // })
    ...mapState("data", {
      msg: (state) => state.msg,
      teamList: (state) => state.teamList,
    }),
  }
};
</script>

<style scoped>
body,
html {
  padding: 0 10px;
  margin: 0;
  background: #0e0f11;
  color: #ecf0f1;
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
* {
  box-sizing: border-box;
}
h1,
p {
  text-align: center;
}
p {
  width: 100%;
  max-width: 500px;
  margin: auto;
}
a:link,
a:hover,
a:active,
a:visited {
  transition: color 150ms;
  color: #95a5a6;
  text-decoration: none;
}
a:hover {
  color: #7f8c8d;
  text-decoration: underline;
}
.contain {
  width: 100%;
}
.row {
  overflow: auto;
  width: 100%;
}
.row__inner {
  transition: 450ms transform;
  font-size: 0;
  white-space: nowrap;
  margin: 5px 0;
  padding-bottom: 10px;
}

.tile {
  position: relative;
  display: inline-table;
  width: 250px;
  height: 140.625px;
  margin-right: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;
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
  /* transform: scale(1.01); */
  opacity: 1;
  color: #001b07;
}
</style>