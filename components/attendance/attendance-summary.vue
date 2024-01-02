<template>
    <div>
        <ul class="flex flex-wrap justify-between gap-4">
            <li v-for="(item, index) in menus" :key="index">
                <div class="relative flex justify-center items-center w-[20rem] h-[8rem] rounded-[1rem] font-semibold text-white"
                    :style="{ backgroundColor: item.color }">
                    <div class="absolute left-4 top-4">{{ item.title }}</div>
                    <div class="text-[24px]">{{ item.value }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    props: {
        menus: {
            type: Array,
            default: null,
        },
    },
}
</script>