<template>
    <a-space direction="vertical" :size="12">
      <a-range-picker v-model="value4" :format="dateFormat" />
    </a-space>
  </template>
  <script>

  export default{
    data(){
        return {
            value4:'',
        }
    },
    computed:{
        dateMenu(){
            return[
                {
                    title:"Today",
                    startDate:"123",
                    endDate:"12345"
                },
                {
                    title:"Today",
                    startDate:"123",
                    endDate:"12345"
                },
                {
                    title:"Today",
                    startDate:"123",
                    endDate:"12345"
                },
                {
                    title:"Today",
                    startDate:"123",
                    endDate:"12345"
                },
            ]
        }
    }
  }
  </script>


