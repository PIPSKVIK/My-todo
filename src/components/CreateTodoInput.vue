<template>
  <input
    class="todo-text"
    type="text"
    placeholder="Todo name"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'CreateTodoInput',
  props: ['value']
}
</script>

<style lang="scss" scoped>
.todo-text {
  width: 300px;
  color: black;
  padding: 10px 10px;
  font-size: 18px;
  line-height: 1;
  border: 2px solid black;
  background: transparent;
  border-radius: 15px;
  outline: none;
   &::placeholder {
     font-size: 12px;
     line-height: 1;
     font-weight: 400;
   }
   &:focus {
     border-color: blueviolet;
      &::placeholder {
        color: blueviolet;
      }
   }
}
</style>
