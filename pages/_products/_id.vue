<script>
import {} from '@chakra-ui/vue'
import { mapGetters } from 'vuex'

// import BreadCumb from '../../my-components/breadcumb/Breadcumb.vue'
import ProductDescription from '~/my-components/product-description/ProductDescription.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
import ChakraTab from '~/my-components/productPageTab/TabsProducts/ChakraTab.vue'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'ProductPage',
  components: {
    // BreadCumb,
    ProductDescription,
    ProductSlider,
    ChakraTab,
  },

  layout: 'ProductLayout',

  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`/products/${params.id}`)
    return {
      products:data.products[0]
    }
  },
  computed: {
    ...mapGetters(['singleProduct'])
  },

  data() {
    return {
      route: null,
    }
  },

  mounted() {
    this.route =  this.$route.params.id
    AOS.init({})
  },
  methods: {
    // storeData() {
    //   this.$store.dispatch('addBreadcumbs', this.route)
    // },
  },
}
</script>

<template>
  <div>
    {{ $store.state.product }}

    {{ products }}
    <!-- <BreadCumb /> -->
    <LoaderComponent />
    <div class="product__page" data-aos="fade-up" data-aos-duration="1000">
      <ProductSlider />
      <product-description class="product__disc" :items="products"/>
    </div>

    <ChakraTab :selected-product="products" class="product__tab" />
  </div>
</template>

<style lang="scss" scoped>
.product__page {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 30px;
  margin-top: 40px;
  align-items: flex-start;
}
@media screen and (max-width: 1024px) {
  .product__page {
    display: grid;
    grid-template-columns: repeat(1, 100%);
  }
  .product__disc {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .product__tab {
    margin-top: 235px;
  }
}
@media screen and (max-width: 425px) {
  .product__tab {
    margin-top: 168px;
  }
}
@media screen and (max-width: 375px) {
  .product__tab {
    margin-top: 123px;
  }
}
</style>
