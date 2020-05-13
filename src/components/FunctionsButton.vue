<template>
  <button type="button" class="create-toto__button"
    v-bind="$attrs"
    :value="value"
    v-on="inputListeners"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'FunctionsButton',
  props: ['label', 'value'],
  computed: {
    inputListeners () {
      return Object.assign({},
        this.$listeners,
        {
          input (event) {
            this.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.create-toto__button {
  padding: 12px 20px;
  background: transparent;
  border: 2px solid black;
  font-size: 18px;
  line-height: 1;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
    &:hover {
      border-color: blueviolet;
      color: blueviolet;
    }
    &:active {
      background: blueviolet;
      color: white;
    }
}
</style>
