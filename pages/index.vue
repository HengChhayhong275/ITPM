<template>
  <div>
    <ul>
      <li v-for="(item, index) in userProfileMenus" :key="index">
        <NuxtLink :to="item.path">
          <div class="top-menu__icon">
            <span v-html="item.icon"></span>
          </div>
          <div class="top-menu__title">{{ item.title }}</div>
        </NuxtLink>
      </li>
    </ul>
    <div>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
  layout: 'default',
  middleware: 'auth',
  head: {
    title: 'user Profile',
  },
  computed: {
    userProfileMenus() {
      return [
        
      ]
    }
  }
}
</script>
