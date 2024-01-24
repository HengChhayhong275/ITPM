<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <ul class="flex gap-6">
            <li v-for="(item, index) in drives" :key="index"
                :class="{ 'drive-option-menu-active': $route.path.includes(item.path) }"
                class="py-2 px-4 w-[11rem] rounded-8 bg-white">
                <nuxt-link :to="item" class="flex items-center gap-3">
                    <div class="p-2 w-[fit-content] rounded-[1000px]" :class="{ 'bg-blue-100': $route.path.includes(item.path) }" v-html="item.icon">
                    </div>
                    <div class="font-semibold text-16">{{ item.title }}</div>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        // active: {
        //     type: Boolean,
        //     default: false
        // },
        drives: {
            type: Array,
            default: null
        }
    },
    computed: {

    }
}
</script>
<style scoped>
.drive-option-menu-active *{
    color: var(--primary-color);
}

.drive-option-menu-active>>>svg {
    fill: var(--primary-color);
}
</style>