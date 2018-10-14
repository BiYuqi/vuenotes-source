<template>
    <div class="vuereact">
        <section class="main-mod">
            <p class="design">D3.js</p>
            <ul class="main-wraper">
                <li class="main-mod-con" v-for="(item, index) in d3" :key="index">
                    <a  v-bind:href="item.link" target="_blank">{{item.name}}</a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import data from "../../../static/data/basedata.json";
export default {
  data() {
    return {
      d3: null,
      wechat1: null,
      wechat2: null
    };
  },
  methods: {
    getData() {
      this.d3 = data.visual.d3;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
