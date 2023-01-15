<script>
import {
  CThemeProvider,
  CBox,
  CTabs,
  CTabList,
  CTabPanels,
  CTab,
  CTabPanel,
} from '@chakra-ui/vue'

import { mapGetters } from 'vuex'

import TabDescription from './TabDescription.vue'
import TabsProducts from './TabsProducts.vue'
import TabCharacteristics from './TabCharacteristics.vue'
import TabReviews from './TabReviews.vue'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'


export default {
  name: 'ChakraTab',
  data(){
    return{
      // compares: [
      // {
      //   id: "4f5018a6-92b9-469c-837e-6ae5cbf56cc8",
      //   name: "Смартфон iPhone 13 Pro max 128GB Sierra Blue",
      //   price: 15120000,
      //   description: null,
      //   brand_name: "Apple",
      //   model_name: "iPhone 13 Pro max",
      //   link: "https://asaxiy.uz/product/telefony-i-gadzhety/telefony/smartfony/smartfon-iphone-13-pro-max-128gb-sierra-blue",
      //   createdAt: "2022-04-15T10:33:17.427Z",
      //   updatedAt: "2022-04-15T10:33:17.427Z",
      //   category_id: "3760cdf2-83a6-4c35-baa3-e8ccc3ee45b5",
      //   brand_id: null,
      //   shop_id: "4bcd6c4a-cbc5-4afb-9404-7db4adf5f0a0",
      //   categoryId: "3760cdf2-83a6-4c35-baa3-e8ccc3ee45b5",
      //   categoryName: "Telefonlar",
      //   images: [
      //   {
      //     "id": "3ade4a75-b4a9-49fd-9f73-a58d94528d67",
      //     "src": "https://assets.asaxiy.uz/product/items/desktop/84d88100e2d28c678e5254463ae4edd82021092512465060512gCFEaw9dKy.jpg",
      //     "createdAt": "2022-04-15T10:40:57.651Z",
      //     "updatedAt": "2022-04-15T10:40:57.651Z",
      //     "product_id": "081d466e-d0ab-439e-82e3-33c7afce9223",
      //     "productId": null
      //   }
      //   ]
      // }]
    }
  },
  computed:{
    ...mapGetters(["relatedProducts"])
  },

  components: {
    CThemeProvider,
    CBox,
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CTabPanel,
    TabDescription,
    TabsProducts,
    TabCharacteristics,
    TabReviews,
  },
  
  props: {
    selectedProduct: {
      type: Object,
      default: null,
      required: true,
    },
  },
  
  mounted() {
    AOS.init({})
  },
}
</script>

<template>
  <CThemeProvider
  ><CBox>
    <CTabs>
      <CTabList
      :justify-content="[
      'space-between',
      'space-between',
      'space-between',
      'start',
      'start',
      'start',
      ]"
      border-bottom="none"
      mt="84px"
      >
      <CTab
      :_selected="{
        fontWeight: '700',
        color: 'color.WarningColor1',
        
        borderBottomColor: 'color.WarningColor1',
        borderBottomWidth: '3px',
        borderBottomRightRadius: '2px',
        borderBottomLeftRadius: '2px',
      }"
      :_focus="{ outline: 'none' }"
      color="color.TextColor1"
      :width="['100%', '100%', '100%', 'initial', 'initial', 'initial']"
      :px="['10px', '10px', '20px', '63px', '63px', '63px']"
      :border-right-color="[
      'none',
      'none',
      'none',
      'color.TabBorderRightColor',
      'color.TabBorderRightColor',
      'color.TabBorderRightColor',
      ]"
      :border-right-width="['0px', '0px', '0px', '1px', '1px', '1px']"
      text-align="center"
      :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
      font-family="Yandex Sans Display"
      font-weight="400"
      :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
      >{{ $t('tab1') }}</CTab
      >
      
      <CTab
      :_selected="{
        fontWeight: '700',
        color: 'color.WarningColor1',
        
        borderBottomColor: 'color.WarningColor1',
        borderBottomWidth: '3px',
        borderBottomRightRadius: '2px',
        borderBottomLeftRadius: '2px',
      }"
      :_focus="{ outline: 'none' }"
      color="color.TextColor1"
      :width="['100%', '100%', '100%', 'initial', 'initial', 'initial']"
      :px="['10px', '10px', '15px', '18px', '20px', '48px']"
      :border-right-color="[
      'none',
      'none',
      'none',
      'color.TabBorderRightColor',
      'color.TabBorderRightColor',
      'color.TabBorderRightColor',
      ]"
      :border-right-width="['0px', '0px', '0px', '1px', '1px', '1px']"
      text-align="center"
      :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
      font-family="Yandex Sans Display"
      font-weight="400"
      :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
      >{{ $t('tab2') }}</CTab
      >
      <CTab
      :_selected="{
        fontWeight: '700',
        color: 'color.WarningColor1',
        borderBottomColor: 'color.WarningColor1',
        borderBottomWidth: '3px',
        borderBottomRightRadius: '2px',
        borderBottomLeftRadius: '2px',
      }"
      :_focus="{ outline: 'none', bg: '#fff' }"
      color="color.TextColor1"
      :width="['100%', '100%', '100%', 'initial', 'initial', 'initial']"
      :px="['10px', '10px', '20px', '22px', '24px', '25px']"
      :border-right-color="[
      'none',
      'none',
      'none',
      'color.TabBorderRightColor',
      'color.TabBorderRightColor',
      'color.TabBorderRightColor',
      ]"
      :border-right-width="['0px', '0px', '0px', '1px', '1px', '1px']"
      text-align="center"
      :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
      font-family="Yandex Sans Display"
      font-weight="400"
      :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
      >{{ $t('tab3') }}</CTab
      >
      
      <CTab
      :_selected="{
        fontWeight: '700',
        color: 'color.WarningColor1',
        borderBottomColor: 'color.WarningColor1',
        borderBottomWidth: '3px',
        borderBottomRightRadius: '2px',
        borderBottomLeftRadius: '2px',
      }"
      :_focus="{ outline: 'none', bg: '#fff' }"
      color="color.TextColor1"
      :width="['100%', '100%', '100%', 'initial', 'initial', 'initial']"
      :px="['10px', '10px', '20px', '22px', '24px', '25px']"
      text-align="center"
      :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
      font-family="Yandex Sans Display"
      font-weight="400"
      :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
      >{{ $t('tab4') }}</CTab
      >
    </CTabList>
    
    <CTabPanels>
      <CTabPanel>
        <tabs-products
        :products="relatedProducts"
        data-aos="fade-up"
        />
      </CTabPanel>
      
      <CTabPanel>
        <tab-description data-aos="fade-up" />
      </CTabPanel>
      
      <CTabPanel>
        <TabReviews :reviews="selectedProduct.product"/>
      </CTabPanel> 
      
      <CTabPanel>
        <tab-characteristics
        data-aos="fade-up"
        :characterics="selectedProduct.characteristics"
        />
      </CTabPanel>
    </CTabPanels> </CTabs
    ></CBox>
  </CThemeProvider>
</template>

<style></style>
