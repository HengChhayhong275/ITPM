<template>
    <div class="flex flex-col gap-4">
        <!-- <span v-for="(item, index) in selectedOptions" :key="index"> {{ item.title + " : : " + item.value }}</span> -->
        <!-- {{ selectedOptions }} -->

        <attendanceSummary :menus="summaryMenus" />
        <div class="p-4 text-20 font-semibold text-default rounded-8 bg-white flex justify-between">
            <div class="w-[48%]">
                <div class="mb-[.5rem]">Date selection</div>
                <DateRangeSelection v-model="selectedDate" />
            </div>
            <div class="w-[48%]">
                <div class="mb-[.5rem]">Rows selection</div>
                <ViewRows v-model="selectedRowValue" :menus="rowOptions" />
            </div>
        </div>
        <div class="flex gap-4">
            <section class="w-[23%]">
                <div class="py-4 text-default text-20 font-semibold">
                    Filter By
                </div>
                <ul class="rounded-16 bg-white p-4 flex flex-col gap-4">
                    <li class="pb-4 border-b border-default">
                        <FilterCheckBox v-model="selectedOptions" title="Filter By Attendances" />
                    </li>
                    <li class="pb-4 border-b border-default">
                        <FilterCheckBox v-model="selectedOptions" title="Filter By Subjects" />
                    </li>
                    <li class="pb-4 ">
                        <FilterCheckBox v-model="selectedOptions" title="Filter By Teacher" />
                    </li>
                </ul>
            </section>
            <section class="w-[77%]">
                <div class="py-4 text-default text-20 font-semibold flex justify-between">
                    <span>
                        Attendance List
                    </span>
                    <Pagination />
                </div>
                <AttendanceList :heads="headAttendanceTitles" :menus="attendanceMenus" />
                <Pagination />
            </section>
        </div>
    </div>
</template>

<script>
import attendanceSummary from "~/components/attendance/attendance-summary.vue";
import DateRangeSelection from "~/components/DateRangeSelection.vue";
import ViewRows from "~/components/ViewRows.vue";
import FilterCheckBox from "~/components/FilterCheckBox.vue"
import AttendanceList from "~/components/AttendanceList.vue"
import Pagination from "~/components/Pagination.vue"
export default {
    components: { attendanceSummary, DateRangeSelection, ViewRows, FilterCheckBox, AttendanceList, Pagination },
    data() {
        return {
            selectedRowValue: 10,
            selectedDate: "weerfrfer",
            selectedOptions: [],
            attendanceMenus: [
                {
                    subject: "STweerferferferferferferferferferH",
                    session: "7:00 - 9:00, Jan 10, 2022",
                    status: "late",
                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "attend",
                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "permission",
                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "absent",
                },
            ]
        }
    },

    computed: {
        headAttendanceTitles() {
            return [
                "Subject",
                "Session",
                "Status"
            ]
        },
        rowOptions() {
            return [
                { value: 10 }, { value: 100 }, { value: 1000 }, { value: 10000 }
            ]
        },
        filterOptions() {
            return [
                {
                    title: "opt1",
                    value: false
                },
                {
                    title: "opt2",
                    value: false
                },
                {
                    title: "opt1",
                    value: false
                },
                {
                    title: "opt1",
                    value: false
                },
                {
                    title: "opt1",
                    value: false
                },
            ]
        },
        // dateList() {
        //     return [
        //         {
        //             value: {
        //                 startDate: "10.10.2023",
        //                 endDate: "13.01.2024"
        //             },
        //             title: "Today",
        //         },
        //         {
        //             value: {
        //                 startDate: "10.10.2023",
        //                 endDate: "13.01.2024"
        //             },
        //             title: "Today",
        //         },
        //         {
        //             value: {
        //                 startDate: "10.10.2023",
        //                 endDate: "13.01.2024"
        //             },
        //             title: "Today",
        //         },
        //     ]
        // },
        summaryMenus() {
            return [
                {
                    title: "Present",
                    value: "20/70",
                    color: "green"
                },

                {
                    title: "Late",
                    value: "10/70",
                    color: "yellow"
                },
                {
                    title: "Absent with permission",
                    value: "10/70",
                    color: "red"
                },
                {
                    title: "Absent",
                    value: "30/70",
                    color: "blue"
                },

            ]
        },

    },
    mounted() {
        // Set the default value for selectRowValue based on rowOptions
        this.selectedRowValue = this.rowOptions[0].value;
        this.selectedOptions = this.filterOptions;
    },
    methods: {

        //     handleClick: MenuProps['onClick'] = e => {
        //     // console.log('click', e);
        // }, 
    },
    // watch: {
    // }
}
</script>
