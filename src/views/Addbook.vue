<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>


    <BookList />
  </div>
</template>

<script>
import { ref } from "vue";
import { db } from "../firebase/init.js";
import { collection, addDoc } from "firebase/firestore";
import BookList from "../components/BookList.vue";

export default {
  name: "AddBook",
  components: { BookList },
  setup() {
    const isbn = ref("");
    const name = ref("");

    const addBook = async () => {
      try {
        const n = Number(isbn.value);
        if (isNaN(n)) {
          alert("ISBN must be a valid number");
          return;
        }
        await addDoc(collection(db, "books"), { isbn: n, name: name.value });
        isbn.value = "";
        name.value = "";
        alert("Book added!");
      } catch (e) {
        console.error("Error adding book: ", e);
      }
    };

    return { isbn, name, addBook };
  },
};
</script>
