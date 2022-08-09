<template>
  <div>
    <nav>
      <a href="/">Home</a> |
      <a href="/app1">App1</a> |
      <a href="/app2">App2</a>
    </nav>
    <div id="subapp-container"></div>  
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
