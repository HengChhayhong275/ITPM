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
                date: "   N/A    ",
                subject: "N/A",
                time: "N/A - N/A",
                checker: "N/A",
                teacher: "N/A",
                status: "N/A",
                class: "N/A",
                reason: "N/A"
            },
        }
    }, async mounted() {
        await this.attendanceById()
    },
    methods: {
        async attendanceById() {
        const res = await api.backend.getAttendancesById(this.$axios, this.$route.params.id)
        const data=res.data[0]
        this.attendanceDetail.date=   data.recode_at.split('T')[0]
        this.attendanceDetail.subject=data.subject
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

