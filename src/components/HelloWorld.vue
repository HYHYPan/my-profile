<template>
  <div>
    <div id="tabView">
  <div class="radio-group"  >
    input:
    <input type="text" v-model="tabView">
    <span v-for="(tab ,index) in tabs"  :key="index"
     :class="{cur:iscur==index}"
     @click="iscur=index,tabChange('Parking' + (index + 1))">{{tab.name}}
    </span>

    <keep-alive> 
    <!--  快取name等於tabView的元件 -->
      <component v-bind:is="tabView"></component>
    </keep-alive>
  </div>
</div>
  </div>
</template>

<script>
import Parking1 from '@/components/pages/homeComponents/Carousel'
import Parking2 from '@/components/pages/homeComponents/Carousel'
import Parking3 from '@/components/pages/homeComponents/Carousel'
export default {
  data() {
    return {
 	tabView: 'Parking1',
	tabs: [{name: "裝置列表"}, {name: "車位列表"} ,{name: "進出記錄"}],
	iscur: 0,
      };
  },
  components:{
    Parking1,
    Parking2,
    Parking3,
  },
  methods: {
    tabChange (tab) {
        this.tabView = tab;
    }
  }
};
</script>

