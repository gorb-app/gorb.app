<template>
  <nav id="footer">
    <div id="content">
      <div id="source">
        <a href="/source">SOURCE CODE</a>
      </div>
      <div id="socials">
        <a href="https://docs.gorb.app" title="API Documentation">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
          </svg>
        </a>
        <a href="https://git.gorb.app/gorb" title="Gorb's Forgejo">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16.777 0a2.9 2.9 0 1 1-2.529 4.322H12.91a4.266 4.266 0 0 0-4.265 4.195v2.118a7.076 7.076 0 0 1 4.147-1.42l.118-.002h1.338a2.9 2.9 0 0 1 5.43 1.422a2.9 2.9 0 0 1-5.43 1.422H12.91a4.266 4.266 0 0 0-4.265 4.195v2.319A2.9 2.9 0 0 1 7.222 24A2.9 2.9 0 0 1 5.8 18.57V8.589a7.109 7.109 0 0 1 6.991-7.108l.118-.001h1.338A2.9 2.9 0 0 1 16.778 0ZM7.223 19.905a1.194 1.194 0 1 0 0 2.389a1.194 1.194 0 0 0 0-2.389Zm9.554-10.464a1.194 1.194 0 1 0 0 2.389a1.194 1.194 0 0 0 0-2.39Zm0-7.735a1.194 1.194 0 1 0 0 2.389a1.194 1.194 0 0 0 0-2.389Z"/>
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#footer {
  margin-top: auto;
  padding: 2dvh 3.5dvh;
  background-color: var(--background-secondary-colour);
  border-top: 1px solid var(--secondary-colour);
  color: var(--secondary-colour)
}

#content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#footer a {
  text-decoration: none;
  color: var(--secondary-colour)
}

#source {
  display: flex;
  font-weight: 300;
  font-size: 90%;
  margin-right: 4dvh;
}

#source a {
  color: var(--accent-colour);
}

#socials {
  display: flex;
  gap: 2dvh;
  margin-bottom: -1dvh;
}

svg {
  width: 1.5em;
  height: 1.5em;
  shape-rendering: auto;
  transition: filter 0.15s ease-in-out;
}

a:hover svg {
  filter: brightness(140%);
}
</style>
