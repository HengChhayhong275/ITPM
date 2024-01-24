<template>
    <div class="bg-[rgba(0,0,0,.5)] w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-[100]">
        <ul class="flex flex-col gap-4 rounded-lg bg-white p-8">
            <li class="text-2xl font-semibold">People with access</li>
            <li>
                <OwnerProfile :user="user" class="w-[30rem]" />
            </li>
            <li class="py-2">
                <SelectToShare v-model="selectedPeople" :people="people" />
            </li>
            <li class="flex justify-end gap-4">
                <button class="btn border-brand-500" @click="$emit('cancel')"><span class="text-brand-500">Cancel</span></button>
                <button class="btn bg-brand-500 " @click="$emit('done')"><span class="text-white">Share</span></button>
            </li>
        </ul>
    </div>
</template>

<script>
import SelectToShare from './SelectToShare.vue';
import OwnerProfile from '~/components/storage/OwnerProfile.vue';
export default {
    components: { OwnerProfile, SelectToShare },
    data() {
        return {
            selectedPeople: undefined,
            people: [
                {
                    label: "wertyuqqqqqqqqqqqqqqqs",
                    value: "dfweghj@drtyui.com",
                    img: "ertyui",
                },
            ],
            user: {
                email: "random.user@gmail.com",
                img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                , firstName: 'Super',
                lastName: "Guy"
            }
        }
    }
}   
</script>