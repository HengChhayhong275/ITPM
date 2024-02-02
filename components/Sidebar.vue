<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
       <div>
        <NuxtLink
                :to="localePath('/')" 
                class="hidden mt-5 md:flex text-lg font-bold text-white mb-5 border-b border-gray-600 w-[150px] pb-5"
            >
            <!-- class="-intro-x hidden md:flex text-lg font-bold text-white" -->
                <Logo class="w-[100px] sm:w-24 mb-1 fill-current text-white" />
            </NuxtLink>
       </div>
            <nav class="side-nav">
      <ul>
        <li v-for="(item, index) in menus" :key="index">
          <NuxtLink
            :to="item.path"
            class="side-menu flex py-5 w-[150px] items-center "
            :class="{ 'side-menu--active': $route.path.includes(item.path) }"
          >
            <div class="side-menu__icon">
              <span v-html="item.icon"></span>
            </div>
            <div class="side-menu__title ml-2">{{ item.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    </div>
  </template>
  
  <script>
    import Logo from '~/assets/img/logo.svg?inline'
  export default {
    components:{
        Logo
    },
    props: {
      menus: {
        type: Array,
        default: null,
      },
    }
  }
  </script>
  <style scoped>
    .side-menu{
      color: white;
    }
  </style>
  
  
  