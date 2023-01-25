<template>
  <div>
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from '~/components/LoginComponent.vue';


export default {
    layout: "AuthLayout",
    name: "LoginPage",
    data() {
        return {};
    },
    components: { LoginComponent }
}
</script>
<!-- 
<style>

</style> -->