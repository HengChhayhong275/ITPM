<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <ul class="flex gap-6">
            <li v-for="(item, index) in drives" :key="index" class="py-2 px-4 w-[11rem] rounded-8 bg-white flex items-center gap-3">
                <div class="p-2 w-[fit-content] rounded-[1000px] bg-blue-100" v-html="item.icon"></div>
                <div class="text-brand-500 font-semibold text-16">{{ item.title }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: false
        },
        drives: {
            type: Array,
            default: null
        }
    },
    computed: {

    }
}
</script>