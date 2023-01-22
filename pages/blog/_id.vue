<script>
import BlogDisc from '~/my-components/blog-disc/blog-disc.vue'
import NewBlog from '~/my-components/newBlog/NewBlog.vue'
export default {
  name: 'BlogComponent',
  components: { BlogDisc, NewBlog },
  async asyncData({ $axios, params, store }) {
    const { data } = await $axios.get(`/blog/${params.id}`)
    const blogForm = {
      image: data.blog[0].blogImage,
      title: data.blog[0].title,
      firstName: "Malik",
      lastName: "salom",
      time: data.blog[0].createdAt,
      body: data.blog[0].text,
    }
    store.commit("SET_SINGLE_BLOG", blogForm)
    return {
      blogsForm:blogForm
    }
  }
  // methods:{
  //   async fetchItems() {    
  //     try {
  //       const id = await this.$route.params.id
  //       const { data } = await this.$axios.get(`/blog/${id}`)
  //       console.log(data.blog)
  //       const blogForm = {
  //         image: data.blog[0].blogImage,
  //         title: data.blog[0].title,
  //         firstName: "Malik",
  //         lastName: "salom",
  //         time: data.blog[0].createdAt,
  //         body: data.blog[0].text,
  //       }
  //       await this.$store.commit("SET_SINGLE_BLOG", blogForm)
  //     } catch (err) {
  //       this.showToast('Serverda muammo bor', "Birozdan so'ng urinib ko'ring")
  //     }
  //   },
  // },
  
  // mounted(){
  //   this.fetchItems()
  // },
  
}
</script>
<template>
  <div>
    <blog-disc />
    <NewBlog />
  </div>
</template>
