<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="rounded-16 border border-default overflow-hidden relative">
        <div class="file-card-z  p-2 absolute w-full h-full z-10 hover:bg-black hover:bg-[rgb(0,0,0,.50)]">
            <ul class="file-card-operation  flex gap-2 justify-end hidden z-50">
                <li v-for="(prop, index) in fileOperations" :key="index">
                    <button class="top-menu__icon rounded-8 bg-white p-2 " @click="handleFileOperations(prop)">
                        <div v-html="prop.icon"></div>
                    </button>
                </li>
            </ul>
        </div>
        <div>
            <!-- <img style="height: 122px; width: 291px; object-fit: cover; overflow: hidden;" :src="item.img"> -->
            <LazyImage class="w-[291px] h-[122px] object-cover " :src="item.img" />
        </div>
        <div class="p-4 flex  gap-3 text-default text-14">
            <div v-html="item.icon"></div>
            <div>{{ item.title }}</div>
        </div>
        <ShareModal v-if="openShareModal" @cancel="openShareModal = false" @done="openShareModal = false" />
    </div>
    <!-- class="file-card-z p-2 absolute w-full h-full z-10 transition duration-300 ease-in-out delay-75 hover:bg-black hover:opacity-50" -->
</template>

<script>
import LazyImage from '../LazyImage.vue';
import ShareModal from './ShareModal.vue';
export default {
    components: { LazyImage, ShareModal },
    props: {
        item: {
            type: Object,
            default: null
        },
    }, data() {
        return {
            openShareModal: false,
        }
    }, computed: {
        operationType() {
            return {
                share: "share",
                download: 'dowload',
                moveToTrash: "moveToTrash"
            }
        },
        fileOperations() {
            return [
                {
                    operation: this.operationType.share,
                    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5C12 5.12548 12.0077 5.24917 12.0227 5.37061L7.08259 7.84064C6.54303 7.32015 5.8089 7 5 7C3.34315 7 2 8.34315 2 10C2 11.6569 3.34315 13 5 13C5.80892 13 6.54306 12.6798 7.08263 12.1593L12.0227 14.6293C12.0077 14.7508 12 14.8745 12 15C12 16.6569 13.3431 18 15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C14.1911 12 13.457 12.3201 12.9174 12.8406L7.97733 10.3706C7.9923 10.2492 8 10.1255 8 10C8 9.8745 7.99229 9.7508 7.97733 9.62934L12.9174 7.15932C13.4569 7.67984 14.1911 8 15 8Z" fill="#777474"/></svg>`,
                    title: 'share'
                },
                {
                    operation: this.operationType.download,
                    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5L5 5V15H15V5H14C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5Z" fill="#777474"/><path d="M4 12H7L8 14H12L13 12H16V16H4V12Z" fill="#777474"/><path d="M7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L9 7.58579V3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 7.58579L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289C13.0976 7.68342 13.0976 8.31658 12.7071 8.70711L10.7071 10.7071C10.5196 10.8946 10.2652 11 10 11C9.73478 11 9.48043 10.8946 9.29289 10.7071L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289Z" fill="#777474"/></svg>`,
                    title: 'download'
                }, {
                    operation: this.operationType.moveToTrash,
                    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z" fill="#777474"/></svg>`,
                    title: 'move to trash'
                },
            ]
        }
    }, methods: {
        handleFileOperations(item) {
            // alert('You Click ' + item.title)
            if (item.operation === this.operationType.download) {
                alert("cliker on dowload")
            } else if (item.operation === this.operationType.share) {
                this.openShareModal = true;
            } else if (item.operation === this.operationType.moveToTrash) {
                alert("click on delete")

            }

        }
    }
}

</script>
<style scoped>
.file-card-z:hover .file-card-operation {
    display: flex;
}
</style>