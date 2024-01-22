<template>
    <div class="flex gap-4">
        <div class="red min-w-[20rem]">
            <div class="blue">
                <StorageSize />
            </div>
            <div class="green">
                <FileType />
            </div>
        </div>
        <div class="pink">
            <div class="bg-blend-hue">
                <drive-option />
                <search-by />
            </div>
            <div class="bg-yellow-600">
                <nuxt />
            </div>
        </div>
    </div>
</template>
<script>
import DriveOption from '~/components/storage/DriveOption.vue'
import FileType from '~/components/storage/FileType.vue'
import SearchBy from '~/components/storage/SearchBy.vue'
import StorageSize from '~/components/storage/StorageSize.vue'
export default {
    components: { DriveOption, FileType, SearchBy, StorageSize }
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