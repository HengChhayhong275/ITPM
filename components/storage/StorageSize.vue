<template>
    <div class="p-4 rounded-8 bg-white flex flex-col gap-4">
        <div>
            <span class="text-16 text-default font-semibold">{{ title }}</span>
            <span class="text-14 text-secondary">{{ usedSize + ' / ' + totalSize }} </span>
        </div>
        <div class="p-[.25rem] bg-blue-100 rounded-16">
            <div class="p-[.5rem] rounded-16 bg-brand-500" :style="{ width: storagePercentage }">
                <!-- <div :style="{ width: storagePercentage + '%', transition: 'width 0.5s ease-in-out' }" -->
                <!-- class="core-transition-element w-0 h-[16px] bg-brand-500 rounded-16"></div> -->
            </div>
        </div>
        <div class="flex justify-end">
            <ButtonORNuxtLink :title="linkTitle" :link="link" no-icon inject-class="text-14 text-brand-500" />
        </div>
    </div>
</template>
  
<script>
import ButtonORNuxtLink from '~/components/ButtonORNuxtLink.vue';
export default {
    components: { ButtonORNuxtLink },
    props: {
        totalSize: {
            type: Number,
            default: 1,
        },
        usedSize: {
            type: Number,
            default: 0.3,
        },
        title: {
            type: String,
            default: "Storage",
        },
        linkTitle: {
            type: String,
            default: "Files Deleted",
        },
        link: {
            type: String,
            default: null,
        },
    },
    computed: {
        storagePercentage() {
            // Calculate the percentage based on usedSize and totalSize
            const percentage = (this.usedSize / this.totalSize) * 100 + "%";
            return percentage;
        },
    },
};
</script>
  
<style scoped>
.storage-size-transition .core-transition-element {
    animation: core-transition ease-in-out 0.5s;
}

@keyframes core-transition {
    0% {
        width: 0;
    }

    100% {
        width: inherit;
    }
}
</style>
  