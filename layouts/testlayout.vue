<template>
  <div class="default">
    <!-- <div class="main"> -->
      <div class="content shadow-lg p-4">
        <nuxt-child />
      <!-- </div> -->
    </div>
  </div>
</template>
  
  <script>
  export default {
    // Add any necessary logic for the login layout
  };
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
  