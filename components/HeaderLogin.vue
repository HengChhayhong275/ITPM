<template>
    <div
      class="border-b border-theme-29 -mt-10 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10"
    >
      <div class="top-bar-boxed flex items-center justify-between">
        <!-- BEGIN: Logo -->
        <NuxtLink
          :to="localePath('/')" 
          class="hidden md:flex text-lg font-bold text-white"
        >
        <!-- class="-intro-x hidden md:flex text-lg font-bold text-white" -->
          <Logo class="w-[100px] sm:w-24 mb-1 fill-current text-white" />
        </NuxtLink>
        <!-- END: Logo -->
        <!-- <div class="intro-x dropdown mr-4 sm:mr-6 text-white"> -->
        <div class="flex items-center"> 
            <div class=" pr-3 text-white" v-html="clockIcon"></div>
            <div class=" pr-5 text-white">{{ currentTime }}</div>
            <div class=" pr-3 text-white cursor-pointer" v-html="bellIcon"></div>
        <div class=" dropdown mr-4 sm:mr-6 text-white">
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            class="dark:text-brand-300 uppercase hover:!underline !duration-300"
            :to="switchLocalePath(locale.code)"
          >
            <KhFlag v-if="locale.code === 'kh'" class="w-[28px] svg-shadow" />
            <UsFlag v-else class="w-[28px] svg-shadow" />
          </nuxt-link>
        </div>
        <!-- BEGIN: Account Menu -->
        <!-- <div class="intro-x dropdown w-8 h-8"> -->
        <div>
            <a-button type="primary">Login</a-button>
        </div>
        <!-- END: Account Menu -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex'
  import Logo from '~/assets/img/logo.svg?inline'
  import KhFlag from '~/assets/svg/cambodia.svg?inline'
  import UsFlag from '~/assets/svg/united-states.svg?inline'

  
  export default {
    name: 'DefaultHeader',
    components: {
      Logo,
      KhFlag,
      UsFlag,
    },
    data(){
      return{
        currentTime: this.formatTime(new Date()), 
      }
    },
    computed: {
      ...mapState(['isProfileMenuOpen', 'isNotificationsMenuOpen']),
      availableLocales() {
        return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
      },
      userAvatar() {
        return '/placeholder.png'
      },
      clockIcon(){
        return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6V10L13 13M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      },
      bellIcon(){
        return `<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0676 17.1335L15.3676 15.0335C15.2009 14.8002 15.1009 14.5335 15.1009 14.2335V9.9002C15.1009 7.20019 13.3009 4.8002 10.7009 4.06686V2.36686C10.7009 1.43353 9.93424 0.700195 9.03424 0.700195C8.13424 0.700195 7.36758 1.46686 7.36758 2.36686V4.03353C4.73424 4.8002 2.93424 7.20019 2.96758 9.9002V14.2335C2.96758 14.5335 2.86758 14.8002 2.70091 15.0335L1.00091 17.1335C0.867578 17.3002 0.767578 17.5335 0.767578 17.7669V20.4002H17.3676V17.7669C17.3009 17.5335 17.2009 17.3002 17.0676 17.1335ZM8.33424 2.36686C8.33424 2.0002 8.63424 1.7002 9.00091 1.7002C9.36758 1.7002 9.66758 2.0002 9.66758 2.36686V3.86686C9.20091 3.8002 8.76758 3.8002 8.30091 3.86686V2.36686H8.33424ZM16.3009 19.3669H1.70091V17.7669L3.40091 15.6669C3.73424 15.2669 3.90091 14.7669 3.90091 14.2335V9.9002C3.90091 7.1002 6.16758 4.80019 9.00091 4.80019C11.8342 4.80019 14.1009 7.06686 14.1009 9.9002V14.2335C14.1009 14.7669 14.2676 15.2669 14.6009 15.6669L16.3009 17.7669V19.3669Z" fill="white"/><path d="M8.33398 5.93359V6.93359C10.3673 6.93359 12.034 8.60026 12.034 10.6336H13.034C13.034 8.03359 10.934 5.93359 8.33398 5.93359Z" fill="white"/><path d="M9.00091 22.3002C8.03425 22.3002 7.26758 21.5336 7.26758 20.5669H6.26758C6.26758 22.0669 7.50091 23.3002 9.00091 23.3002C10.5009 23.3002 11.7342 22.0669 11.7342 20.5669H10.7342C10.7342 21.5336 9.96758 22.3002 9.00091 22.3002Z" fill="white"/></svg>`
      }
    },
    methods: {
      ...mapMutations([
        'toggleSideMenu',
        'togglePagesMenu',
        'toggleProfileMenu',
        'toggleNotificationsMenu',
        'closeSideMenu',
        'closeNotificationsMenu',
        'closeProfileMenu',
      ]),
      async logout() {
        await this.$store.dispatch('users/logout')
        await this.$store.dispatch('closeProfileMenuAction')
        this.$router.push(this.localePath('/'))
      },
      formatTime(date) {
        // Format the time in 24-hour format
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second: '2-digit', hour12: false });
      },
    },
    // eslint-disable-next-line vue/order-in-components
    mounted() {
    // Update the time every second
      this.timer = setInterval(() => {
        this.currentTime = this.formatTime(new Date());
      }, 1000);
    },
    // eslint-disable-next-line vue/order-in-components
    beforeDestroy() {
      // Clear the timer when the component is destroyed
      clearInterval(this.timer);
    },
  }
  </script>
  
  <style lang="postcss" scoped>
  .main .dropdown {
    a {
      @apply text-white;
    }
    .ease-in-leave-active {
      @apply transition ease-in duration-150;
    }
    .ease-in-enter-active,
    .ease-in-leave-active {
      @apply opacity-100 duration-300;
    }
    .ease-in-enter,
    .ease-in-leave-to {
      @apply opacity-0 duration-200;
    }
  }
  .svg-shadow {
    -webkit-filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))
      drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))
      drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));
  }
  </style>
  