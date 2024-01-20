<template>
    <div class="flex flex-col gap-3">
        <h3 class="text-default">{{ title }}</h3>
        <ul class="flex flex-col gap-3">
            <li v-for="(item, index) in value" :key="index">
                <a-checkbox v-model="item.value" style="font-size: 1rem; color: #777474; width: 100%;">
                    {{ item.title }}
                </a-checkbox>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        value: {
            type: Array,
            default: null
        },
        title: {
            type: String,
            default: null
        }
    }
}
</script>
  