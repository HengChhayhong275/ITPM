<template>
    <div>
        <ul class="font-semibold text-white text-18 flex flex-wrap justify-center gap-4">
            <li v-for="(item, index) in menus" :key="index">
                <div class="relative flex justify-center items-center w-[20rem] h-[8rem] rounded-16"
                    :style="{ backgroundColor: item.color }">
                    <div class="absolute left-4 top-4">{{ item.title }}</div>
                    <div class="text-24">{{ item.value }}</div>
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