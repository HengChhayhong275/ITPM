<template>
    <div class="space-y-10">
        <!-- Personal Information -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-5 gap-6">
                <!-- Row 1 -->
                <div class="col-span-3 flex items-center">
                    <h1 class="text-xl font-semibold">Personal Information</h1>
                </div>
                <div class="edit-btn col-span-1 flex justify-end items-center -mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <a class="ml-1 text-xl">Edit</a>
                </div>
                <!-- Row 2 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Last Name</label>
                    <p class="text-lg text-gray-900">Doe</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">First Name</label>
                    <p class="text-lg text-gray-900">John</p>
                </div>
                <!-- Row 3 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Email</label>
                    <p class="text-lg text-gray-900">Ronaldo@gmail.com</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Phone Number</label>
                    <p class="text-lg text-gray-900">012888888</p>
                </div>
                <!-- Row 4 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Date Of Birth</label>
                    <p class="text-lg text-gray-900">11/11/2011</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Current Studies</label>
                    <p class="text-lg text-gray-900">Computer Scient</p>
                </div>
                <!-- Row 5 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Gender</label>
                    <p class="text-lg text-gray-900">Male</p>
                </div>
                <!-- Add more rows as needed -->
            </div>
        </a-card>
        <!-- Additional Information -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-3 gap-6">

                <!-- Row 1 -->
                <div class="col-span-3 flex items-center">
                    <h1 class="text-xl font-semibold">Additional Information</h1>
                </div>
                <div class="edit-btn col-span-1 flex justify-end items-center -mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <a class="ml-1 text-xl">Edit</a>
                </div>
                <!-- Row 2 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Degree</label>
                    <p class="text-lg text-gray-900">Bachelor's</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Study Shift</label>
                    <p class="text-lg text-gray-900">Evening</p>
                </div>
                <!-- Row 3 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Telegram</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>

            </div>
        </a-card>
        <!-- Address -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-3 gap-6">

                <!-- Row 1 -->
                <div class="col-span-3 flex items-center">
                    <h1 class="text-xl font-semibold">Address</h1>
                </div>
                <div class="edit-btn col-span-1 flex justify-end items-center -mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <a class="ml-1 text-xl">Edit</a>
                </div>
                <!-- Row 2 -->
                <div class="col-span-4">
                    <label class="block text-lg font-medium text-gray-400">Current Address</label>
                    <p class="text-lg text-gray-900">#190A, Str  19, Russey keo, Phnom Penh, Cambodia</p>
                </div>
                <!-- Row 3 -->
                <div class="col-span-4">
                    <label class="block text-lg font-medium text-gray-400">Birth Address</label>
                    <p class="text-lg text-gray-900">Takhmau</p>
                </div>
               
            </div>
        </a-card>
    </div>
</template>
<script></script>
<style scoped>
.edit-btn > a{
    color: #2563eb;
}
.edit-btn > svg{
    color: #2563eb;
}
</style>