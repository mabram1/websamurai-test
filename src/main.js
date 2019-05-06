import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';
import BCollapse from 'bootstrap-vue/es/components/collapse/collapse'

Vue.use(BootstrapVue)
Vue.component('b-carousel', bCarousel);
Vue.component('b-carousel-slide', bCarouselSlide);
Vue.component('b-collapse', BCollapse);

new Vue({
  el: '#app',
  render: h => h(App)
})
