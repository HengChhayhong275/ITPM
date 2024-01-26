<template>
    <div class="space-y-10">
        <!-- Guardian’s Information -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-5 gap-6">
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
                    <label class="block text-lg font-medium text-gray-400">Guardian’s Name</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Johny</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Guardain's name">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Date of Birth</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">23/09/2000</p>
                    <input  v-if="editMode" type="date" class="w-full h-3/4 rounded-lg" placeholder="DD/MM/YY">
                </div>
                <!-- Row 3 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Nationality</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Khmer</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your nationality">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Race</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Khmer</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Race">
                </div>
                <!-- Row 4 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Phone Number</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">023880880</p>
                    <input  v-if="editMode" type="tel" class="w-full h-3/4 rounded-lg" placeholder="Please input your Phonenumber">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Career and Workplace</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Gamer, Killer</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Career and Workplace">
                </div>
                <!-- Row 5 -->
                <div v-if="!editMode" class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Address</label>
                    <p class="text-lg text-gray-900">House No, Street No, Village, District, City, Country</p>
                </div>
                <div v-if="editMode" class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Role</label>
                    <input type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Role">
                </div>
                <div v-if="editMode" class="col-span-2 mb-2">
                </div>
                <!-- Row 6 -->
                <div v-if="!editMode" class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Role</label>
                    <p class="text-lg text-gray-900">Married</p>
                </div>
                <div v-if="editMode" class="col-span-4 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Address</label>
                    <textarea class="w-full h-3/4 rounded-lg" placeholder="Please input your Address"></textarea>
                </div>
                <!-- Row 7 -->
                <div class="col-span-4 mb-2">
                    <div class="buttons-container flex justify-end mt-4 space-x-3">
                        <button v-if="editMode" class="cancel-btn rounded-lg px-4 py-2 mr-2" @click="cancelEdit" >Cancel</button>
                        <button v-if="editMode" class="update-btn rounded-lg px-4 py-2">Update</button>
                    </div>
                </div>
                <!-- Add more rows as needed -->
            </div>
        </a-card>
        <!-- Father Information -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-5 gap-6">
                <!-- Row 1 -->
                <div class="col-span-3 flex items-center">
                    <h1 class="text-xl pt-3 font-semibold">Father's Information</h1>
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
                    <label class="block text-lg font-medium text-gray-400">Father's Name</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Johny</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Father's name">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Date of Birth</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">23/09/2000</p>
                    <input  v-if="editMode" type="date" class="w-full h-3/4 rounded-lg" placeholder="DD/MM/YY">
                </div>
                <!-- Row 3 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Nationality</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Khmer</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your nationality">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Race</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Khmer</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Race">
                </div>
                <!-- Row 4 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Phone Number</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">023880880</p>
                    <input  v-if="editMode" type="tel" class="w-full h-3/4 rounded-lg" placeholder="Please input your Phonenumber">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Career and Workplace</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Gamer, Killer</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Career and Workplace">
                </div>
                <!-- Row 5 -->
                <div v-if="editMode" class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Died or Alive</label>
                    <div class="flex items-center space-x-10 mt-3">
                        <label class="radio-label">
                            <input type="radio" name="gender" value="died" class="larger-radio">
                                <span>Died</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="gender" value="alive" class="larger-radio">
                                <span>Alive</span>
                        </label>
                    </div>
                </div>
                <div v-if="editMode" class="col-span-2 mb-2">
                </div>
                <!-- Row 6 -->
                <div v-if="!editMode" class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Deceived or Alive</label>
                    <p class="text-lg text-gray-900">Alive</p>
                </div>
                <div v-if="editMode" class="col-span-4 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Address</label>
                    <textarea class="w-full h-3/4 rounded-lg" placeholder="Please input your Address"></textarea>
                </div>
                <!-- Row 7 -->
                <div class="col-span-4 mb-2">
                    <div class="buttons-container flex justify-end mt-4 space-x-3">
                        <button v-if="editMode" class="cancel-btn rounded-lg px-4 py-2 mr-2" @click="cancelEdit" >Cancel</button>
                        <button v-if="editMode" class="update-btn rounded-lg px-4 py-2">Update</button>
                    </div>
                </div>
                <!-- Add more rows as needed -->
            </div>
        </a-card>
        <!-- Mother Information -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-5 gap-6">
                <!-- Row 1 -->
                <div class="col-span-3 flex items-center">
                    <h1 class="text-xl pt-3 font-semibold">Mother's Information</h1>
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
                    <label class="block text-lg font-medium text-gray-400">Mother's Name</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Johny</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Mother's name">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Date of Birth</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">23/09/2000</p>
                    <input  v-if="editMode" type="date" class="w-full h-3/4 rounded-lg" placeholder="DD/MM/YY">
                </div>
                <!-- Row 3 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Nationality</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Khmer</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your nationality">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Race</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Khmer</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Race">
                </div>
                <!-- Row 4 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Phone Number</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">023880880</p>
                    <input  v-if="editMode" type="tel" class="w-full h-3/4 rounded-lg" placeholder="Please input your Phonenumber">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Career and Workplace</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Gamer, Killer</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Career and Workplace">
                </div>
                <!-- Row 5 -->
                <div v-if="editMode" class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Died or Alive</label>
                    <div class="flex items-center space-x-10 mt-3">
                        <label class="radio-label">
                            <input type="radio" name="gender" value="died" class="larger-radio">
                                <span>Died</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="gender" value="alive" class="larger-radio">
                                <span>Alive</span>
                        </label>
                    </div>
                </div>
                <div v-if="editMode" class="col-span-2 mb-2">
                </div>
                <!-- Row 6 -->
                <div v-if="!editMode" class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Deceived or Alive</label>
                    <p class="text-lg text-gray-900">Alive</p>
                </div>
                <div v-if="editMode" class="col-span-4 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Address</label>
                    <textarea class="w-full h-3/4 rounded-lg" placeholder="Please input your Address"></textarea>
                </div>
                <!-- Row 7 -->
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
.cancel-btn:hover{
    background-color: #2563eb;
    color: white;
}
.update-btn:hover{
    color: #2563eb;
    background-color: white;
}
div{
    font-size: 18px;
}
</style>