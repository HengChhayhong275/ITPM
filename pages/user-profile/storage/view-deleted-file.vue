<template>
    <div>
        <AttendanceList :heads="tableHeaders" :menus="menus" action-title="Restore" action-is-button
            action-class="text-brand-500 btn border-none" />
    </div>
</template>

<script>
import AttendanceList from '~/components/AttendanceList.vue';
export default {
    components: { AttendanceList },
    computed: {
        tableHeaders() {
            return [
                "File Name",
                "Deleted Date",
                "Full size"
            ]
        },
        menus() {
            return [
                {
                    fileName: "rtyunbfhfjef",
                    deletedDate: "12 Jan 20299",
                    fileSize: "1 GB"
                },
                {
                    fileName: "rtyunbfhfjef",
                    deletedDate: "12 Jan 20299",
                    fileSize: "1 GB"
                },
                {
                    fileName: "rtyunbfhfjef",
                    deletedDate: "12 Jan 20299",
                    fileSize: "1 GB"
                },
                {
                    fileName: "rtyunbfhfjef",
                    deletedDate: "12 Jan 20299",
                    fileSize: "1 GB"
                },
                {
                    fileName: "rtyunbfhfjef",
                    deletedDate: "12 Jan 20299",
                    fileSize: "1 GB"
                },
            ]
        }
    }
}
</script>