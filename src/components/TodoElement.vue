<template>
  <li class="todo-element">
    <span class="todo-info">
      <!-- <input type="checkbox" class="todo-check" @change="todo.completed = !todo.completed"> -->
      <input type="checkbox" class="todo-check" @change="confirmTodo">
      <strong> {{ index + 1 }} :</strong>
      <p class="todo-text" :class="{done: todo.completed}">Title:  {{ todo.title }} </p>
    </span>
    <div>
      <Button class="todo-button__edit">
        <template>Edit</template>
      </Button>
      <FunctionsButton class="todo-button__delete" @click="deleteTodo">
        <template>Delete</template>
      </FunctionsButton>
    </div>
  </li>
</template>

<script>
import Button from '@/components/ui/Button'
import FunctionsButton from '@/components/FunctionsButton'
export default {
  name: 'TodoElement',
  components: {
    Button,
    FunctionsButton
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {
    deleteTodo () {
      this.$emit('delete-todo')
    },
    confirmTodo () {
      this.todo.completed = !this.todo.completed
      this.$emit('confirm-todo')
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-element {
  list-style: none;
  font-size: 20px;
  line-height: 1;
  border-bottom: 2px solid black;
  padding-bottom: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: baseline;
}

.todo-check {
  margin-right: 40px;
}

.todo-text {
  padding: 0;
  margin: 0;
}

.todo-info {
  display: flex;
}

.todo-text {
  margin-left: 30px;
}

.todo-button__edit {
  border-color: green;
    &:hover {
      color: green;
    }
    &:active {
      background: green;
      color: white;
    }
}

.todo-button__delete {
  border-color: red;
  margin-left: 20px;
  padding: 5px 15px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
    &:hover {
      color: red;
      border-color: red;
    }
    &:active {
      background: red;
      color: white;
    }
}

.done {
  text-decoration-color: red;
  text-decoration-line: line-through;
}
</style>
