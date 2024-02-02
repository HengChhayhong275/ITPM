<template>
  <div class="main">
    <HeaderMobileMenu :menus="menus" />
    <HeaderLogin/>
    <HeaderTopNav :menus="menus" />
    <div class="content shadow-lg p-4">
        <nuxt-child />
    </div>
  </div>
</template>

<script>
import antdvPlugin from '~/plugins/antd-ui'
import HeaderMobileMenu from '~/components/HeaderMobileMenu.vue'
import HeaderLogin from '~/components/HeaderLogin.vue'
import HeaderTopNav from '~/components/HeaderTopNav.vue'

export default {
  name: 'DefaultLayout',
  components: { HeaderMobileMenu, HeaderLogin, HeaderTopNav },
  middleware: ['auth', 'redirect'],
  head: {
    // meta: [
    //   {
    //     hid: 'description',
    //     name: 'description',
    //     content:
    //       'Discover information about schools, universities, courses that you like here in Sala. ',
    //   },
    // ],
    bodyAttrs: {
      class: 'default',
    },
  },
  computed: {
    menus() {
      return [
        {
          title: this.$t('user-profile'),
          path: this.localePath('/user-profile'),
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
        },
        {
          title: this.$t('Academic Calender'),
          path: this.localePath('/academic'),
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
        {
          title: this.$t('Timetable'),
          path: this.localePath('/timetable'),
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
        {
          title: this.$t('Score Check'),
          path: this.localePath('/scorecheck'),
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
        {
          title: this.$t('Courses'),
          path: this.localePath('/course'),
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
        {
          title: this.$t('Request Form'),
          path: this.localePath('/requestform'),
          icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
      ]
    },
  },
  created() {
    antdvPlugin()
  },
}
</script>
<style lang="less">
.default {
  @import (inline) 'ant-design-vue/dist/antd.css';
  @import (inline) '~/assets/styles/default-design.css';

  background: -webkit-gradient(linear,
      left top,
      left bottom,
      from(#0052d4),
      to(#138ce3));
  background: -o-linear-gradient(#0052d4, #138ce3);
  background: linear-gradient(#0052d4, #138ce3);
  padding-right: 2rem;
  padding-left: 2rem;
  overflow-x: hidden;

  --tw-border-opacity: 1;
  --tw-text-opacity: 1;
  --tw-bg-opacity: 1;

  a {
    color: rgb(45, 55, 72);

    &:hover {
      color: #d1d5db;
    }
  }

  p {
    margin: 0;
  }

  .main {
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .border-theme-29 {
    border-color: rgba(40, 78, 178, var(--tw-border-opacity));
  }

  .bg-theme-26 {
    background-color: rgba(21, 50, 154, var(--tw-bg-opacity));
  }

  .hover\:bg-theme-1:hover {
    background-color: rgba(28, 63, 170, var(--tw-bg-opacity));
  }

  .ant-calendar-picker {
    border: none;
  }

  .anticon {
    vertical-align: 0.175em;
  }

  .ant-table-pagination.ant-pagination {
    width: 100%;
    text-align: right;
  }

  .ant-pagination-total-text {
    float: left;
    margin-left: 10px;
  }

  .ant-pagination.ant-table-pagination li {
    margin-bottom: 10px;
  }

  .ant-table-thead>tr>th .anticon-filter,
  .ant-table-thead>tr>th .ant-table-filter-icon {
    font-size: 15px;
  }

  .ant-table-thead>tr>th .anticon-filter>svg,
  .ant-table-thead>tr>th .ant-table-filter-icon>svg {
    margin-top: -10px;
  }

  .img-box-shadow {
    -webkit-box-shadow: 0 0 0 2px #fff, 1px 1px 5px rgb(0 0 0 / 32%);
    box-shadow: 0 0 0 2px #fff, 1px 1px 5px rgb(0 0 0 / 32%);
  }

  .ant-table-filter-dropdown .ant-dropdown-menu {
    max-height: 400px;
    overflow: auto;
  }
}
</style>
