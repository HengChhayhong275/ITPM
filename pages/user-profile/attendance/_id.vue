<!-- eslint-disable no-console -->
<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <DetailList title="Detail Attendance" :detail="attendanceDetail" link="/user-profile/attendance"
            link-title="Attendance List" />
    </div>
</template>

<script>
import api from "~/apis/index.js"
import DetailList from '~/components/DetailList.vue';
export default {
    components: { DetailList },
    data() {
        return {
            attendanceDetail: {
                date: "12 12 2024",
                subject: "LOL",
                time: "12 AM - 9 PM",
                checker: "noob",
                teacher: "Legend",
                status: "Absent",
                class: "2099A",
                reason: "Kdean"
            },
            attendanceDetail1: {
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
    }, async mounted() {
        await this.attendanceById()
    },
    methods: {
        async attendanceById() {
        const data = await api.backend.getAttendancesById(this.$axios, this.$route.params.id)
        this.attendanceDetail.date=   data.recode_at
        this.attendanceDetail.subject=data?.subject
        this.attendanceDetail.time=   data.session_at
        this.attendanceDetail.checker=data.checker
        this.attendanceDetail.teacher=data.teacher
        this.attendanceDetail.status= data.status 
        this.attendanceDetail.class=  data.class
        this.attendanceDetail.reason= data.reason
    }
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

