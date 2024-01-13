<!-- eslint-disable no-console -->
<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <a-dropdown v-model="dropdownVisible" :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
                <div class="flex gap-2 p-4 py-2 text-18 text-default border-[1px] border-DEFAULT rounded-8">
                    <span v-html="carlendarIcon"></span>
                </div>
            </a>

            <!-- Dropdown content -->
            <template #overlay>
                <div class="flex flex-col gap-4 p-4 font-semibold rounded-16 bg-white overflow-hidden shadow-md">
                    <a-range-picker v-model="localValue" class="ant-date-piacker-custom" :disabled-date="disabledDate"
                        :format="dateFormat" @click.stop />

                    <button
                        class="w-full rounded-8 text-18 p-4 py-2  flex justify-center bg-dark-blue border-[1px] border-dark-blue"
                        @click="applyDateChange">
                        <div class="text-white font-semibold">APPLY</div>
                    </button>

                    <!-- middle line -->
                    <span class="w-[60%] h-[1px] my-2 mx-auto rounded-16" style="background-color: #d9d9d9;"></span>

                    <ul class="flex flex-col gap-4 quick-date-select">
                        <li v-for="(item, index) in menus" :key="index">
                            <button
                                class="w-full rounded-8 text-18 text-default py-2 flex justify-center border-[1px] border-default hover:text-dark-blue hover:border-dark-blue"
                                @click="localValue = item.value; applyDateChange();">
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
            type: [Number, String],
            default: 0,
        },
        menus: {
            type: Array,
            require: true,
            default: null,
        },
    },
    data() {
        return {
            localValue: this.value,
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
        dateFormat() {
            return "DD.MM.YYYY"
        },
        carlendarIcon() {
            return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="#777474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        },
    },
    // watch: {
    //     localValue(newVal) {
    //         if (newVal && newVal.length === 2) {
    //             const [startDate, endDate] = newVal;
    //             // Use startDate and endDate as needed
    //             console.log('Start Date:', startDate.format("DD.MM.YYYY"));
    //             console.log('End Date:', endDate);
    //         }
    //     },
    // },
    // value(newVal) {
    //     this.localValue = newVal;
    // },
    mounted() {
        this.today = moment().format(this.dateFormat);
        this.yesterday = moment().subtract(1, 'day').format(this.dateFormat);
        this.currentWeekStart = moment().startOf('week').format(this.dateFormat);
        this.currentWeekEnd = moment().endOf('week').format(this.dateFormat);
        this.lastMonthStart = moment().subtract(1, 'month').startOf('month').format(this.dateFormat);
        this.lastMonthEnd = moment().subtract(1, 'month').endOf('month').format(this.dateFormat);
    },
    methods: {
        stopPropagation(event) {
            // Stop event propagation to prevent dropdown from closing
            // espiacially when click on date range picker
            event.stopPropagation();
        },
        emitDate() {
            // Emit the value when the radio group value changes and can interact using v-model
            this.$emit("input", this.localValue);
        },
        applyDateChange() {
            console.log(this.localValue);
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
    width: 100% !important;
    padding: 10px !important;
}
</style>