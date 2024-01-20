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
            <section class="w-[77%] bg-blue-200">
                <AttendanceList />
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
export default {
    components: { attendanceSummary, DateRangeSelection, ViewRows, FilterCheckBox, AttendanceList },
    data() {
        return {
            selectedRowValue: 10,
            selectedDate: "weerfrfer",
            selectedOptions: []
        }
    },

    computed: {
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
