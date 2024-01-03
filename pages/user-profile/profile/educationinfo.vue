<template>
    <div class="space-y-10">
        <!-- Education Information -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-8 gap-6">
                <!-- Row 1 -->
                <div class="col-span-3 flex items-center">
                    <h1 class="text-xl font-semibold">Education Information</h1>
                </div>
                <div class="edit-btn col-span-1 flex justify-end items-center -mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <a class="ml-1 text-xl">Edit</a>
                </div>
                <!-- Row 2 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Highschool</label>
                    <p class="text-lg text-gray-900">Johny</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Status</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <!-- Row 3 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Start year</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">End year</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <!-- Row 4 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Graduate year</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Grade</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <!-- Row 5 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Room Number</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Seat Number</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <!-- Row 6 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Location</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Other number of Highschool Diploma :</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <!-- Row 7 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">University</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Institute</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <!-- Row 8 -->
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Technical School</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <div class="col-span-2">
                    <label class="block text-lg font-medium text-gray-400">Other :</label>
                    <p class="text-lg text-gray-900">--</p>
                </div>
                <!-- Add more rows as needed -->
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