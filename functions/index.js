const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();
exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snap = await admin.firestore().collection("books").get();
      const books = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

   
      res.set("Cache-Control", "no-store");
      res.status(200).json({ books });
    } catch (err) {
      console.error("Error fetching books:", err);
      res.status(500).json({ error: "Error fetching books" });
    }
  });
});
exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({ count });
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send({ error: "Error counting books" });
    }
  });
});
