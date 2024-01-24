<template>
    <div>
        <div class="p-4 flex justify-between items-center border-b border-default">
            <div class="text-20 text-default font-semibold">
                Files
            </div>
            <button class="btn bg-brand-500 "><span class="text-white">Upload New file or folder</span></button>
        </div>
        <ul class="flex gap-4 flex-wrap p-4">
            <li v-for="(item, index) in FileList" :key="index">
                <button>
                    <FileCard :item="item" />
                </button>
            </li>
        </ul>
        <!-- <FileOperationModal v-if="fileOperationModalIsOpen" /> -->
    </div>
</template>
<script>
import FileCard from '~/components/storage/FileCard.vue'
export default {
    components: { FileCard },
    data() {
        return {
        }
    },
    computed: {
        FileList() {
            return [
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
                {
                    title: "Some File",
                    img: "https://th.bing.com/th/id/OIP.Gr9WmeZ0U77p5tnENqgnYwHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    icon: ""
                },
            ]
        }
    }
}
</script>