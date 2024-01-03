<template>
    <div class="rounded-base bg-white">
        <div class="flex gap-4 p-4">
            <div class="w-[40%] flex gap-4">
                <div>
                    <img class="w-32 h-32 rounded-full" :src="require('assets/img/profile-pic/profile-2.png')"
                        alt="profile">
                </div>
                <ul class="flex flex-col justify-center gap-1">
                    <li class="text-black font-semibold text-[1.1rem]">Melisa John</li>
                    <li class="text-color-grey">ID: 168</li>
                    <li class="profile-menu-active font-semibold">Student</li>
                </ul>
            </div>
            <div class="middle-line"></div>
            
            <div class="w-[50%]">
                <ul class="flex flex-col gap-4">
                    <li v-for="(item, index) in userInfos" :key="index" class="flex gap-3">
                        <div class="top-menu__icon ">
                            <span v-html="item.icon"></span>
                        </div>
                        <div class="text-color-secondary font-semibold text-[0.99rem]">{{ item.title }}</div>
                    </li>
                </ul>
            </div>
        </div>
        <nav class="border-t-[1px] mt-[1rem] border-[var(--border-color-base)]">
            <ul class="flex justify-evenly overflow-auto md:w-[50%] m-auto">
                <li v-for="(item, index) in userProfileMenus" :key="index" class="p-4">
                    <nuxt-link :to="item.path" :class="{ 'profile-menu-active': $route.path.includes(item.path) }">
                        {{ item.title }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    computed: {
        userInfos() {
            return [
                {
                    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
                    title: "chhivea@sala.co",
                },
                {
                    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
                    title: "+855 11 234 687",
                },
                {
                    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
                    title: "#190A, Str  19, Russey keo, Phnom Penh, Cambodia",
                },
            ]
        },
        userProfileMenus() {
            return [
                {
                    title: this.$t('Profile'),
                    path: this.localePath('/user-profile/profile'),
                    // icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
                },
                {
                    title: this.$t('Fee'),
                    path: this.localePath('/user-profile/fee'),
                    // icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
                },
                {
                    title: this.$t('Attendance'),
                    path: this.localePath('/user-profile/attendance'),
                    // icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
                },
                {
                    title: this.$t('Storage'),
                    path: this.localePath('/user-profile/storage'),
                    // icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="#0052D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
                },
            ]
        }
    }
}
</script>

<style scoped>
.profile-menu-active {
    color: var(--primary-color) !important;
}

.middle-line{
    min-height: 100%;
    width: 1px;
    background-color: var(--border-color-base);
    border-radius: 10rem;
}

.text-color-secondary{
    color: var(--text-color-secondary);
}

.rounded-base{
    border-radius: var(--border-radius-base);
}
</style>




