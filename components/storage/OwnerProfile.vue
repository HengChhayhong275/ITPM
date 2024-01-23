<template>
    <div class="flex justify-between">
        <!-- wrap profile image into a like Cycle -->
        <div class="flex gap-3">
            <div class="h-[40px] w-[40px] overflow-hidden rounded-[1000px]">
                <LazyImage class="h-[40px] w-[fit-content]" :src="user.img" />
            </div>
            <div>
                <div class="text-default text-16 font-semibold">{{ user.firstName + ' ' + user.lastName }}</div>
                <div class="text-grey-75 text-14">{{ user.email }}</div>
            </div>
        </div>
        <div class="text-default text-16 font-semibold">{{ owner }}</div>
    </div>
</template>
<script>
import LazyImage from '../LazyImage.vue'
export default {
    components: { LazyImage }
    , props: {
        owner: {
            type: String,
            default: "Owner"
        },
        user: {
            type: Object,
            default: undefined
        }
    }
}
</script>