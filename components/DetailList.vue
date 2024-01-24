<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <NuxtLinkButton :link="link" :title="linkTitle"/>
        <div class="mt-4 bg-white rounded-24 ">
            <div class="p-4 border-b border-default text-20 text-default font-semibold flex justify-center">
                {{ title }}
            </div>
            <ul class="p-4 flex flex-wrap gap-5 w-full justify-center text-16 text-default">
                <li v-for="(value, prop) in detail" :key="prop" class="w-[35%] flex">
                    <div class="w-[30%] font-semibold">{{ prop[0].toUpperCase() + prop.slice(1) }}</div>
                    <div :class="{ ['text-' + value.toLowerCase()]: prop.toLowerCase() === 'status' }">{{ value }}</div>
                </li>
            </ul>
            <div class="flex justify-center gap-12 mt-10 text-brand-500  text-16 font-semibold">
                <button v-for="(value, prop) in icons" :key="prop"
                    class="flex flex-col gap-3  justify-center  items-center hover:text-default">
                    <div class="border-[.5rem] bg-blue-100 border-blue-100 rounded-[1000px] text-[5rem] " v-html="value">
                    </div>
                    <div>{{ prop }}</div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import NuxtLinkButton from '~/components/NuxtLinkButton.vue';
export default {
    components: { NuxtLinkButton },
    props: {
        link: {
            type: String,
            default: null
        }, linkTitle: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        }, detail: {
            type: Object,
            default: null
            // {
            // date: "12 12 2024",
            // subject: "LOL",
            // time: "12 AM",
            // checker: "Ezzz",
            // teacher: "Legend",
            // status: "Absent",
            // class: "2099",
            // reason: "-"
            // }
        }
    },
    computed: {
        icons() {
            return {
                'Download as PDF': this.screenShotIcon,
                'Screenshot attendance': this.documentDownloadIcon
            }
        },
        goBackIcon() {
            return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 19L8 12L15 5" stroke="#045FD7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        },
        screenShotIcon() {
            return `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C3.44772 11 3 10.5523 3 10V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4C11 4.55228 10.5523 5 10 5H5V10C5 10.5523 4.55228 11 4 11ZM3 14C3 13.4477 3.44772 13 4 13C4.55228 13 5 13.4477 5 14V19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14ZM21 14C21 13.4477 20.5523 13 20 13C19.4477 13 19 13.4477 19 14V19H14C13.4477 19 13 19.4477 13 20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V14ZM21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V5H14C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 14.4C10.6745 14.4 9.6 13.3255 9.6 12C9.6 10.6745 10.6745 9.6 12 9.6C13.3255 9.6 14.4 10.6745 14.4 12C14.4 13.3255 13.3255 14.4 12 14.4Z" fill="#0052D4"/></svg>`
        },
        documentDownloadIcon() {
            return `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 10V16M12 16L9 13M12 16L15 13M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        }
    },
    methods: {

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
