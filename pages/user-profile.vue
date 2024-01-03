<template>
    <div>
      <!-- this is in page dir  -->
      <UserProfileInfo />
      <!-- <ul>
        <li v-for="(item, index) in userProfileMenus" :key="index">
          <NuxtLink :to="item.path">
            <div class="top-menu__icon">
              <span v-html="item.icon"></span>
            </div>
            <div class="top-menu__title">{{ item.title }}</div>
          </NuxtLink>
        </li>
      </ul> -->
      <div class="min-h-[10rem]">
        <nuxt />
      </div>
    </div>
  </template>
  <script>
import UserProfileInfo from "~/components/UserProfileInfo.vue"
  
  export default {
    name: 'UserProfile',
    components:{UserProfileInfo, },
    layout:'default',
    middleware: 'auth',
    head: {
      title: 'user Profile',
    },
    computed: {
      userProfileMenus() {
        return [
          {
            title: this.$t('profile'),
            path: this.localePath('/user-profile/profile'),
            // icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
          },
          {
            title: this.$t('fee'),
            path: this.localePath('/user-profile/fee'),
            // icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
          },
          {
            title: this.$t('attendance'),
            path: this.localePath('/user-profile/attendance'),
            // icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
          },
          {
            title: this.$t('storage'),
            path: this.localePath('/user-profile/storage'),
            // icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
          },
        ]
      }
    }
  }
  </script>
  