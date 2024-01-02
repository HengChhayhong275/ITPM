<template>
    <div>
<<<<<<< HEAD
      this is in page dir 
      <UserProfileInfo />
=======
      <section class="border border-red-100 mt-10">
        <div class="border border-red-600 m-2">
          <div >
            <div>
              <img class="w-24 h-24 rounded-full" :src="require('assets/img/profile-pic/profile-2.png')" alt="profile">
            </div>
            <div>
              <h1 class="font-bold">Melisa John</h1>
              <h2 class="text-gray-400">ID : 168</h2>
              <h2 class="text-blue-600">Student</h2>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </section>
>>>>>>> bddf9c121fdd349ae4b5fe022c354f272000aa5d
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
<<<<<<< HEAD
      <div class="bg-green-500 min-h-[10rem]">
        <nuxt />
      </div>
=======
      <!-- <div class="bg-green-500 min-h-[10rem]">
        <Nuxt />
      </div> -->
>>>>>>> bddf9c121fdd349ae4b5fe022c354f272000aa5d
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
  