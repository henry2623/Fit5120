<template>
  <div>
    <h2>Book List</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        <!-- Show current name + ISBN -->
        {{ book.name }} (ISBN: {{ book.isbn }}) —
        <input v-model="book.newName" placeholder="Enter new name" />
        <button @click="updateBook(book.id, book.newName)">Update</button>
        <button @click="deleteBook(book.id)">Delete</button>
      </li>
    </ul>

    <h2>Query  (ISBN > 1000, order by ISBN, limit 5)</h2>
    <ul>
      <li v-for="book in queryBooks" :key="book.id">
        {{ book.name }} — ISBN: {{ book.isbn }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { db } from "../firebase/init.js";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

export default {
  name: "BookList",
  setup() {
    const books = ref([]);
    const queryBooks = ref([]);


    const fetchBooks = async () => {
      const snap = await getDocs(collection(db, "books"));
      books.value = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        newName: "",
      }));
    };

    const updateBook = async (id, newName) => {
      if (!newName || !newName.trim()) {
        alert("Please enter a new name before updating.");
        return;
      }
      const bookRef = doc(db, "books", id);
      await updateDoc(bookRef, { name: newName.trim() });
      await fetchBooks();
      await fetchQueryBooks();
      alert("Book updated!");
    };


    const deleteBook = async (id) => {
      const bookRef = doc(db, "books", id);
      await deleteDoc(bookRef);
      await fetchBooks();
      await fetchQueryBooks();
      alert("Book deleted!");
    };

    const fetchQueryBooks = async () => {
      const q = query(
        collection(db, "books"),
        where("isbn", ">", 1000),
        orderBy("isbn", "asc"),
        limit(5)
      );
      const snap = await getDocs(q);
      queryBooks.value = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    };

    onMounted(async () => {
      await fetchBooks();
      await fetchQueryBooks();
    });

    return { books, queryBooks, updateBook, deleteBook };
  },
};
</script>
