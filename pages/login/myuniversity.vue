<template>
    <div>
        <div class="-mt-5 text-22 text-gray-500">
            My University
        </div>
        <div class="bg-white mt-5 h-[700px] rounded-18 shadow-lg">
            <table>
                <thead>
                    <tr>
                        <th class="w-[700px]">Schools</th>
                        <th>My Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <td class="flex items-center w-[700px]"> <!-- Add the classes here -->
                            <img :src="require(`@/assets/${item.img}`)" alt="School Logo" class="w-10 h-10 rounded-full mr-3">
                            <div>{{ item.name }}</div>
                        </td>
                        <td>
                            <div class="flex">
                                <div v-for="(role, roleIndex) in item.roles" :key="roleIndex" 
                                :class="{ 'teacher': role === 'Teacher', 'student': role === 'Student' }">
                                    {{ role }}
                                </div>
                            </div> 
                        </td>
                        <td>
                            <a class="flex justify-center">
                                    <div @click="showModal" class="text-white bg-dark-blue btn">{{item.button}}</div>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Modal v-show="isModalVisible" @close="closeModal">
            <template #header>
                <div class="text-center mt-16">
                    <div class="text-black text-24 font-bold">Are you a teacher or student ?</div>
                    <div class="text-black">Please select option to continue.</div>
                </div>
            </template>
            <template #body>
                <div class="flex justify-center items-center space-x-10">
                    <button class="border-2 rounded-18 w-64 h-64 border-gray-300 hover:border-blue-700 flex flex-col justify-center items-center text-center" type="button">
                    <img :src="require('~/assets/img/student-portal.png')" alt="student-portal">
                    <span class="text-blue-700 font-bold pt-4 text-18">Student Portal</span>
                    </button>
                    <button class="border-2 rounded-18 w-64 h-64 border-gray-300 hover:border-blue-700 flex flex-col justify-center items-center text-center">
                        <img :src="require('~/assets/img/teacher-portal.png')" alt="teacher-portal">
                        <span class="text-blue-700 font-bold pt-2 text-18">Teacher Portal</span>
                    </button>
                </div>
            </template>
        </Modal>
    </div>
</template>
<script>
import Modal from '~/components/Modal.vue';
export default {
    name: 'MyUniversity',
    components:{
        // eslint-disable-next-line vue/no-unused-components
        Modal
    },
    data() {
      return {
        isModalVisible: false,
      };
    },
    computed: {
        data(){
            return [
                {
                    img: 'img/cadt.jpeg',
                    name: 'Cambodia Academy of Digital Technology ( CADT )',
                    roles: ['Teacher', 'Student'],
                    button: 'View Detail',
                },
                {
                    img: 'img/ITC.png',
                    name: 'Institute of Technology of Cambodia ( ITC )',
                    roles: ['Student'],
                    button: 'View Detail',
                },
                {
                    img: 'img/ifl.png',
                    name: 'International Foreign of Language ( IFL )',
                    roles: ['Teacher', 'Student'],
                    button: 'View Detail',
                }
            ]
        }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
    
    
}
</script>
<style scoped>
table {
border-collapse: collapse;
width: 100%;
}
th, td {
  text-align: left;
  line-height: 2;
}
tr, th, td{
    padding: 10px 0 10px 30px;
}
tr{
    border-bottom: 1px solid #d1d5db;
    min-height: 20px;
}
tbody{
    height: 100%;
}
th{
    color: #9ca3af;
    font-weight: 500;
}
.btn{
    padding: 3px 20px 3px 20px !important;
}
.teacher{
    color: white;
    background-color: #5076AA;
    border-radius: 20px;
    padding: 1px 15px 1px 15px;
    margin-right: 5px;
}
.student{
    color: white;
    background-color: #D66381;
    border-radius: 20px;
    padding: 1px 15px 1px 15px;
}
</style>&gt;