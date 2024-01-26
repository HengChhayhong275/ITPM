<template>
    <div>
        <h2 class="pl-5">Filter the Time Period</h2>
        <div class="container mx-auto px-4 py-5 rounded-18 space-x-5 bg-white flex flex-wrap  ">
            <!-- <div class="flex-grow">
                <div class="flex flex-row"> -->
                    <div class="flex-grow">
                        <h2 class="text-lg font-bold mb-2">Year Selection<span class="text-red-600">*</span></h2>
                        <select class="border rounded-md focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500 block w-full p-2.5">
                            <option value="" disabled selected hidden>Please select your year</option>
                            <option value="year1">Year1</option>
                            <option value="year2">Year2</option>
                            <option value="year3">Year3</option>
                            <option value="year4">Year4</option>
                            <option value="year5">Year5</option>
                        </select>
                    </div>
                    <div class="flex-grow mt-4 md:mt-0">
                        <h2 class="text-lg font-bold mb-2">Semester Selection*</h2>
                        <select class="border rounded-md focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500 block w-full p-2.5">
                            <option value="" disabled selected hidden>Please select your semester</option>
                            <option value="semester1">Semester1</option>
                            <option value="semester2">Semester2</option>
                        </select>
                    </div>
                    <div class="flex-grow mt-4 md:mt-0">
                        <h2 class="text-lg font-bold mb-2">Subject Selection</h2>
                        <select class="border rounded-md focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500 block w-full p-2.5">
                            <option value="" disabled selected hidden>Please select your subject</option>
                            <option value="history">History</option>
                            <option value="math">Math</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                        </select>
                    </div>
                <!-- </div>
            </div> -->
            <div class="mt-8 buttons">
                <button type="button" class="inline-flex  px-4 py-2.5 bg-grey-75 font-bold rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500 active:bg-blue-800">
                    Apply Now
                </button>
            </div>
        </div>
        <section>
            <h2 class="pl-5 pt-5">Score Table</h2>
            <div class="container mx-auto px-4 py-5 h-screen rounded-18 space-x-5 bg-white flex justify-center items-center text-grey-75 ">
                <p class="text-26">No data to show. please select filter</p>
            </div>
        </section>
    </div>
</template>
<style scoped>
.buttons{
    color: white !important;
}
h2{
    color: rgba(119, 116, 116, 0.8) !important;
}
</style>
