<script>
import { CBox, CStack, CFlex } from '@chakra-ui/vue'

import priceSpacer from '@/helpers/price-spacer'

export default {
  name: 'CompareProduct',

  components: {
    CBox,
    CStack,
    CFlex,
  },

  mixins: [
    {
      methods: {
        priceSpacer,
      },
    },
  ],

  props: {
    item: {
      type: Object || Array,
      default: null,
      required: true,
    },
  },
}
</script>

<template>
  <c-box class="comparing__product">
    <c-stack :spacing="4">
      <c-heading
        as="h2"
        font-weight="400"
        :font-size="['24px', '24px', '26px', '26px', '27px', '28px']"
        :line-height="['32px', '32px', '38px', '42px', '45px', '48px']"
        color="color.TextColor2"
        >{{ item.title }}</c-heading
      >
      <c-flex>
        <c-box d="flex" align-items="center">
          <c-icon
            name="star"
            :size="['12px', '14px', '14px', '16px', '20px', '24px']"
            mr="5px"
          />
          <c-icon
            name="star"
            :size="['12px', '14px', '14px', '16px', '20px', '24px']"
            mr="5px"
          />
          <c-icon
            name="star"
            :size="['12px', '14px', '14px', '16px', '20px', '24px']"
            mr="5px"
          />
          <c-icon
            name="star"
            :size="['12px', '14px', '14px', '16px', '20px', '24px']"
            mr="5px"
          />
          <c-icon
            name="star"
            :size="['12px', '14px', '14px', '16px', '20px', '24px']"
          />
          <c-box
            as="span"
            :ml="['6px', '6px', '6px', '6px', '6px', '10px']"
            :mr="['14px', '14px', '14px', '14px', '14px', '24px']"
            :font-size="['10px', '10px', '10px', '12px', '14px', '16px']"
            :line-height="['12px', '12px', '12px', '16px', '20px', '24px']"
            font-weight="400"
            color="color.TextColor5"
            >4,8</c-box
          >
        </c-box>
        <c-divider orientation="vertical" border-color="color.iconBg" />
        <c-box d="flex" align-items="center">
          <c-icon
            name="comment"
            width="24px"
            height="24px"
            :ml="['6px', '6px', '6px', '6px', '6px', '10px']"
            :mr="['10px', '10px', '10px', '12px', '14px', '24px']"
            fill="transparent"
            color="color.TextColor5"
          />
          <!-- <c-box
            as="span"
            font-weight="400"
            :font-size="['10px', '10px', '10px', '12px', '14px', '16px']"
            :line-height="['12px', '12px', '12px', '16px', '20px', '24px']"
            color="color.TextColor5"
            :mr="['10px', '10px', '12px', '14px', '16px', '24px']"
            >{{ item.comments.length }}</c-box
          > -->
        </c-box>
        <c-divider orientation="vertical" border-color="color.iconBg" />
        <c-box d="flex" align-items="center">
          <c-icon
            name="view"
            fill="white"
            :size="['16px', '16px', '18px', '20px', '22px', '24px']"
            :ml="['6px', '6px', '6px', '6px', '6px', '10px']"
            :mr="['6px', '6px', '8px', '10px', '12px', '24px']"
          />
          <c-box
            as="span"
            :font-size="['10px', '10px', '10px', '12px', '14px', '16px']"
            :line-height="['12px', '12px', '12px', '16px', '20px', '24px']"
            font-weight="400"
            color="color.TextColor5"
            >16 452</c-box
          >
        </c-box>
      </c-flex>
    </c-stack>
    <c-stack :spacing="8">
      <c-flex mt="32px" justify="space-between">
        <c-stack>
          <c-text
            font-size="20px"
            line-height="24px"
            color="color.WarningColor1"
            >???????????? ????????</c-text
          >
          <c-heading
            as="h1"
            :font-size="['12px', '18px', '20px', '24px', '32px', '36px']"
            :line-height="['13px', '24px', '26px', '28px', '42px', '48px']"
            color="color.TextColor2"
            >{{ item.price }}</c-heading
          >
          <c-box
            as="span"
            font-size="14px"
            line-height="16px"
            color="color.TextColor5"
            >???????? ?????????????????????? ???????????? ????????</c-box
          >
        </c-stack>
        <c-link
          :href="'www.kun.uz'"
          is-external
          width="215px"
          border="LangBorder"
          rounded="12px"
          pl="24px"
          pr="16px"
          pt="16px"
          pb="18px"
        >
          <c-flex justify="space-between">
            <c-text
              font-size="14px"
              line-height="20px"
              color="color.TextColor5"
              letter-spacing="0.02em"
              mb="18px"
              >??????????????</c-text
            >
            <c-icon name="greenTick" color="color.greenTick" size="20px" />
          </c-flex>
          <c-link
            :font-size="['8px', '10px', '14px', '14px', '16px', '16px']"
            :line-height="['9px', '10px', '14px', '16px', '20px', '24px']"
            color="color.TextColor2"
            _hover="{{}}"
            cursor="pointer"
            >{{ item.brand_id.name }}</c-link
          >
        </c-link>
      </c-flex>
      <c-box>
        <c-divider />
        <c-box
          d="flex"
          align-items="center"
          justify-content="space-between"
          flex-wrap="wrap"
        >
          <c-box
            d="flex"
            align-items="center"
            justify-content="space-between"
            ml="5px"
          >
            <c-icon name="credit_card" size="32px" />
            <c-text
              font-size="13px"
              line-height="19px"
              color="color.InputColor"
              ml="12px"
              >?????? ??????????????</c-text
            >
          </c-box>
          <c-box d="flex" align-items="center" ml="5px">
            <c-icon name="package" size="32px" />
            <c-text
              font-size="13px"
              line-height="19px"
              color="color.InputColor"
              ml="12px"
              >?????????????????? ???? ????????????????</c-text
            >
          </c-box>
          <c-box d="flex" align-items="center" ml="5px" class="fast__delivery">
            <c-icon name="fast_delivery" size="32px" />
            <c-text
              font-size="13px"
              line-height="19px"
              color="color.InputColor"
              ml="12px"
              >???????????????? ???? ???????????????? ???? 1 ??????, ???? ?????????????????????? ???? 5 ????????</c-text
            >
          </c-box>
        </c-box>
        <c-divider />
      </c-box>
      <c-text
        font-size="16px"
        line-height="24px"
        color="color.InputColor"
        mt="32px"
        >????????????????! ?????????????????????? ?????????????????? ?????????? ????????????????, ???????????????? ?????? ????????????????
        ?????????? ?????????? ???????????????? ?? ???????????????????????????? ????????????????! ????????????????????, ??????????????????????
        ???????????????????? ???????? ???????????????????????? ???????????? ?????? ?????????????????????? ?? ???????????????????? ????????????.
        ???????????????????????????????????? ?????????? ?????????????????????????????? ???????????? ??????????????????????????.
        <br /><br />
        ???????????????? ?????????????????????? ?????????????????? ?? 09:00 ???? 19:00 ??????????.
      </c-text>
      <c-stack>
        <c-text
          font-size="20px"
          line-height="24px"
          color="color.TextColor2"
          mt="32px"
          >{{ item.quantity }} ??????????????????????</c-text
        >
        <!-- <c-text line-height="20px" color="color.WarningColor1"
          >?? ?????????????? ?? {{ item.compares.length }} ??????????????????</c-text
        > -->
        <c-link
          :href="'www.kun.uz'"
          is-external
          height="64px"
          max-w="337px"
          w="100%"
          mr="30px"
          border="1px"
          border-color="color.BorderColor"
          rounded="12px"
          bg="color.BorderColor"
          _hover="{{}}"
          _active="{{}}"
          _focus="{{}}"
          font-weight="400"
          color="white"
          mt="24px"
          text-align="center"
          pt="20px"
        >
          ????????????????
        </c-link>
      </c-stack>
    </c-stack>
  </c-box>
</template>
<style lang="scss" scoped>
.fast__delivery {
  @media screen and (min-width: 1250px) {
    width: 194px !important;
  }
  @media screen and(max-width: 1250px) {
    margin-top: 15px;
  }
}
.comparing__product {
  @media screen and (max-width: 767.5px) {
    display: none;
  }
}
</style>
