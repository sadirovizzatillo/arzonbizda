<script>
import { CBox, CImage, CText } from '@chakra-ui/vue'
export default {
 
  components: {
    CBox,
    CImage,
    CText,
  },
  props: {
    blog: {
      type: Object || Array,
      default: null,
      required: true,
    },
  },
   methods:{
    singleBlogRoute(blogid){
      this.$router.push(
      this.localePath({
        name: 'blog-id',
        
        params: {
          id: blogid,
        },
      })
      )      
    }
  },  
}
</script>

<template>
  <CBox @click="singleBlogRoute(blog._id)">
    <CBox
    class="imgDiv"
    :height="['102px', '122px', '230px', '280px', '300px', '370px']"
    :border-radius="['8px', '10px', '12px', '14px', '15px', '16px']"
    overflow="hidden"
    position="relative"
    ><CImage
    position="absolute"
    width="100%"
    height="100%"
    object-fit="cover"
    :src="`http://localhost:4000/` + blog.blogImage"
    ></CImage
    ></CBox>
    <CBox>
      <CText
      class="series2"
      :mt="['5px', '12px', '15px', '17px', '20px', '24px']"
      color="color.TextColor3"
      text-align="start"
      :font-size="['8px', '13px', '18px', '25px', '20px', '24px']"
      font-family="Yandex Sans Display"
      font-weight="700"
      :line-height="['9px', '18px', '24px', '28px', '28px', '28px']"
      > {{ blog.text.slice(0,30) }}.</CText
      >
    </CBox>
  </CBox>
</template>
<style lang="scss" scoped></style>
