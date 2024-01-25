<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="search-by-component flex gap-4 h-[fit-content]">
        <div v-if="hasFilter">
            <button class="p-[.58rem] rounded-8 bg-white">
                <div v-html="filterIcon"></div>
            </button>
        </div>
        <div class="p-2 w-[18rem] rounded-8 bg-white text-default items-center text-secondary flex text-16 gap-3">
            <div v-html="searchIcon"></div>
            <input v-model="localValue" :placeholder="title" class="w-full" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        hasFilter: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'Search by name or extension'
        },
        filterIcon: {
            type: String,
            default: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5704 8.50526H27.7388M11.5704 15.5789H27.7388M11.5704 22.6526H27.7388M5.50722 8.50526H5.51665V8.51604H5.50722V8.50526ZM6.01248 8.50526C6.01248 8.63927 5.95925 8.76778 5.86449 8.86254C5.76974 8.95729 5.64122 9.01053 5.50722 9.01053C5.37321 9.01053 5.2447 8.95729 5.14994 8.86254C5.05519 8.76778 5.00195 8.63927 5.00195 8.50526C5.00195 8.37126 5.05519 8.24274 5.14994 8.14799C5.2447 8.05323 5.37321 8 5.50722 8C5.64122 8 5.76974 8.05323 5.86449 8.14799C5.95925 8.24274 6.01248 8.37126 6.01248 8.50526ZM5.50722 15.5789H5.51665V15.5897H5.50722V15.5789ZM6.01248 15.5789C6.01248 15.713 5.95925 15.8415 5.86449 15.9362C5.76974 16.031 5.64122 16.0842 5.50722 16.0842C5.37321 16.0842 5.2447 16.031 5.14994 15.9362C5.05519 15.8415 5.00195 15.713 5.00195 15.5789C5.00195 15.4449 5.05519 15.3164 5.14994 15.2217C5.2447 15.1269 5.37321 15.0737 5.50722 15.0737C5.64122 15.0737 5.76974 15.1269 5.86449 15.2217C5.95925 15.3164 6.01248 15.4449 6.01248 15.5789V15.5789ZM5.50722 22.6526H5.51665V22.6634H5.50722V22.6526ZM6.01248 22.6526C6.01248 22.7866 5.95925 22.9152 5.86449 23.0099C5.76974 23.1047 5.64122 23.1579 5.50722 23.1579C5.37321 23.1579 5.2447 23.1047 5.14994 23.0099C5.05519 22.9152 5.00195 22.7866 5.00195 22.6526C5.00195 22.5186 5.05519 22.3901 5.14994 22.2954C5.2447 22.2006 5.37321 22.1474 5.50722 22.1474C5.64122 22.1474 5.76974 22.2006 5.86449 22.2954C5.95925 22.3901 6.01248 22.5186 6.01248 22.6526Z" stroke="#0052D4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        },
        searchIcon: {
            type: String,
            default: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z" stroke="#777474" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        }, value: {
            type: String,
            default: undefined,
        }
    },
    data() {
        return {
            localValue: undefined
        }
    },
    watch: {
        value(newVal) {
            this.localValue = newVal
        }, localValue(newVal) {
            this.$emit('input', newVal)
        }
    }
}
</script>
<style scoped>
.search-by-component input::placeholder {
    color: rgba(119, 116, 116, 0.5);
}

.search-by-component input:focus {
    outline: none;
}
</style>