<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">

      <p>Hello!  {{ count }} </p>

      <button @click="increment">bbutttt</button>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>




<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  // `mounted` is a lifecycle hook which we will explain later
  mounted() {
    // `this` refers to the component instance.
    console.log("yooo " + this.count) // => 1

    // data can be mutated as well
    this.count = 3
  }
}
</script>



