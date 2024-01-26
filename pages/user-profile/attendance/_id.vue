<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <DetailList title="Detail Attendance" :detail="attendanceDetail" link="/user-profile/attendance"
            link-title="Attendance List" />
    </div>
</template>

<script>
import DetailList from '~/components/DetailList.vue';
export default {
    components: { DetailList },
    data() {
        return {
            attendanceDetail: {
                date: "12 12 2024",
                subject: "LOL",
                time: "12 AM",
                checker: "Ezzz",
                teacher: "Legend",
                status: "Absent",
                class: "2099",
                reason: "Sick"
            }
        }
    }, computed: {

    },
    methods: {

    }
};
</script>
<style scoped>
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
