<template>
    <div class="flex">
        <Section>
          <a-card class="shadow" style="width: 350px; border-radius: 16px;">
            <ul class="space-y-4 flex flex-col justify-center mx-3 pt-3 my-0 cursor-pointer ">
                    <li v-for="(item, index) in title" :key="index" class="flex text-lg hover:text-blue-600">
                      <nuxt-link :to="item.path" :class="{ 'profile-menu-active': $route.path.includes(item.path) }">
                        <div class="flex text-center items-center">
                            <span class="mr-3" v-html="item.icon"></span>
                            <div class="text-color-grey pt-1 text-18">{{ item.title }}</div>
                        </div>
                      </nuxt-link>
                    </li>
                </ul>
          </a-card>
        </Section>
        <Section class="grow pl-5 w-11/12">
          <Nuxt />
        </Section>
    </div>
  </template>
  <script>
  import Section from '~/components/Section.vue';
  export default{
  name: 'Profile',
  layout: 'default',
  middleware: 'auth',
  head: {
    title: 'user Profile',
  },
  component:{
    Section,
  },
  computed: {
    title(){
      return [
        {
          icon: `<svg width="24" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"/></svg>`,
          title: this.$t('Personal Information'),
          path: this.localePath('/user-profile/profile/personalinfo'),
        },
        {
          icon: `<svg width="24" height="23" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20.5H22V18.5C22 16.8431 20.6569 15.5 19 15.5C18.0444 15.5 17.1931 15.9468 16.6438 16.6429M17 20.5H7M17 20.5V18.5C17 17.8438 16.8736 17.217 16.6438 16.6429M7 20.5H2V18.5C2 16.8431 3.34315 15.5 5 15.5C5.95561 15.5 6.80686 15.9468 7.35625 16.6429M7 20.5V18.5C7 17.8438 7.12642 17.217 7.35625 16.6429M7.35625 16.6429C8.0935 14.801 9.89482 13.5 12 13.5C14.1052 13.5 15.9065 14.801 16.6438 16.6429M15 7.5C15 9.15685 13.6569 10.5 12 10.5C10.3431 10.5 9 9.15685 9 7.5C9 5.84315 10.3431 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5ZM21 10.5C21 11.6046 20.1046 12.5 19 12.5C17.8954 12.5 17 11.6046 17 10.5C17 9.39543 17.8954 8.5 19 8.5C20.1046 8.5 21 9.39543 21 10.5ZM7 10.5C7 11.6046 6.10457 12.5 5 12.5C3.89543 12.5 3 11.6046 3 10.5C3 9.39543 3.89543 8.5 5 8.5C6.10457 8.5 7 9.39543 7 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          title: this.$t('Parent / Guardian Information'),
          path: this.localePath('/user-profile/profile/parentinfo'),
        },
        {
          icon: `<svg width="24" height="23" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.5L21 9.5L12 4.5L3 9.5L12 14.5ZM12 14.5L18.1591 11.0783C18.7017 12.4466 19 13.9384 19 15.4999C19 16.2013 18.9398 16.8885 18.8244 17.5569C16.2143 17.8106 13.849 18.9006 12 20.5555C10.151 18.9006 7.78571 17.8106 5.17562 17.5569C5.06017 16.8885 5 16.2012 5 15.4999C5 13.9384 5.29824 12.4466 5.84088 11.0782L12 14.5ZM8 20.4999V13L12 10.7778" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          title: this.$t('Education Information'),
          path: this.localePath('/user-profile/profile/educationinfo'),
        }
      ]
    },
  }

  }
  </script>
  <style scoped>
.profile-menu-active {
    color: var(--primary-color) !important;
}</style>