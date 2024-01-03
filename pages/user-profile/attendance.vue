<template>
    <div class="flex flex-col gap-4">
        <attendanceSummary :menus="summaryMenus" />
        <div class="p-4 text-20 font-semibold text-default rounded-8 bg-white flex justify-between">
            <div class="w-[48%]">
                <div class="mb-[.5rem]">Date selection</div>
                <DateRangeSelection />
            </div>
            <div class="w-[48%]">
                <div class="mb-[.5rem]">Rows selection</div>
                <ViewRows />
            </div>
        </div>
    </div>
</template>

<script>
import attendanceSummary from "~/components/attendance/attendance-summary.vue";
import DateRangeSelection from "~/components/DateRangeSelection.vue";
import ViewRows from "~/components/ViewRows.vue";
export default {
    components: { attendanceSummary, DateRangeSelection, ViewRows },
    data() {
        return {
            value1: '',
            selectedKeys: '',
            selectedValue: '',

        }
    },

    computed: {
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
        methods: {
            getItem(label, key, icon, children, type) {
                return {
                    key,
                    icon,
                    children,
                    label,
                    type,
                };
            }

            //     handleClick: MenuProps['onClick'] = e => {
            //     // console.log('click', e);
            // }, 
        },
        watch: {
        }
    }
}
</script>
