<script>
import { CBox, CLink, CIcon } from '@chakra-ui/vue'
import { mapGetters } from 'vuex';
export default {
  name: 'NavbarPopular',
  computed:{
    ...mapGetters(["categories"])
  },  
  components: {
    CBox,
    CLink,
    CIcon,
  },
}
</script>

<template>
  <CBox class="navbarPopular">
    <CBox
      as="ul"
      d="flex"
      align-items="center"
      justify-content="space-between"
      py="1rem"
      border-y="LangBorder"
    >
      <CBox
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        v-for="(cat, id) in categories"
        :key="id"
        ><CLink
          as="router-link"
          :to="localePath({ name: 'category', params: { category: cat._id } })"
          :hover="{ color: 'color.BorderColor', textDecoration: false }"
          :focus="false"
          >{{ cat.name }}</CLink
        ></CBox
      >
      <CBox
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputBorder"
        ><CLink as="router-link" to="#" :_hover="false" :_focus="false"
          ><CIcon
            name="fire"
            mr="8px"
            color="transparent"
            pos="relative"
            bottom="2px"
          />{{ $t('hitSeller') }}</CLink
        ></CBox
      >
    </CBox>
  </CBox>
</template>
<style lang="scss" scoped>
.navbarPopular {
  @media screen and(max-width: 860px) {
    display: none;
  }
}
</style>
