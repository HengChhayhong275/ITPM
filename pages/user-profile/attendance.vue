<template>
    <div class="flex flex-col gap-4">
        <attendanceSummary :menus="summaryMenus" />
        <div class="rounded-[8px] bg-white fledx justify-between">
            <div>
                <a-space direction="vertical" :size="12" class="w-[40%]">
                    <a-date-picker v-model="value1" class="w-full" />
                </a-space>
            </div>
            <div>
                <a-menu v-model="selectedKeys" style="width: 256px" mode="inline" :items="items" @click="handleClick">
                </a-menu>

            </div>
        </div>
    </div>
</template>

<script>
import attendanceSummary from "~/components/attendance/attendance-summary.vue";

export default {
    components: { attendanceSummary },
    data() {
        return {
            value1: '',
            selectedKeys: '',
            items: [
                getItem('Navigation One', 'sub1', () => h(MailOutlined), [
                    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
                    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
                ])]

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
