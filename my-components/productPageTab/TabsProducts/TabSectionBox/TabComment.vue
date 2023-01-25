<script>
import { CBox, CText, CTextarea } from '@chakra-ui/vue'

export default {
  
  data(){
    return{
      review:""
    }
  },
  methods:{
    handleReviewChange(e){
      this.review = e
    },
    async submitReview(){
      const productId = this.$route.params.id
      const user = await JSON.parse(localStorage.getItem("user"))
      if(user){
        const userId = await user._id
        const formReview = {
          product_id:productId,
          text:this.review,
          rate:4,
          user_id: userId
        }
        if(this.review === ''){
          this.$toast({
            title:'An error occurred.',
            description:'You have to type input!.',
            status: 'error',
            duration: 10000,
            position: 'top'
          })
        }else{
          await this.$store.dispatch("submitReview", formReview);
          this.$toast({
            title:'Exelent.',
            description:'You have commented!.',
            status: 'success',
            duration: 10000,
            position: 'top'
          })
        }
        this.review = ""
      }else{
        this.$toast({
          title:'An error occurred.',
          description:'You have to register first!.',
          status: 'error',
          duration: 10000,
          position: 'top'
        })
      }
    }
  },
  components:{
    CBox, CText, CTextarea
  }
}
</script>

<template>
  <CBox>
    <CText
    color="color.TextColor2"
    font-size="24px"
    line-height="32px"
    font-family="Yandex Sans Display"
    font-weight="700"
    mt="75px"
    mb="10px"
    :text-align="['center', 'center', 'center', 'center', 'start', 'start']"
    >Baholang</CText
    >
    
    <CBox
    display="flex"
    align-items="center"
    :justify-content="[
    'center',
    'center',
    'center',
    'center',
    'start',
    'start',
    ]"
    >
    <CIcon name="star" mb="3px" width="42px" height="42px" />
    <CIcon name="star" mb="3px" width="42px" height="42px" ml="13px" />
    <CIcon name="star" mb="3px" width="42px" height="42px" ml="13px" />
    <CIcon name="star" mb="3px" width="42px" height="42px" ml="13px" />
    <CIcon name="star" mb="3px" width="42px" height="42px" ml="13px" />
  </CBox>
  
  <CText
  :text-align="['center', 'center', 'center', 'center', 'start', 'start']"
  color="color.TextColor1"
  font-size="12px"
  line-height="20px"
  font-family="Yandex Sans Display"
  font-weight="300"
  mt="32px"
  >Fikrlaringizni yuboring <br />
  Sizning fikringiz biz uchun muhim</CText
  >
  <CBox>
    <CTextarea
    :w="['100%', '100%', '100%', '100%', '681px', '681px']"
    mt="24px"
    height="160px"
    resize="none"
    :_focus="{ shadow: 'none' }"
    border-width="1px"
    bg="color.BgColor"
    border-color="color.iconBg"
    placeholder="Qo’shimcha izoh yozib qoldiring"
    @change="handleReviewChange($event)"
    />
  </CBox>
  
  <CBox
  display="flex"
  flex-direction="column"
  :align-items="['center', 'center', 'center', 'center', 'start', 'start']"
  justify-content="center"
  >
  <CButton
  mt="24px"
  background-color="color.WarningColor1"
  color="white"
  font-size="12px"
  font-family="Yandex Sans Display"
  font-weight="400"
  line-height="18px"
  border-radius="12px"
  :padding="[
  '11px 50px',
  '13px 50px',
  '15px 50px',
  '18px 50px',
  '20px 50px',
  '23px 50px',
  ]"
  border-color="color.WarningColor1"
  border-width="1px"
  :_focus="{
    shadow: 'none',
    bg: 'white',
    color: 'color.WarningColor1',
  }"
  :_hover="{ color: 'color.WarningColor1', backgroundColor: 'white' }"
  @click="submitReview"
  >Оставить отзыв</CButton
  >
</CBox>
</CBox>
</template>

<style></style>
