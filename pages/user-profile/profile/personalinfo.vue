<template>
    <div class="space-y-10">
        <!-- Personal Information -->
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
                    <label class="block text-lg font-medium text-gray-400">Last Name</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Doe</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Lastname">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">First Name</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">John</p>
                    <input  v-if="editMode" type="text" class="w-full h-3/4 rounded-lg" placeholder="Please input your Firstname">
                </div>
                <!-- Row 3 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Email</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Ronaldo@gmail.com</p>
                    <input  v-if="editMode" type="email" class="w-full h-3/4 rounded-lg" placeholder="Please input your email">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Phone Number</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">012888888</p>
                    <input  v-if="editMode" type="tel" class="w-full h-3/4 rounded-lg" placeholder="Please input your phonenumber">
                </div>
                <!-- Row 4 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Date Of Birth</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">11/11/2011</p>
                    <input  v-if="editMode" type="date" class="w-full h-3/4 rounded-lg" placeholder="DD/MM/YY">
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Current Studies</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Computer Scient</p>
                    <select v-if="editMode" class="w-full h-3/4 rounded-lg">
                        <option value="" disabled selected hidden>Major or Field you're enrolling in</option>
                        <option value="computer_science">Computer Science</option>
                        <option value="other_study">Other Study</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                <!-- Row 5 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Gender</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Male</p>
                    <div v-if="editMode" class="flex items-center space-x-4 mt-3">
                        <label class="radio-label">
                            <input type="radio" name="gender" value="male" class="larger-radio">
                            Male
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="gender" value="female" class="larger-radio">
                            Female
                        </label>
                        <!-- Add more radio buttons if needed -->
                    </div>
                </div>
                <!-- Add more rows as needed -->
                <!-- Row 6 -->
                <div class="col-span-4 mb-2">
                    <div class="buttons-container flex justify-end mt-4 space-x-3">
                        <button v-if="editMode" class="cancel-btn rounded-lg px-4 py-2 mr-2" @click="cancelEdit" >Cancel</button>
                        <button v-if="editMode" class="update-btn rounded-lg px-4 py-2">Update</button>
                    </div>
                </div>
            </div>
        </a-card>
        <!-- Additional Information -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-3 gap-6">

                <!-- Row 1 -->
                <div class="col-span-3 flex items-center">
                    <h1 class="text-xl pt-3 font-semibold">Additional Information</h1>
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
                    <label class="block text-lg font-medium text-gray-400">Degree</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Bachelor's</p>
                    <select v-if="editMode" class="w-full h-3/4 rounded-lg">
                        <option value="" disabled selected hidden>Please select your degree</option>
                        <option value="associate">Associate</option>
                        <option value="bachelor">Bachelor's</option>
                        <option value="master">Master's</option>
                        <option value="docteral">Docteral</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Study Shift</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Evening</p>
                    <select v-if="editMode" class="w-full h-3/4 rounded-lg">
                        <option value="" disabled selected hidden>Please select your shift</option>
                        <option value="mroning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                <!-- Row 3 -->
                <div class="col-span-2 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Telegram<span v-if="editMode"> (Optional)</span></label>
                    <p v-if="!editMode" class="text-lg text-gray-900">--</p>
                    <input  v-if="editMode" type="number" class="w-full h-3/4 rounded-lg" placeholder="Please select your degree">
                </div>
                <!-- Row 4 -->
                <div class="col-span-4 mb-2">
                    <div class="buttons-container flex justify-end mt-4 space-x-3">
                        <button v-if="editMode" class="cancel-btn rounded-lg px-4 py-2 mr-2" @click="cancelEdit" >Cancel</button>
                        <button v-if="editMode" class="update-btn rounded-lg px-4 py-2">Update</button>
                    </div>
                </div>
            </div>
        </a-card>
        <!-- Address -->
        <a-card class="shadow" style="width: 100%; border-radius: 16px;">
            <div class="grid grid-cols-4 grid-rows-3 gap-6">

                <!-- Row 1 -->
                <div class="col-span-3 flex items-center">
                    <h1 class="text-xl pt-3 font-semibold">Address</h1>
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
                <div class="col-span-4 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Current Address</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">#190A, Str  19, Russey keo, Phnom Penh, Cambodia</p>
                    <input  v-if="editMode" type="number" class="w-full h-3/4 rounded-lg" placeholder="Please select your degree">
                </div>
                <!-- Row 3 -->
                <div class="col-span-4 mb-2">
                    <label class="block text-lg font-medium text-gray-400">Birth Address</label>
                    <p v-if="!editMode" class="text-lg text-gray-900">Takhmau</p>
                    <input  v-if="editMode" type="number" class="w-full h-3/4 rounded-lg" placeholder="Please select your degree">
                </div>
                <!-- Row 4 -->
                <div class="col-span-4 mb-2">
                    <div class="buttons-container flex justify-end mt-4 space-x-3">
                        <button v-if="editMode" class="cancel-btn rounded-lg px-4 py-2 mr-2" @click="cancelEdit" >Cancel</button>
                        <button v-if="editMode" class="update-btn rounded-lg px-4 py-2">Update</button>
                    </div>
                </div>
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
select option {
  background-color: white; /* Sets the background color to white */
}
select option[value="computer_science"] {
  background-color: #f0f0f0; /* Light gray background for Computer Science option */
}
</style>