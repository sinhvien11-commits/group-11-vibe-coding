// ── Firebase Configuration ──────────────────────────────────────────────────
// Replace every value below with your project's config from:
// Firebase Console → Project Settings → Your apps → Firebase SDK snippet (Config)
const _firebaseConfig = {
  apiKey:            "PASTE_YOUR_API_KEY",
  authDomain:        "PASTE_YOUR_AUTH_DOMAIN",
  projectId:         "PASTE_YOUR_PROJECT_ID",
  storageBucket:     "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId:             "PASTE_YOUR_APP_ID"
};
// ────────────────────────────────────────────────────────────────────────────

try {
  firebase.initializeApp(_firebaseConfig);
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
