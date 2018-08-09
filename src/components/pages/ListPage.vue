<template>
  <BasePage v-bind:pagetitle="pagetitle">
    <div class="card-columns">
        <Card v-for="card in cards" v-bind:data="card" v-bind:key="card.id" ></Card>
    </div>
  </BasePage>
</template>

<script>

import BasePage from '../pages/BasePage'
import Card from '../shared/Card'
export default {
  name: 'ListPage',
  data () {
    return {
      pagetitle: 'ListPage ',
      cards:[
      ]
    }
  },
  methods: {

  },
  created: function () {
    [1,2,3,4,5,6,7,8,9,10].forEach(element => {
      var card ={
            id: element,
            imageSrc:'https://www.google.es/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            imageAlt:'google logo',
            title:'Enlace',
            text:'enlace al puto google',
            detailLink:'http://google.es',
            detailLinkText:'ir'
        };
      this.cards.push(card)
    });
  },
  watch: {

  },
  components: {
    BasePage,
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
    @include media-breakpoint-only(sm) {
    column-count: 3;
  }
}
  h3 {
    margin: 40px 0 0;
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