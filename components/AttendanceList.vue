<template>
    <div class="attendance-list rounded-16 bg-white">
        <table>
            <thead class="text-15 text-secondary">
                <tr>
                    <th v-for="(item, index) in heads" :key="index">
                        {{ item }}
                    </th>
                    <th style="visibility: hidden;">Action</th>
                </tr>
            </thead>
            <tbody class="text-16 text-default">
                <tr v-for="(item, index) in menus" :key="index">
                    <td class="w-[37%]">{{ item.subject }}</td>
                    <td>{{ item.session }}</td>
                    <td :class="'text-' + item.status.toLowerCase()">{{ item.status }}</td>
                    <td>
                        <nuxt-link :to="urlPrefix + item.id">
                            <button class="rounded-8 btn bg-dark-blue" style="font-size: 14px;">
                                <div class="text-white">View Detail</div>
                            </button>
                        </nuxt-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    props: {
        heads: {
            type: Array,
            default: null
        },
        menus: {
            type: Array,
            default: null
        }, urlPrefix: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            statusType: {
                absent: "absent",
                late: "late",
                permission: "permission",
                attend: "attend",
            }
        };
    },
    methods: {

    }
}
</script>
<style scoped>
.attendance-list table {
    width: 100%;
    border-collapse: collapse;
}

.attendance-list th {
    padding: 1rem;
    padding-left: 2rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.attendance-list td {
    padding: .5rem;
    padding-left: 2rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
}


.attendance-list tr:hover {
    background-color: #f2f2f2;
}


.text-attend {
    color: '#07D735';
}

.text-late {
    color: '#FF9900';
}

.text-permission {
    color: '#EA9999';
}

.text-absent {
    color: '#CF2A27';
}
</style>