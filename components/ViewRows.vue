<!-- eslint-disable no-console -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div>
    </div>
    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link" @click.prevent>
        <div class="flex gap-2 p-4 py-2 text-18 text-default border-2 border-DEFAULT rounded-8">
          <span v-html="eyeIcon"></span>
          {{ `View for ${localValue} rows` }}
        </div>
      </a>
      <template #overlay>
        <div class="rounded-16 bg-white overflow-hidden shadow-md">
          <a-radio-group v-model="localValue" class="ant-radio-group-custom" name="radioGroup"
            @change="handleValueChange">
            <a-radio v-for="(item, index) in menus" :key="index" :value="item.value"
              class="text-default ant-radio-custom">
              {{ `View for ${item.value} rows` }}
            </a-radio>
          </a-radio-group>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    menus: {
      type: Array,
      require: true,
      default: null
    }
  },
  data() {
    return {
      localValue: this.value
    }
  },
  computed: {
    eyeIcon() {
      return ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <path    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"    stroke="#777474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />  <path    d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.2684 16.0571 16.4781 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12Z"    stroke="#777474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`
    }
  },
  // value(newVal) {
  //   this.localValue = newVal;
  // },

  methods: {
    handleValueChange() {
      // Emit the value when the radio group value changes and can interact using v-model
      this.$emit('input', this.localValue);
    },
  }
}
</script>
<style scoped>
/*
 this is considered bad practice to override the CSS using !importance
 currently, could not find a way to make the style work on the above ant design element 
 so the last choice is to override those styles in scope of the file
 */

.ant-radio-custom {
  width: 100% !important;
  font-size: 18px !important;
  padding-left: 1rem !important;
  padding-top: .7rem !important;
  padding-bottom: .7rem !important;
  display: flex !important;
  align-items: center !important;
  font-weight: 500 !important;
  border-bottom: 1px solid var(--border-color-base);
}

.ant-radio-group-custom {
  display: flex !important;
  flex-direction: column !important;
}
</style>
