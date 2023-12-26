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
    computed: {
      ...mapState(['isProfileMenuOpen', 'isNotificationsMenuOpen']),
      availableLocales() {
        return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
      },
      userAvatar() {
        return '/placeholder.png'
      },
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
  