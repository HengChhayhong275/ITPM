<template>
    <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal rounded-18"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <header id="modalTitle"
        class="modal-header">
          <slot name="header">
            This is the default title!
          </slot>
          <button
            type="button"
            class="btn-close"
            aria-label="Close modal"
            @click="close"
          >
            x
          </button>
        </header>
  
        <section
        id="modalDescription" class="modal-body">
          <slot name="body">
            This is the default body!
          </slot>
         </section>
  
        <!-- <footer class="modal-footer">
          <slot name="footer">
            This is the default footer!
          </slot>
          <button
            type="button"
            class="btn-green"
            aria-label="Close modal"
            @click="close"
          >
            Close Modal
          </button>
        </footer> -->
      </div>
    </div>
</transition>
  </template>
  <script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #fff;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 650px;
    height: 550px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 40px !important;
    padding: 0 15px 0 0;
    cursor: pointer;
    font-weight: 400;
    color: black !important;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>