// Service worker de Firebase: recibe las notificaciones push aunque la web esté cerrada.
// IMPORTANTE: este archivo tiene que estar en la RAÍZ del sitio (mismo nivel que index.html).

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDpXqvb9knEo7CFfhRSBZNiNLr8Wp2QI8o",
  authDomain: "pily-pereyra-swim.firebaseapp.com",
  projectId: "pily-pereyra-swim",
  storageBucket: "pily-pereyra-swim.firebasestorage.app",
  messagingSenderId: "744313533325",
  appId: "1:744313533325:web:ef16fddf38dcdbd71ec3c4"
});

const messaging = firebase.messaging();

// Notificación recibida con la web cerrada / en segundo plano.
messaging.onBackgroundMessage((payload) => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'Pily Pereyra Swim', {
    body: n.body || '',
    badge: undefined
  });
});
