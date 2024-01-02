<template>
  <div class="main">
    <HeaderMobileMenu :menus="menus" />
    <HeaderLogin />
    <HeaderTopNav :menus="menus" />
    <div class="content shadow-lg p-[1rem]" style="background-color:red !important;">
        <nuxt-child class="bg-blue-500 rounded" />
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
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
        },
        {
          title: this.$t('Timetable'),
          path: this.localePath('/timetable'),
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
        },
        {
          title: this.$t('Score Check'),
          path: this.localePath('/scorecheck'),
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
        },
        {
          title: this.$t('Courses'),
          path: this.localePath('/course'),
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
        },
        {
          title: this.$t('Request Form'),
          path: this.localePath('/requestform'),
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
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
