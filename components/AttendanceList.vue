<template>
    <div class="attendance-list rounded-16 bg-white">
        <table>
            <thead class="text-15 text-secondary">
                <tr>
                    <th v-for="(item, index) in heads" :key="index">
                        {{ item }}
                    </th>
                    <th>
                        <div style="visibility: hidden;">Action</div>
                    </th>
                </tr>
            </thead>
            <tbody class="text-16 text-default">
                <tr v-for="(item, index) in menus" :key="index">
                    <td v-for="(value, key) in item" :key="key"
                        :class="{ ['text-' + value.toLowerCase()]: key.toLowerCase() === 'status' }">
                        {{ value }}
                    </td>
                    <td>
                        <button v-if="actionIsButton" @click="$emit('item-clicked', item)">
                            <div :class="actionClass" style="font-size: 14px;">
                                <div>{{ actionTitle }}</div>
                            </div>
                        </button>
                        <nuxt-link v-else :to="urlPrefix + item.id">
                            <div :class="actionClass" style="font-size: 14px;">
                                <div>{{ actionTitle }}</div>
                            </div>
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
        // refer to header of table
        heads: {
            type: Array,
            default: null
        },
        // refer to data of table, so it should match the number or size header
        menus: {
            type: Array,
            default: null
        },
        // in senario when using such id does not work, so add entire url +id
        urlPrefix: {
            type: String,
            default: '/'
        },
        // in case, the action want it to be button click instead
        actionIsButton: {
            type: Boolean,
            default: false,
        },
        actionClass: {
            type: String,
            default: "rounded-8 text-white btn bg-dark-blue"
        },
        actionTitle: {
            type: String,
            default: "View Detail"
        },
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