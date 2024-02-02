<!-- eslint-disable no-console -->
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
                        <FilterCheckBox v-model="selectedOptions.byAttendance" title="Filter By Attendances" />
                    </li>
                    <li class="pb-4 border-b border-default">
                        <FilterCheckBox v-model="selectedOptions.bySubject" title="Filter By Subjects" />
                    </li>
                    <li class="pb-4 ">
                        <FilterCheckBox v-model="selectedOptions.byTeacher" title="Filter By Teacher" />
                    </li>
                </ul>
            </section>
            <section class="w-[77%]">
                <div class="py-4 text-default text-20 font-semibold flex justify-between">
                    <span>
                        Attendance List
                    </span>
                    <span class="text-18 text-default">
                        <Pagination v-model="pageMetadata.currentPage" :page-size="pageMetadata.pageSize"
                            :total="pageMetadata.totalItems" />
                    </span>
                </div>
                <AttendanceList :heads="headAttendanceTitles" :menus="attendanceMenus" class="overflow-hidden"
                    url-prefix="/user-profile/attendance/" />
                <div class="text-18 p-4 text-default">
                    <Pagination v-model="pageMetadata.currentPage" :page-size="pageMetadata.pageSize"
                        :total="pageMetadata.totalItems" show-item-summary />
                </div>
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
import apis from "~/apis/index.js";
export default {
    components: { attendanceSummary, DateRangeSelection, ViewRows, FilterCheckBox, AttendanceList, Pagination },
    data() {
        return {
            pageMetadata: {
                pageSize: 10,
                totalItems: 100,
                currentPage: 1
            },
            selectedRowValue: 10,
            selectedDate: {},
            selectedOptions: {
                byAttendance: [],
                bySubject: [],
                byTeacher: [],
            },
            attendanceMenus: [
                {
                    subject: "STweerferferferferferferferferferH",
                    session: "7:00 - 9:00, Jan 10, 2022",
                    status: "late",
                    id: "234562"
                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "attend",
                    id: "234562"

                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "permission",
                    id: "234562"

                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "absent",
                    id: "234562"

                },
                {
                    subject: "STweerferferferferferferferferferH",
                    session: "7:00 - 9:00, Jan 10, 2022",
                    status: "late",
                    id: "234562"

                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "attend",
                    id: "234562"

                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "permission",
                    id: "234562"

                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "absent",
                    id: "234562"

                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "permission",
                    id: "234562"

                },
                {
                    subject: "STH",
                    session: "12 12 2014",
                    status: "absent",
                    id: "234562"
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
            return {
                byAttendance: [
                    {
                        title: "All Attendances",
                        value: false
                    },
                    {
                        title: "Present",
                        value: false
                    },
                    {
                        title: "Late",
                        value: false
                    },
                    {
                        title: "Absent with Permission",
                        value: false
                    },
                    {
                        title: "Absent",
                        value: false
                    },
                ],
                bySubject: [
                    {
                        title: "All Subject",
                        value: false
                    },
                    {
                        title: "Fundament of Accounting",
                        value: false
                    },
                    {
                        title: "Art",
                        value: false
                    },
                    {
                        title: "Mathematic",
                        value: false
                    },
                    {
                        title: "English Language",
                        value: false
                    },
                    {
                        title: "Computer Science Teacher",
                        value: false
                    }

                ],
                byTeacher: [
                    {
                        title: "All Teacher",
                        value: false
                    },
                    {
                        title: "Fundament of Accounting",
                        value: false
                    },
                    {
                        title: "Art Teacher",
                        value: false
                    },
                    {
                        title: "Mathematic Teacher",
                        value: false
                    },
                    {
                        title: "English Teacher",
                        value: false
                    },
                    {
                        title: "Computer Science Teacher",
                        value: false
                    }
                ],
            }
        },

        summaryMenus() {
            return [
                {
                    title: "Present",
                    value: "20/70",
                    color: "#07D735"
                },

                {
                    title: "Late",
                    value: "10/70",
                    color: "#FF9900"
                },
                {
                    title: "Absent with permission",
                    value: "10/70",
                    color: "#EA9999"
                },
                {
                    title: "Absent",
                    value: "30/70",
                    color: "#CF2A27"
                },

            ]
        },

    },
   async mounted() {
        // Set the default value for selectRowValue based on rowOptions
        this.selectedRowValue = this.rowOptions[0].value;
        this.selectedOptions = this.filterOptions;
        await this.getAllAttendances()
    },
    methods: {
        async getAllAttendances() {
            console.log("attendanceceeece");
            const lo = await apis.backend.getAttendances(this.$axios, 1, 10)
            console.log(lo.data);
            console.log(lo.data.data);
        }

    },

}    
</script>
