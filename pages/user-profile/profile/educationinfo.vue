<template>
    <div class="space-y-10">
        <!-- Education Information -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-8 gap-6">
                <!-- Row 1 -->
                <div class="col-span-3 flex items-center">
                    <h1 class="text-xl pt-3 font-semibold">Personal Information</h1>
                </div>
                <div v-if="!editMode" class="col-span-1 flex justify-end">
                    <div class="edit-btn flex items-center cursor-pointer" @click="toggleEditMode">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <div class="text-xl ml-1">Edit</div>
                    </div>
                </div>
                <!-- Row 2 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Highschool</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Johny</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Highschool name">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Status</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Status">
                </div>
                <!-- Row 3 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Start year</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="number" class="w-full h-3/4 rounded-lg" placeholder="Please input your Start year">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">End year</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="number" class="w-full h-3/4 rounded-lg" placeholder="Please input your End year">
                </div>
                <!-- Row 4 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Graduate year</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="number" class="w-full h-3/4 rounded-lg" placeholder="Please input your Graduate year">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Grade</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Grade" @input="convertToUppercase">
                </div>
                <!-- Row 5 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Room Number</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="number" class="w-full h-3/4 rounded-lg" placeholder="Please input your Room number">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Seat Number</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="number" class="w-full h-3/4 rounded-lg" placeholder="Please input your Seat number">
                </div>
                <!-- Row 6 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Location</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Location">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Other number of Highschool Diploma :</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Other number of Highschool Diploma">
                </div>
                <!-- Row 7 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">University</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your University">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Institute</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Institute">
                </div>
                <!-- Row 8 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Technical School</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Technical School">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Other :</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Other">
                </div>
                <div class="col-span-4 mb-2">
                    <div class="buttons-container flex justify-end mt-4 space-x-3">
                        <button v-if="editMode" class="cancel-btn rounded-lg px-4 py-2 mr-2" @click="cancelEdit" >Cancel</button>
                        <button v-if="editMode" class="update-btn rounded-lg px-4 py-2">Update</button>
                    </div>
                </div>
                <!-- Add more rows as needed -->
            </div>
        </a-card>
        

    </div>
</template>
<script>
export default{
  name: 'PersonalInformation',
  data() {
    return {
      editMode: false,
    };
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    cancelEdit() {
      this.editMode = false;
    },
    convertToUppercase(event) {
      // Convert the entered text to uppercase
      event.target.value = event.target.value.toUpperCase();
    },
  },
}
  
</script>
<style scoped>
.edit-btn{
    color: #9ca3af;
    cursor: pointer;
    pointer-events: auto;
}
.radio-label {
    display: flex;
    align-items: center;
}

.larger-radio {
    transform: scale(1); /* Adjust the scale factor as needed */
    margin-right: 4px; /* Adjust the spacing between the radio button and the text */
}

.radio-text {
    display: inline-block;
    vertical-align: middle;
}
.edit-btn:hover{
    color: #2563eb;
}
.cancel-btn{
    color: #2563eb;
    border: 1px solid #2563eb;
}
.update-btn{
    color: white;
    background-color: #2563eb;
    border: 1px solid #2563eb;
}
</style>