<script>
import { CButton, CIcon } from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
export default {
  name: 'CompareProductBtn',
  components: {
    CIcon,
    CButton,
  },

  props: {
    items: {
      type: Object || Array,
      required: true,
    },
  },

  data() {
    return {
      isCom: false,
    }
  },

  computed: {
    ...mapGetters(['isBadgeLength']),
  },

  methods: {
    IsComponents() {
      if (this.isBadgeLength.length < 2) {
        this.$router.push('/')
        this.$store.dispatch('actionsIsCom', this.$route.params.id)
      } else if (this.isBadgeLength.length === 2) {
        console.log(this.$store.state.isBadge)
      }
    },
  },
}
</script>

<template>
  <c-button
    height="64px"
    max-w="337px"
    w="100%"
    border="1px"
    border-color="color.BorderColor"
    rounded="12px"
    bg="white"
    _hover="{{}}"
    _active="{{}}"
    _focus="{{}}"
    font-weight="400"
    color="color.BorderColor"
    @click="IsComponents"
  >
    <c-icon name="compare" size="24px" mr="10px" />
    {{ $t('compare') }}
  </c-button>
</template>
