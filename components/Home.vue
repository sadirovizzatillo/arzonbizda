<script lang="js">
import { mapGetters } from 'vuex'

import DescriptionComponent from "@/my-components/description/DescriptionComponent.vue";
import NewBlog from "@/my-components/newBlog/NewBlog.vue";
import BannerComponent from "@/my-components/bannerImgBox/BannerComponent.vue";
import PopularProducts from "~/my-components/popular-products/popularProducts.vue";
import CategoriesComponent from "~/my-components/categories-component/categoriesComponent.vue";
import BrandsComponent from "~/my-components/brands-component/brandsComponent.vue";
import SliderComponent from "~/my-components/banner/SliderComponent.vue";


import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'



export default {
  
  name:"IndexComponent",
  
  components: {
    PopularProducts,
    DescriptionComponent,
    NewBlog,
    BannerComponent,
    CategoriesComponent,
    BrandsComponent,
    SliderComponent,
  },
  data(){
    return{
      columns:['3', '3', '3', '4', '4', '5'],
      // productsList:[
      // {
      //   id: "8dd4e7d2-4dc5-4571-8058-16ea8e52db84",
      //   name: "Смартфон Samsung Galaxy A52 4/128GB Black",
      //   price: 3864000,
      //   description: null,
      //   brand_name: "Samsung",
      //   model_name: "A525",
      //   link: "https://asaxiy.uz/product/telefony-i-gadzhety/telefony/smartfony/smartfon-samsung-galaxy-a52-4-128gb-black",
      //   createdAt: "2022-04-15T10:32:45.333Z",
      //   updatedAt: "2022-04-15T10:32:45.333Z",
      //   category_id: "3760cdf2-83a6-4c35-baa3-e8ccc3ee45b5",
      //   brand_id: null,
      //   shop_id: "4bcd6c4a-cbc5-4afb-9404-7db4adf5f0a0",
      //   characteristics: [
      //   {
      //     id: "c9d6119c-a56f-4f45-b8f3-bcc0245992c6",
      //     key: "\n\tТип\n\t",
      //     value: "смартфон",
      //     createdAt: "2022-04-15T10:32:45.383Z",
      //     updatedAt: "2022-04-15T10:32:45.383Z",
      //     product_id: "8dd4e7d2-4dc5-4571-8058-16ea8e52db84"
      //   },
      //   ],
      //   images: [
      //   {
      //     id: "20a06469-690f-4be1-925b-f84b825260b8",
      //     src: "https://assets.asaxiy.uz/product/items/desktop/0d51878d6c73f3b1c986000354f8c1662021052915041260157V8BE4F5Oaj.jpg",
      //     createdAt: "2022-04-15T10:32:45.373Z",
      //     updatedAt: "2022-04-15T10:32:45.373Z",
      //     product_id: "8dd4e7d2-4dc5-4571-8058-16ea8e52db84",
      //     productId: null
      //   },
      //   {
      //     id: "b1479907-7daf-4fde-ae4d-e6987d85aba6",
      //     src: "https://assets.asaxiy.uz/product/items/desktop/980fd5df5ffe4ae482319f3042c5dfab202105291504128210458VWLgJbP8.jpg",
      //     createdAt: "2022-04-15T10:32:45.379Z",
      //     updatedAt: "2022-04-15T10:32:45.379Z",
      //     product_id: "8dd4e7d2-4dc5-4571-8058-16ea8e52db84",
      //     productId: null
      //   }
      //   ],
      //   stars: 5,
      //   comments: [
      //   {
      //     id: "e1fce73b-5a83-4b37-8a2b-76db0321a116",
      //     full_name: "Asadbek Zoirov",
      //     text: "Zo'r ekan :)",
      //     stars: 5,
      //     createdAt: "2022-04-16T10:10:51.445Z",
      //     updatedAt: "2022-04-16T10:10:51.445Z",
      //     product_id: "8dd4e7d2-4dc5-4571-8058-16ea8e52db84",
      //     images: [
      //     {
      //       id: "25e0a015-840f-44c6-9d5e-54e500704d1b",
      //       src: "D:\\Projects\\mohir\\arzonbizda\\src\\public\\images\\f2c023257b14e562d937d7b82e5c17a9.jpeg",
      //       createdAt: "2022-04-16T10:10:51.507Z",
      //       updatedAt: "2022-04-16T10:10:51.507Z",
      //       comment_id: "e1fce73b-5a83-4b37-8a2b-76db0321a116"
      //     },
      //     {
      //       id: "55f4ede1-12cc-4434-b2a2-ed7a3aa54cf8",
      //       src: "D:\\Projects\\mohir\\arzonbizda\\src\\public\\images\\f04b019e6ed22f53d0a6bfb7dae5ea87.jpeg",
      //       createdAt: "2022-04-16T10:10:51.525Z",
      //       updatedAt: "2022-04-16T10:10:51.525Z",
      //       comment_id: "e1fce73b-5a83-4b37-8a2b-76db0321a116"
      //     }
      //     ]
      //   }
      //   ]
      // },
      // ]
    }
  },
  
  computed: {
    ...mapGetters(['productsList'])
  },
   
  mounted() {
    this.$store.dispatch("getProducts")
    this.$store.dispatch("getCategories")
    AOS.init()
  },
}
</script>

<template>
  <div>
    <SliderComponent data-aos="zoom-in" data-aos-duration="1000" />
    <div>
      <PopularProducts
      data-aos="fade-up"
      :products="productsList"
      title="Популярные товары"
      :columns="columns"
      />
    </div>
    <CategoriesComponent data-aos="fade-up" data-aos-duration="1000" />
    <BrandsComponent data-aos="zoom-in-up" data-aos-duration="1000" />
    <BannerComponent data-aos="zoom-in-down" data-aos-duration="1000" />
    <PopularProducts
    :columns="columns"
    :products="productsList"
    data-aos="fade-up"
    title="Популярные товары"
    data-aos-duration="1000"
    />
    <DescriptionComponent data-aos="fade-up" data-aos-duration="1000" />
    <NewBlog data-aos="fade-up" data-aos-duration="1000" />
  </div>
</template>
