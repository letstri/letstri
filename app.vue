<template>
  <div class="app">
    <div class="container">
      <img
        src="https://avatars.githubusercontent.com/u/13253748?v=4"
        alt="Valerii Strilets"
        class="image"
      />
      <div class="content">
        <h1>Hello!</h1>
        <p class="description">
          I'm Valerii Strilets, a JavaScript senior software engineer and
          content creator at
          <a
            href="https://www.instagram.com/wannabe.school/"
            target="_blank"
            rel="noopener noreferrer"
            >@wannabe.school</a
          >. I'm passionate about web development, open-source, and building
          communities. Feel free to reach out to me on
          <a
            href="https://github.com/letstri"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub</a
          >
          or
          <a
            href="https://www.linkedin.com/in/valerii-strilets/"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: "Catamaran";
  background: #040d12;
  color: #fff;
}

a {
  text-decoration: none;
  color: #fff;
  position: relative;
  z-index: 1;
  display: inline-block;
}

a::before {
  content: "";
  position: absolute;
  z-index: -1;
  right: 0;
  height: 6px;
  bottom: 0px;
  left: 0;
  background-color: #5c8374;
  transition: height 0.15s;
}

a:hover::before {
  height: 20px;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 500px;
}

.content {
}

.image {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  min-width: 100px;
}
</style>
