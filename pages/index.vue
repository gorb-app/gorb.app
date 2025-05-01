<template>
  <div id="main">
    <h1>Welcome to <span id="gorb">
        <span>G</span><span>O</span><span>R</span><span>B</span>
      </span>, the Open-Source and Federated Chat App!</h1>
    <NuxtLink class="link" href="/"><s>Go to web client</s></NuxtLink>
    IT DOESN'T EXIST YET
    <p>
      BUT! Check out our <NuxtLink id="git-link" href="https://git.gorb.app/gorb">Git</NuxtLink> to check on our
      progress!
    </p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
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

#git-link {
  color: inherit;
}
</style>