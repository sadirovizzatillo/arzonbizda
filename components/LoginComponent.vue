<template>
    <CThemeProvider>
        <div class="login-main">
            <c-stack spacing="4">
                <c-input-group>
                    <c-input-left-addon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C9.79086 3 8 4.79086 8 7V8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8V7C16 4.79086 14.2091 3 12 3ZM9.5 7C9.5 5.61929 10.6193 4.5 12 4.5C13.3807 4.5 14.5 5.61929 14.5 7V8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8V7ZM5.50232 19.3686C5.97321 16.2577 9.01803 14.5 12.0022 14.5C14.9858 14.5 18.031 16.2577 18.5019 19.3686C18.5046 19.3866 18.5025 19.3972 18.5 19.4048C18.497 19.4137 18.4903 19.4269 18.4759 19.442C18.4453 19.4741 18.3894 19.5039 18.3171 19.5039H5.68718C5.61487 19.5039 5.55898 19.4741 5.52838 19.442C5.51394 19.4269 5.50726 19.4137 5.50427 19.4048C5.50174 19.3972 5.49961 19.3865 5.50232 19.3686ZM12.0022 13C8.57321 13 4.64037 15.0404 4.01922 19.1441C3.85624 20.2208 4.75727 21.0039 5.68718 21.0039H18.3171C19.247 21.0039 20.148 20.2208 19.985 19.1441C19.3638 15.0404 15.4306 13 12.0022 13Z" fill="black"></path>
                        </svg>
                    </c-input-left-addon>
                    <c-input v-model="email" type="email" roundedLeft="0" placeholder="Email" />
                </c-input-group>
                
                <!-- If you add the size prop to `CInputGroup`, it'll pass it to all it's children. -->
                <c-input-group>
                    <c-input-left-addon>
                        <svg width="24" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8334 7.02V5.83333C14.8334 4.28624 14.2188 2.80251 13.1249 1.70854C12.0309 0.614581 10.5472 0 9.00008 0C7.45299 0 5.96926 0.614581 4.87529 1.70854C3.78133 2.80251 3.16675 4.28624 3.16675 5.83333V7.02C2.42455 7.34392 1.79283 7.8771 1.34883 8.55434C0.904836 9.23158 0.667813 10.0235 0.666748 10.8333V15.8333C0.668071 16.938 1.10748 17.997 1.8886 18.7781C2.66971 19.5593 3.72875 19.9987 4.83342 20H13.1668C14.2714 19.9987 15.3305 19.5593 16.1116 18.7781C16.8927 17.997 17.3321 16.938 17.3334 15.8333V10.8333C17.3324 10.0235 17.0953 9.23158 16.6513 8.55434C16.2073 7.8771 15.5756 7.34392 14.8334 7.02ZM4.83342 5.83333C4.83342 4.72826 5.2724 3.66846 6.05381 2.88705C6.83521 2.10565 7.89502 1.66667 9.00008 1.66667C10.1052 1.66667 11.165 2.10565 11.9464 2.88705C12.7278 3.66846 13.1668 4.72826 13.1668 5.83333V6.66666H4.83342V5.83333ZM15.6668 15.8333C15.6668 16.4964 15.4034 17.1323 14.9345 17.6011C14.4657 18.0699 13.8298 18.3333 13.1668 18.3333H4.83342C4.17037 18.3333 3.53449 18.0699 3.06565 17.6011C2.59681 17.1323 2.33342 16.4964 2.33342 15.8333V10.8333C2.33342 10.1703 2.59681 9.5344 3.06565 9.06556C3.53449 8.59672 4.17037 8.33333 4.83342 8.33333H13.1668C13.8298 8.33333 14.4657 8.59672 14.9345 9.06556C15.4034 9.5344 15.6668 10.1703 15.6668 10.8333V15.8333Z" fill="#8F90A6"/>
                        </svg>
                        
                    </c-input-left-addon>
                    <c-input v-model="password"  rounded="0" placeholder="Parol" />
                </c-input-group>
                
                <c-button
                :is-loading=loading
                loading-text="Submitting"
                variant-color="blue"
                variant="outline"
                @click="submitLogin"
                >
                Submit
            </c-button>
        </c-stack>
    </div>
</CThemeProvider>    
</template>

<script>
import {  CThemeProvider, CInputGroup, CInputLeftAddon } from "@chakra-ui/vue";

export default {
    components:{
        CThemeProvider,
        CInputGroup, 
        CInputLeftAddon
    },
    data(){
        return {
            password:"",
            email:"",
            loading:false
        }
    },
    methods:{
        async  submitLogin(){
            this.loading = true
            const loginForm = {
                email:this.email,
                password:this.password,
            }
            if([this.password, this.email].includes("")){
                this.$toast({
                    title:"Loginda Xato",
                    position:top,
                    description:"Iltimos to'g'ri malumot kiriting",
                    status:"error"
                })
            }else{
                await this.$store.dispatch("login", loginForm)
            }
            this.password = ''
            this.email = ''
            this.loading = false
        }
    }
}
</script>


<style>
.login-main{
    max-width: 600px;
    margin:0 auto;
}
</style>