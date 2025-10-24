<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills align-items-center">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            exact-active-class="active"
            aria-current="page"
          >
            Home (Week 5)
          </router-link>
        </li> 
        <li class="nav-item">
          <router-link
            to="/WeartherCheck"
            class="nav-link"
            exact-active-class="active"
            aria-current="page"
          >
           weathercheck
          </router-link>
        </li> 
        <li class="nav-item">
          <router-link
            to="/getbook"
            class="nav-link"
            exact-active-class="active"
            aria-current="page"
          >
           getbook
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
            to="/addbook"
            class="nav-link"
            exact-active-class="active"
          >
            addbook
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/getAllBookAPI"
            class="nav-link"
            exact-active-class="active"
          >
            getAllBookAPI
          </router-link>
        </li>

        <!-- Show when NOT logged in -->
        <li class="nav-item" v-if="!user">
          <router-link
            to="/FireLogin"
            class="nav-link"
            active-class="active"
          >
            Firebase Login
          </router-link>
        </li>
        <li class="nav-item" v-if="!user">
          <router-link
            to="/FireRegister"
            class="nav-link"
            active-class="active"
          >
            Firebase Register
          </router-link>
        </li>

        <!-- Show when logged in -->
        <li class="nav-item" v-else>
          <button class="nav-link btn btn-link p-0" @click="logout">
            Logout ({{ user.displayName || user.email }})
          </button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const user = ref(null)
const auth = getAuth()

onMounted(() => {
  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
  })
})

const logout = async () => {
  try {
    await signOut(auth)
    console.log('Current User after logout:', auth.currentUser)
    user.value = null
  } catch (error) {
    console.error('Logout error:', error)
  }
}
</script>
