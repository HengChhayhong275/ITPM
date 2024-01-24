<!-- eslint-disable vue/no-v-html -->
<template>
    <nuxt-link v-if="!isButton" class="max-w-[fit-content]" :to="link">
        <div class="flex items-center">
            <span v-if="!noIcon" v-html="icon"></span>
            <span :class="injectClass">{{ title }}</span>
        </div>
    </nuxt-link>
    <button v-else class="flex items-center max-w-[fit-content] p-0">
        <span v-if="!noIcon" v-html="icon"></span>
        <span :class="injectClass">{{ title }}</span>
    </button>
</template>
<script>
export default {
    props: {
        injectClass: {
            type: String,
            default: "text-18 font-semibold text-brand-500"
        },
        isButton: {
            type: Boolean,
            default: false
        },
        link: {
            type: String,
            default: '/',
        },
        noIcon: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 19L8 12L15 5" stroke="#045FD7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        }, title: {
            type: String,
            default: "Attendance List",
        }
    }
}
</script>