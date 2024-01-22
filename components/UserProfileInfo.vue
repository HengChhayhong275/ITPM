<template>
  <div class="rounded-base bg-white">
    <div class="containers flex gap-4 p-4 items-center  h-full">
      <div class="w-[40%] flex gap-4 pl-5">
        <div>
          <img
            class="w-32 h-32 rounded-full"
            :src="require('assets/img/profile-pic/profile-2.png')"
            alt="profile"
          />
        </div>
        <ul class="flex flex-col justify-center gap-1 ml-5 pt-4">
          <li class="text-black font-semibold text-[1.1rem]">Melisa John</li>
          <li class="text-color-grey">ID: e20190168</li>
          <li class="profile-menu-active font-semibold">Student</li>
        </ul>
        <div class="vertical-line"></div>
      </div>
      <div class="w-[50%]">
        <ul class="flex flex-col gap-4 pt-4">
          <li
            v-for="(item, index) in userInfos"
            :key="index"
            class="flex gap-3"
          >
            <div class="top-menu__icon">
              <span v-html="item.icon"></span>
            </div>
            <div class="text-color-grey">{{ item.title }}</div>
          </li>
        </ul>
      </div>
      <div class="ml-auto -mt-24"> <!-- Added container for right-aligned content -->
        <a class="flex space-x-1 items-center px-4 py-2 focus:outline-none">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C17.1 18 18 17.1 18 16V4L14 0ZM16 16H2V2H13.17L16 4.83V16ZM9 9C7.34 9 6 10.34 6 12C6 13.66 7.34 15 9 15C10.66 15 12 13.66 12 12C12 10.34 10.66 9 9 9ZM3 3H12V7H3V3Z" fill="#0052D4"/>
            </svg>
            <span class="text-lg">Save</span>
        </a>
      </div>
    </div>
    <nav class="border-t-[1px] mt-[1rem] border-[var(--border-color-base)]">
      <ul class="flex justify-evenly overflow-auto md:w-[50%] m-auto">
        <li v-for="(item, index) in userProfileMenus" :key="index" class="p-4">
          <nuxt-link
            :to="item.path"
            :class="{ 'profile-menu-active': $route.path.includes(item.path) }"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    userInfos() {
      return [
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#0052D4"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          title: 'chhivea@sala.co',
        },
        {
          icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          title: '+855 11 234 687',
        },
        {
          icon: `<svg width="22" height="22" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6569 14.6569C13.7202 15.5935 11.7616 17.5521 10.4138 18.8999C9.63275 19.681 8.36768 19.6814 7.58663 18.9003C6.26234 17.576 4.34159 15.6553 3.34315 14.6569C0.218951 11.5327 0.218951 6.46734 3.34315 3.34315C6.46734 0.218951 11.5327 0.218951 14.6569 3.34315C17.781 6.46734 17.781 11.5327 14.6569 14.6569Z" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          title: '#190A, Str  19, Russey keo, Phnom Penh, Cambodia',
        },
      ]
    },
    userProfileMenus() {
      return [
        {
          title: this.$t('Profile'),
          path: this.localePath('/user-profile/profile/personalinfo'),
          // icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
        },
        {
          title: this.$t('Fee'),
          path: this.localePath('/user-profile/fee'),
          // icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
        },
        {
          title: this.$t('Attendance'),
          path: this.localePath('/user-profile/attendance'),
          // icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
        },
        {
          title: this.$t('Storage'),
          path: this.localePath('/user-profile/storage'),
          // icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
        },
      ]
    },
  },
}
</script>

<style scoped>
.profile-menu-active {
  color: var(--primary-color) !important;
}

.text-color-grey {
  color: var(--text-color-secondary);
  font-weight: 500;
  font-size: 0.99rem;
}

.rounded-base {
  border-radius: var(--border-radius-base);
}
.vertical-line {
  width: 1px; /* or any other width that suits your design */
  margin-top: 8px;
  height: 12%;
  background-color: #d1d5db; /* Change this to a visible color */
  margin-left: 35%;
  position: absolute;
  border-radius: 10px;
}
a{
    color: #2563eb !important;
}

</style>
