<template>
  <div class="pagination-component flex justify-between">
    <div v-if="showItemSummary">
      {{ currentPageItem_start + " - " + currentPageItem_end + " items out of " + total + " items" }}
    </div>
    <a-pagination v-model="localValue" show-quick-jumper :total="total" @change="handleLocalValueChange" />
  </div>
</template>

<script>
export default {
  props: {
    showItemSummary: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      localValue: this.value
    }
  },
  computed: {
    currentPageItem_start() {
      return this.pageSize * (this.localValue - 1) + 1
    },
    currentPageItem_end() {
      return this.pageSize * this.localValue + 1
    }
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
    localValue(newLocalValue) {
      this.$emit('input', newLocalValue);
    }
  },
  methods: {
    handleLocalValueChange(newLocalValue) {
      this.localValue = newLocalValue;
    }
  }
}
</script>

<style scoped>

.pagination-component >>> .ant-pagination-item-link{
  border: none !important;
  background-color: inherit !important;
  color: black;
}
.pagination-component >>> .ant-pagination-item{
  border: none;
  background-color: inherit;
}
.pagination-component >>> .ant-pagination-item-active{
  border-radius: 18px;
  background-color: var(--primary-color);
}

.pagination-component >>> .ant-pagination-item-active a{
  color: white;
}
</style>