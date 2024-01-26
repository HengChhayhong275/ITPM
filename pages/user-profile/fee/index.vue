<template>
    <div>
        <div>
            <h1 class="text-2xl">My Transection</h1>
        </div>
        <div class="overflow-x-auto sub-container shadow-2xl">
            <table class="bg-white">
                <thead>
                    <tr>
                        <th>Transection</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index" class="hover:bg-gray-100">
                        <td class="font-medium">{{ item.name }}</td>
                        <td class="font-medium">{{ item.date }}</td>
                        <td class="font-medium">$ {{ item.price }}</td>
                        <td :class="getStatus(item.status)">{{ item.status }}</td>
                        <td>
                            <nuxt-link :to="`/user-profile/fee/${item.id}`" class="flex justify-center">
                                    <div class="text-white bg-dark-blue btn">View Detail</div>
                            </nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default{
    name:"Fee",
    
    computed:{
        data(){
        return[
            {
                name: 'School fee',
                date: '11.Dec.2022',
                price: '300',
                status: 'Success',
                id: 1
            },
            {
                name: 'admin fee',
                date: '11.Dec.2022',
                price: '200',
                status: 'Fail',
                id: 2
            },
            {
                name: 'reexam fee',
                date: '11.Dec.2022',
                price: '100',
                status: 'Pending',
                id: 3
            }
        ]
    },
},
    methods: {
        getStatus(status){
            switch(status.toLowerCase()){
                case "success":
                    return "success-text";
                case "fail":
                    return "fail-text";
                case "pending":
                    return "pending-text";
                default:
                    return "";
            }
        }
    },
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
    padding: 10px 0 10px 50px;
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
.sub-container{
    border-radius: 20px 20px 0 0;
    height: 530px;
    background-color: white;
}
.success-text {
  color: green;
}

.fail-text {
  color: red;
}

.pending-text {
  color: orange;
}
.btn{
    padding: 3px 20px 3px 20px !important;
}
</style>


