<script>
import { CGrid, CBox } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'
import CompareTab from '~/my-components/compare-tabs/CompareTab.vue'
import CompareProductMobile from '~/my-components/comparing-component/CompareProductMobile.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
import LoaderComponent from '~/library/LoaderComponent.vue'

export default {
  name: 'ComparePage',
  
  components: {
    CompareProduct,
    CGrid,
    CBox,
    CompareTab,
    CompareProductMobile,
    ProductSlider,
    LoaderComponent,
  },
  
  data() {
    return {
      loading: false,
      products: null,
      error: null,
    }
  },
  
  async mounted() {
    try{
      this.loading = true
      const query = await this.$store.state.isBadge
      
      const { data } = await this.$axios.get(`/compare?firstId=${query[0]}&secondId=${query[1]}`);
      if(data.success){
        this.products = await data.compares
        this.loading = false
      }
    }catch(err){
      this.showToast('Serverda muammo bor', "Birozdan so'ng urinib ko'ring")
    }
  },
  
  methods: {
    showToast(title, text) {
      this.$toast({
        title: title ?? 'An error occurred.',
        description: text ?? 'Unable to load sharingan. Please shadow clones.',
        status: 'error',
        duration: 10000,
        position: 'top',
      })
    },
  },
}
</script>

<template>
  <c-box>
    <loader-component v-if="loading" />
    
    <div>
      <c-grid template-columns="repeat(2, 50%)" gap="6" mt="64px">
        <div v-for="(item, id) in products" :key="id" class="compare__wrapper">
          <product-slider  class="product__slider" />
          <compare-product class="compare__product" :item="item" />
          <compare-product-mobile />
          <compare-tab />
        </div>
      </c-grid>
    </div>
  </c-box>
</template>

<style lang="scss" scoped>
.compare__wrapper {
  padding-right: 20px;
}
.compare__product {
  margin-top: 40px;
}
</style>
