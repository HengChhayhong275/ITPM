<!-- eslint-disable no-console -->
<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <a-dropdown v-model="dropdownVisible" :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
                <div class="flex gap-2 p-4 py-2 text-18 text-default border-[1px] border-DEFAULT rounded-8">
                    <span v-html="carlendarIcon"></span>
                    {{ dateTitle }}
                </div>
            </a>

            <!-- Dropdown content -->
            <template #overlay>
                <div class="w-full max-w-[45vw] flex flex-col gap-4 p-4 font-semibold rounded-16 bg-white overflow-hidden shadow-md">
                    <div class="px-4 mb-[-1.75rem] flex justify-between text[15px] font-semibold text-secondary">
                        <span class="w-[63%]">From</span>
                        <span class="w-[37%]">To</span>
                    </div>
                    <a-range-picker v-model="localValue" class="ant-date-piacker-custom" 
                        :format="dateFormat" @click.stop />

                    <button
                        class="w-full rounded-8 text-18 p-4 py-2  flex justify-center bg-dark-blue border-[1px] border-dark-blue"
                        @click="applyFormatFromDatePicker(localValue); applyDateChange(localValue)">
                        <div class="text-white font-semibold">APPLY</div>
                    </button>

                    <!-- middle line -->
                    <span class="w-[60%] h-[1px] my-2 mx-auto rounded-16" style="background-color: #d9d9d9;"></span>

                    <ul class="flex flex-col gap-4 quick-date-select">
                        <li v-for="(item, index) in dateMenus" :key="index">
                            <button
                                class="w-full rounded-8 text-18 text-default py-2 flex justify-center border-[1px] border-default hover:text-dark-blue hover:border-dark-blue"
                                @click="localValue = item.value; dateTitle = item.title; applyDateChange(item.value);">
                                {{ item.title }}
                            </button>
                        </li>
                    </ul>
                </div>
            </template>
        </a-dropdown>
    </div>
</template>
  
<script>
import moment from 'moment';
export default {
    props: {
        value: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            localValue: null,
            dateTitle: '',
            dropdownVisible: false,

            today: '',
            yesterday: '',
            currentWeekStart: '',
            currentWeekEnd: '',
            lastMonthStart: '',
            lastMonthEnd: '',
        };
    },
    computed: {
        dateMenus() {
            return [
                {
                    title: "Today",
                    value: [
                        this.today,
                        this.today
                    ]
                },
                {
                    title: "Yesterday",
                    value: [
                        this.yesterday,
                        this.yesterday
                    ]
                },
                {
                    title: "Last Week",
                    value: [
                        this.currentWeekStart,
                        this.currentWeekEnd,
                    ]
                },
                {
                    title: "Last Month",
                    value: [
                        this.lastMonthStart,
                        this.lastMonthEnd,
                    ]
                },
            ]
        },
        dateFormat() {
            return "DD.MM.YYYY"
        },
        carlendarIcon() {
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="#777474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        },
    },
    mounted() {
        this.today = moment();
        this.yesterday = moment().subtract(1, 'day');
        this.currentWeekStart = moment().startOf('week');
        this.currentWeekEnd = moment().endOf('week');
        this.lastMonthStart = moment().subtract(1, 'month').startOf('month');
        this.lastMonthEnd = moment().subtract(1, 'month').endOf('month');

        // defult date on loading the page
        this.localValue = [this.today, this.today]
        this.dateTitle = "Today"
    },
    methods: {

        stopPropagation(event) {
            // Stop event propagation to prevent dropdown from closing
            // espiacially when click on date range picker
            event.stopPropagation();
        },
        momentToDateString(arrMomentObj) {
            if (!arrMomentObj) return ''
            return {
                "startDate": arrMomentObj[0].format(this.dateFormat),
                "endDate": arrMomentObj[1].format(this.dateFormat),
            }
        },
        applyFormatFromDatePicker(newVal) {
            const date = this.momentToDateString(newVal)
            this.dateTitle = date.startDate.toString() + ' - ' + date.endDate.toString();
        },
        emitDate() {
            // Emit the value when the radio group value changes and can interact using v-model
            this.$emit("input", this.momentToDateString(this.localValue));
        },
        applyDateChange(newValue) {
            this.localValue = newValue
            this.emitDate()
            this.dropdownVisible = false; // Close the dropdown
        },
    },
};
</script>
  
<style scoped>
/* this is considered bad practice to override the CSS using !important
     currently, could not find a way to make the style work on the above ant design element
     so the last choice is to override those styles in scope of the file
  */
.ant-date-piacker-custom {
    max-width: 100% !important;
    padding: 10px !important;
}
</style>