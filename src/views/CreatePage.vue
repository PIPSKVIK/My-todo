<template>
  <div>
    <h1>Create Page</h1>
<!-- Линк на Home страницу -->
    <router-link to="/">
      <Button>
        <template>Home page</template>
      </Button>
    </router-link>
<!-- добавляем новый todo -->
    <div class="todo-create">
      <CreateTodoInput
        class="todo-crate__input"
        v-model="title"
      ></CreateTodoInput>
      <FunctionsButton @click="addTodo">
        <template>Create</template>
      </FunctionsButton>
    </div>
<!-- Секуия с todo элементами -->
    <div class="todo-body">
      <ul class="todo-body__list">
        <TodoElement
          v-for="(todo, i) of todos"
          :key="todo.id"
          :todo="todo"
          :index="i"
          @delete-todo="deleteTodo"
          @confirm-todo="confirmTodo"
        ></TodoElement>
      </ul>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import TodoElement from '@/components/TodoElement'
import CreateTodoInput from '@/components/CreateTodoInput'
import FunctionsButton from '@/components/FunctionsButton'
export default {
  name: 'CreatePage',
  components: {
    Button,
    TodoElement,
    CreateTodoInput,
    FunctionsButton
  },
  data () {
    return {
      todos: [],
      title: ''
    }
  },
  methods: {
    addTodo () {
      const highestId = Date.now()
      this.todos.push({
        id: highestId,
        title: this.title,
        completed: false
      })
      this.saveLocalStorageTodos()
      this.title = ''
    },
    confirmTodo () {
      this.todos.includes({
        completed: true
      })
      this.saveLocalStorageTodos()
    },
    deleteTodo (item) {
      const index = this.todos.indexOf(item) // arr.indexOf(searchElement)
      this.todos.splice(index, 1) // array.splice( start, deleteCount )
      this.saveLocalStorageTodos()
    },
    saveLocalStorageTodos () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.totos = JSON.parse(localStorage.getItem('todos'))
    }
  },
  created () {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-create {
  padding: 20px 0;
  margin-top: 10px;
}

.todo-crate__input {
  margin-right: 30px;
}
</style>
