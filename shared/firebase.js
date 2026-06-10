// ── Firebase Configuration ──────────────────────────────────────────────────
// Replace every value below with your project's config from:
// Firebase Console → Project Settings → Your apps → Firebase SDK snippet (Config)
const firebaseConfig = {
  apiKey: "AIzaSyAqPI_ZMFK2jHE56EVFIr_FUULIhBr24xU",
  authDomain: "customer-feedback-dashbo-c043f.firebaseapp.com",
  projectId: "customer-feedback-dashbo-c043f",
  storageBucket: "customer-feedback-dashbo-c043f.firebasestorage.app",
  messagingSenderId: "337501707549",
  appId: "1:337501707549:web:9eb104f041d2978b6015f4"
};
// ────────────────────────────────────────────────────────────────────────────

try {
  firebase.initializeApp(firebaseConfig);
  const _db = firebase.firestore();

  window.firebaseDB = {
    saveEntry(entry) {
      return _db.collection('feedbackEntries').add(entry);
    },
    async loadEntries() {
      const snap = await _db.collection('feedbackEntries')
        .orderBy('timestamp', 'desc')
        .get();
      return snap.docs.map(doc => doc.data());
    }
  };
} catch (e) {
  console.warn('Firebase init failed — Firestore disabled:', e);
  window.firebaseDB = null;
}
