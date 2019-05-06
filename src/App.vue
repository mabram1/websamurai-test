<template>
  
  <div n-if="json" class="container-fluid">
    <div class="row">
      <div class="col-6">
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="0"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
        >

          <!-- Text slides with image -->
          <b-carousel-slide v-for="(data, key) in json" :key="'slide-' + key">
            <img
              slot="img"
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              :src="data.image_url"
              alt="image slot"
            >
            
          </b-carousel-slide>
       </b-carousel>
      </div>
      <div class="col-6">
        <b-card no-body class="mb-1" v-for="(value, key) in json" :key="'card-' + key" v-on:click="changeSlide(key)">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle="'accordion-' + key" variant="info">{{value.title}}</b-button>
          </b-card-header>
          <b-collapse v-bind:id="'accordion-' + key" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              {{value.content}}
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      slide: 0,
      json: null,
      slideClick: false
    }
  },
  created: function () {
    fetch("/data2.json")
        .then(r => r.json())
        .then(json => {
          this.json=json;
        });
  },
  methods: {
    onSlideStart (slide) {
      if (!this.slideClick)
        this.$root.$emit('bv::toggle::collapse', 'accordion-' + slide)
    },
    onSlideEnd (slide) {
      this.slideClick = false;
      
    },
    changeSlide: function (slideNb) {
      this.slideClick = true;
      this.slide = slideNb;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: black;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
