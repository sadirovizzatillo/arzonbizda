<script>
import { CBox, CImage, CHeading, CStack, CFlex, CIcon } from '@chakra-ui/vue'

import SingleStar from '~/library/SingleStar.vue'

// import priceSpacer from '@/helpers/price-spacer'

export default {
  name: 'PopularProduct',

  components: {
    CBox,
    CImage,
    CHeading,
    CStack,
    CIcon,
    CFlex,
    SingleStar,
  },

  // mixins: [
  //   {
  //     methods: {
  //       priceSpacer,
  //     },
  //   },
  // ],

  props: {
    item: {
      type: Object || Array,
      default: null,
      required: true,
    },
  },

  methods: {
    openProductPage(item) {
      this.$store.dispatch("setProducts", item.id)
      this.$store.dispatch("setAdviceProducts", item.category._id)
      this.$router.push(
        this.localePath({
          name: 'products-id',

          params: {
            products: this.$route.params.category ?? 'products',
            id: item._id,
          },
        })
      )
    },
  },
}
</script>

<template>
  <CBox pb="10px">
    <CBox
      :py="['22px', '24px', '30px', '34px', '36px', '40px']"
      :px="['22px', '24px', '30px', '34px', '36px', '40px']"
      :rounded="['8px', '9px', '10px', '10px', '11px', '12px']"
      bg="color.ImageBgColor"
      cursor="pointer"
      @click="openProductPage(item)"
    >
      <CImage
        :w="['86px', '104px', '122px', '140px', '158px', '176px']"
        :h="['104px', '126px', '146px', '168', '190px', '212px']"
        :src="require('../../assets/img/apple.png')"
        object-fit="contain"
      />
    </CBox>
    <CBox>
      <CStack>
        <CBox
          :pt="['8px', '12px', '14px', '18px', '20px', '24px']"
          cursor="pointer"
          @click="openProductPage(item)"
        >
          <CHeading
            as="h2"
            :font-size="['12px', '14px', '16px', '18px', '20px', '24px']"
            mb="8px"
            >{{ $t('from') }} {{ item.price }}
            {{ $t('currency') }}</CHeading
          >
          <CBox
            as="span"
            font-family="Yandex Sans Display"
            :font-size="['12px', '13px', '14px', '16px', '18px', '20px']"
            :line-height="['15px', '18px', '20px', '24px', '26px', '30px']"
            color="color.TextColor2"
            >{{ item.title }}</CBox
          >
        </CBox>
      </CStack>
    </CBox>

    <CBox mt="8px">
      <CFlex align="center">
        <CBox d="flex" align-items="center" font-family="Yandex Sans Display">
          <single-star :rating="5" />
          <CBox
            as="span"
            :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
            color="color.TextColor5"
            :ml="['3px', '4px', '5px', '6px', '7px', '7px']"
          >
            4,8</CBox
          >
        </CBox>
        <CBox
          d="flex"
          align-items="center"
          font-family="Yandex Sans Display"
          :ml="['15px', '18px', '20px', '24px', '26px', '30px']"
        >
          <CIcon
            name="comment"
            color="color.iconBg"
            fill="white"
            :size="['15px', '20px', '24px', '27px', '30px', '32px']"
          />
          <CBox
            as="span"
            :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
            color="color.TextColor5"
            :ml="['3px', '4px', '5px', '6px', '7px', '7px']"
            >26</CBox
          >
        </CBox>
      </CFlex>
    </CBox>
  </CBox>
</template>

<style lang="scss" scoped></style>
