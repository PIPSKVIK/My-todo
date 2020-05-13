<template>
  <button class="button" type="button">
    <slot>
      Button
    </slot>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss">
.button {
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid blue;
  padding: 5px 15px;
  color: black;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  background: transparent;
  outline: none;
    &:hover {
      border: 2px solid blue;
      color: blue;
    }
    &:active {
      background: blue;
      color: white;
    }
}
</style>
