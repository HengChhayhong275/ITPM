<template>
    <div class="flex gap-4">
        <div class="flex flex-col gap-4 min-w-[25rem]">
            <StorageSize link="view-deleted-file" />
            <FileType link="All Files" title="Type of files" :menus="fileList" />
        </div>
        <div class="flex flex-col gap-4">
            <div class="flex justify-between">
                <drive-option v-if="!$route.path.includes('/user-profile/storage/view-deleted-file')" :drives="drives" />
                <NuxtLinkButton v-else title="Files Deleted" link="/user-profile/storage" />
                <search-by has-filter />
            </div>
            <div class="rounded-16 bg-white">
                <nuxt />
            </div>
        </div>
    </div>
</template>
<script>
import NuxtLinkButton from '~/components/NuxtLinkButton.vue'
import DriveOption from '~/components/storage/DriveOption.vue'
import FileType from '~/components/storage/FileType.vue'
import SearchBy from '~/components/storage/SearchBy.vue'
import StorageSize from '~/components/storage/StorageSize.vue'
export default {
    components: { NuxtLinkButton, DriveOption, FileType, SearchBy, StorageSize },
    computed: {
        drives() {
            return [
                {
                    path: "/user-profile/storage/my-drive",
                    title: "Drive",
                    icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.59805 16.4006C3.15805 16.4006 2.78151 16.2441 2.46845 15.931C2.15485 15.6174 1.99805 15.2406 1.99805 14.8006V5.20059C1.99805 4.76059 2.15485 4.38405 2.46845 4.07099C2.78151 3.75739 3.15805 3.60059 3.59805 3.60059H7.73805C7.95138 3.60059 8.15485 3.64059 8.34845 3.72059C8.54151 3.80059 8.71138 3.91392 8.85805 4.06059L9.99805 5.20059H16.398C16.838 5.20059 17.2148 5.35739 17.5284 5.67099C17.8415 5.98405 17.998 6.36059 17.998 6.80059H5.19805C4.75805 6.80059 4.38151 6.95712 4.06845 7.27019C3.75485 7.58379 3.59805 7.96059 3.59805 8.40059V14.8006L5.17805 9.54059C5.28471 9.19392 5.48151 8.91712 5.76845 8.71019C6.05485 8.50379 6.37138 8.40059 6.71805 8.40059H17.038C17.5847 8.40059 18.0148 8.61712 18.3284 9.05019C18.6415 9.48379 18.7247 9.95392 18.578 10.4606L17.138 15.2606C17.0314 15.6073 16.8348 15.8841 16.5484 16.091C16.2615 16.2974 15.9447 16.4006 15.598 16.4006H3.59805Z"/></svg>`,
                },
                {
                    path: "/user-profile/storage/share-drive",
                    title: "Shared Drive",
                    // icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.59805 16.4006C3.15805 16.4006 2.78151 16.2441 2.46845 15.931C2.15485 15.6174 1.99805 15.2406 1.99805 14.8006V5.20059C1.99805 4.76059 2.15485 4.38405 2.46845 4.07099C2.78151 3.75739 3.15805 3.60059 3.59805 3.60059H7.73805C7.95138 3.60059 8.15485 3.64059 8.34845 3.72059C8.54151 3.80059 8.71138 3.91392 8.85805 4.06059L9.99805 5.20059H16.398C16.838 5.20059 17.2148 5.35739 17.5284 5.67099C17.8415 5.98405 17.998 6.36059 17.998 6.80059H5.19805C4.75805 6.80059 4.38151 6.95712 4.06845 7.27019C3.75485 7.58379 3.59805 7.96059 3.59805 8.40059V14.8006L5.17805 9.54059C5.28471 9.19392 5.48151 8.91712 5.76845 8.71019C6.05485 8.50379 6.37138 8.40059 6.71805 8.40059H17.038C17.5847 8.40059 18.0148 8.61712 18.3284 9.05019C18.6415 9.48379 18.7247 9.95392 18.578 10.4606L17.138 15.2606C17.0314 15.6073 16.8348 15.8841 16.5484 16.091C16.2615 16.2974 15.9447 16.4006 15.598 16.4006H3.59805Z" fill="blue"/></svg>`,
                    icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.59805 16.4006C3.15805 16.4006 2.78151 16.2441 2.46845 15.931C2.15485 15.6174 1.99805 15.2406 1.99805 14.8006V5.20059C1.99805 4.76059 2.15485 4.38405 2.46845 4.07099C2.78151 3.75739 3.15805 3.60059 3.59805 3.60059H7.73805C7.95138 3.60059 8.15485 3.64059 8.34845 3.72059C8.54151 3.80059 8.71138 3.91392 8.85805 4.06059L9.99805 5.20059H16.398C16.838 5.20059 17.2148 5.35739 17.5284 5.67099C17.8415 5.98405 17.998 6.36059 17.998 6.80059H5.19805C4.75805 6.80059 4.38151 6.95712 4.06845 7.27019C3.75485 7.58379 3.59805 7.96059 3.59805 8.40059V14.8006L5.17805 9.54059C5.28471 9.19392 5.48151 8.91712 5.76845 8.71019C6.05485 8.50379 6.37138 8.40059 6.71805 8.40059H17.038C17.5847 8.40059 18.0148 8.61712 18.3284 9.05019C18.6415 9.48379 18.7247 9.95392 18.578 10.4606L17.138 15.2606C17.0314 15.6073 16.8348 15.8841 16.5484 16.091C16.2615 16.2974 15.9447 16.4006 15.598 16.4006H3.59805Z"/></svg>`,

                },
            ]
        },
        fileList() {
            return [
                {
                    title: 'Documents',
                    img: "~/assets/img/logos/FinancePartner/Amk-logo.jpg",
                    usedSize: '0.5'
                },
                {
                    title: 'Documents',
                    img: '~/assets/img/logos/FinancePartner/Amk-logo.jpg',
                    usedSize: '0.5'
                },
                {
                    title: 'Documents',
                    img: '~/assets/img/logos/FinancePartner/Amk-logo.jpg',
                    usedSize: '0.5'
                },
                {
                    title: 'Documents',
                    img: '~/assets/img/logos/FinancePartner/Amk-logo.jpg',
                    usedSize: '0.5'
                },
                {
                    title: 'Documents',
                    img: '~/assets/img/logos/FinancePartner/Amk-logo.jpg',
                    usedSize: '0.5'
                },
            ]
        }
    }
}

</script>

<style scoped>
.red {
    background-color: red;
}

.blue {
    background-color: blue;
}

.green {
    background-color: green;
}

.pink {
    background-color: pink;
}
</style>