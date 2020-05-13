/* eslint-disable no-unused-expressions */
<template>
  <div class="header">
    <h1 class="header-title">Home Page</h1>
<!-- Копка на страницу Create -->
    <router-link to="/create">
      <Button class="header-link">
        <template>New</template>
      </Button>
    </router-link>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
export default {
  name: 'HomePage',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.header-link {
  padding: 5px 30px;
}
</style>
