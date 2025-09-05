const {
  APP_FIREBASE_API_KEY: apiKey,
  APP_FIREBASE_AUTH_DOMAIN: authDomain,
  APP_FIREBASE_PROJECT_ID: projectId,
  APP_FIREBASE_STORAGE_BUCKET: storageBucket,
  APP_FIREBASE_MESSAGING_SENDER_ID: messagingSenderId,
  APP_FIREBASE_APP_ID: appId
} = import.meta.env

export default {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
}
