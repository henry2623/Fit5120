<template>
  <main class="container" style="padding: 16px; max-width: 900px; margin: auto;">
    <h1>GetAllBookAPI</h1>

    <p v-if="loading">Loading books...</p>
    <p v-if="error" style="color:#b00020;">{{ error }}</p>

    <pre v-if="data" style="background:#111; color:#eee; padding:16px; border-radius:12px; overflow:auto;">
{{ prettyJson }}
    </pre>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";


const endpoint = "https://getallbooks-45pwciyuyq-uc.a.run.app";

const data = ref(null);
const error = ref("");
const loading = ref(false);

const loadBooks = async () => {
  loading.value = true;
  try {
    const res = await fetch(endpoint, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data.value = await res.json();
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};


onMounted(loadBooks);

const prettyJson = computed(() => JSON.stringify(data.value, null, 2));
</script>
