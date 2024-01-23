<template>
    <div class="share-card-component">
        <a-space direction="vertical" class="w-full">
            <a-select v-model="localValue" class="w-full" :options="people" mode="multiple"
                :placeholder="placeholder"></a-select>
        </a-space>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: "Share with people by email or phone number"
        }, people: {
            type: Array,
            default: undefined
        }, value: {
            type: Object,
            default: undefined
        }
    },
    data() {
        return {
            localValue: undefined,
        }
    }, watch: {
        localValue(newVal) {
            this.$emit('input', this.localValue)
        }
    }
}
</script>
<style scoped>
.share-card-component>>>.ant-select-selection__rendered ul {
    max-width: 20rem;
}
</style>