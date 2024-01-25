<template>
    <div class="p-4 rounded-8 bg-white flex flex-col gap-4">
        <div class="text-16 font-semibold flex justify-between">
            <span class="text-default">{{ title }}</span>
            <button class="flex justify-end">
                <div class="font-semibold text-brand-500">{{ link }}</div>
            </button>
            <!-- <ButtonORNuxtLink is-button no-icon :title="link" inject-class="font-semibold text-brand-500" /> -->
        </div>
        <ul class="flex flex-col gap-4">
            <li v-for="(item, index) in menus" :key="index"
                class="p-3 flex rounded-8 border border-default items-center justify-between">
                <div class="flex gap-3 items-center">
                    <LazyImage :src="item.img" class="h-[20px] w-[20px]" />
                    <span class="text-16 text-default">
                        {{ item.title }}
                    </span>
                </div>
                <div class="text-brand-500 text-14">
                    {{ item.usedSize + ' ' + sizeType }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import LazyImage from '../LazyImage.vue';
export default {
    components: { LazyImage },
    props: {
        sizeType: {
            type: String,
            default: 'GB'
        },
        link: {
            type: String,
            default: 'Type of files'
        },
        title: {
            type: String,
            default: 'All File'
        }, menus: {
            type: Array,
            default: null
        }
    }
}
</script>