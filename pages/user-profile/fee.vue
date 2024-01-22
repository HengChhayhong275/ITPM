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
                    <tr v-for="(item, index) in data" :key="index">
                        <td class="font-medium">{{ item.name }}</td>
                        <td class="font-medium">{{ item.date }}</td>
                        <td class="font-medium">$ {{ item.price }}</td>
                        <td :class="getStatus(item.status)">{{ item.status }}</td>
                        <td>{{ item.button }}</td>
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
                button: 'view'
            },
            {
                name: 'admin fee',
                date: '11.Dec.2022',
                price: '200',
                status: 'Fail',
                button: 'view'
            },
            {
                name: 'reexam fee',
                date: '11.Dec.2022',
                price: '100',
                status: 'Pending',
                button: 'view'
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
    padding: 15px;
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

</style>