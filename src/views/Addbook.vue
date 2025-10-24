<template>
  <div class="container mt-4">
    <h1>User Profile</h1>

    <div v-if="user">
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Name:</strong> {{ user.displayName || "N/A" }}</p>
      <p><strong>Role:</strong> {{ role }}</p>
      <button class="btn btn-danger" @click="logout">Logout</button>
    </div>

    <div v-else>
      <p>You are not logged in.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut, getIdTokenResult } from 'firebase/auth'
import { useRouter } from 'vue-router'

const user = ref(null)
const role = ref('Guest')
const router = useRouter()
const auth = getAuth()

onMounted(() => {
  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      user.value = firebaseUser

      const tokenResult = await getIdTokenResult(firebaseUser)
      role.value = tokenResult.claims.role || 'User'

      console.log('Current User:', firebaseUser)
      console.log('Role from custom claims:', role.value)
    } else {
      user.value = null
      role.value = 'Guest'
    }
  })
})

const logout = async () => {
  try {
    await signOut(auth)
    user.value = null
    role.value = 'Guest'
    router.push('/FireLogin')
  } catch (err) {
    console.error('Logout error:', err)
  }
}
</script>
