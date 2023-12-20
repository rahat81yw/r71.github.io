// service-worker.js

// Your caching logic and other service worker code goes here

// Show a popup when the service worker is installed
self.addEventListener('install', (event) => {
  event.waitUntil(
    // Your caching logic here

    // Show a popup after the service worker is installed
    self.registration.showNotification('Add this site to your home screen!', {
      icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYm8L2cY3pu-xMwyUebT8aALAwZ2W-AHEusREQTae7JfmbhqmS2IhvfduHwmjmE8Du0bPx1RADzL-JHEGSKWEEmFfCjn7m2WWDt7IQbHHZS-exN3voU2U226jro_dZBKYbDMoeHTMr7rsRoXu16e7_Z6lAoRxXUOy9yZPyfDs3XVGSYcFDarAe0AQ1ePk/s320-rw/Picsart_23-12-12_13-26-34-328.jpg',
      body: 'Enjoy an enhanced experience by adding this site to your home screen.',
    })
  );
});

// Listen for notification interaction (e.g., user clicks on notification)
self.addEventListener('notificationclick', (event) => {
  // Perform actions when the notification is clicked
  event.notification.close();

  // Add your logic here, e.g., open a specific URL
  clients.openWindow('/path/to/your/page');
});