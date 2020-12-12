<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <column-chart :data="chartkickData" legend="right"></column-chart>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      chartkickData: [
        {
          name: 'First Person',
          data: [['Sun', 32], ['Mon', 46], ['Tue', 28]]
        },
        {
          name: 'Weird Person',
          data: [['Sun', 11], ['Mon', 12], ['Tue', 20]]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
