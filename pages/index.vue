<template>
  <div id="main">
    <h1>Welcome to <span id="gorb">
        <span>G</span><span>O</span><span>R</span><span>B</span>
      </span>, the <span id="open-source">Open-Source</span> and <span id="federated">Federated</span>
      Chat App!</h1>
    <NuxtLink class="link" href="/"><s>Go to web client</s></NuxtLink>
    <p id="not-exist">IT DOESN'T EXIST YET</p>
    <p>
      BUT! Check out our <NuxtLink id="git-link" href="https://git.gorb.app/gorb">Git</NuxtLink> to check on our
      progress!
    </p>
  </div>
</template>

<script lang="ts" setup>

useHead({
  title: "Gorb",
  meta: [
    { name: "description", content: "Welcome to Gorb, the Open-Source Chat App!" }
  ]
});

</script>

<style scoped>
#gorb {
  margin-top: 0.6em;
  text-align: center;
}

#gorb span {
  display: inline-block;
  -webkit-animation: wave-text 1s ease-in-out infinite;
  animation: wave-text 1s ease-in-out infinite;
}

#gorb span:nth-of-type(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

#gorb span:nth-of-type(2) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

#gorb span:nth-of-type(3) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

#gorb span:nth-of-type(4) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

#gorb span:nth-of-type(5) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

@-webkit-keyframes wave-text {
  00% {
    transform: translateY(0em);
  }

  60% {
    transform: translateY(-0.4em);
  }

  100% {
    transform: translateY(0em);
  }
}

@keyframes wave-text {
  00% {
    color: lightblue;
    transform: translateY(0em);
  }

  60% {
    color: lightgreen;
    transform: translateY(-0.4em);
  }

  100% {
    color: violet;
    transform: translateY(0em);
  }
}

#open {
  color: rgb(214, 2, 112);
}

#hyphen {
  color: rgb(155, 79, 150);
}

#source {
  color: rgb(0, 56, 168);
}

#open-source {
  background: linear-gradient(to right, #FE218C, #FED84E, #1CB3F7);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

#federated {
  color: rgb(194, 0, 194);
}

#not-exist {
  color: red;
}

#git-link {
  color: aquamarine;
}
</style>