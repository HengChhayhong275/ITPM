<!-- pages/login.vue -->
<template>
  <div>
    <!-- Your login page content -->
    ertyujnbbvt7ujhgyujbvgyuvgybgyuhvgyhvghfgtyhvg
  </div>
</template>

<script>
export default {
   asyncData({ app }) {
    // Redirect to Keycloak login
    app.$auth.loginWith('keycloak');
  },
};
</script>
