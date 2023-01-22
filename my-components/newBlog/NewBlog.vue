<script>
import { CThemeProvider, CBox, CSimpleGrid, CHeading } from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
import NewBlogcard from '@/my-components/newBlog/NewBlogcard.vue'

export default {
  components: {
    NewBlogcard,
    CThemeProvider,
    CBox,
    CSimpleGrid,
    CHeading,
  },
  computed:{
    ...mapGetters(["blogs"])
  },
  data() {
    return {
      route: this.$route,
      loading: false,
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
  <CThemeProvider>
    <div>
      <CHeading
      :mt="['26px', '40px', '60px', '88px']"
      :mb="['16px', '25px', '32px', '40px']"
      color="color.TextColor2"
      :font-size="['12px', '15px', '20px', '24px']"
      font-family="Yandex Sans Display"
      font-weight="700"
      :line-height="['16px', '18px', '20px', '24px']"
      >{{ $t('newBlogWord') }}</CHeading
      >
      <CSimpleGrid
      align-items="flex-start"
      :columns="['3', '3', '3', '3', '4', '4']"
      :spacing="['10px', '12px', '15px', '20px', '25px', '30px']"
      >
      <CBox
      v-for="(img, id) in blogs"
      :key="id"
      width="100%"
      class="products__div"
      justify-content="center"
      align-items="center"
      display="flex"
      >
      <NewBlogcard :blog="img" />
    </CBox>
  </CSimpleGrid>
</div>
</CThemeProvider>
</template>

<style lang="scss" scoped>
.products__div {
  @media screen and(max-width: 1020px) {
    &:nth-child(n + 4) {
      display: none;
    }
  }
}
</style>
