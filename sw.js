const CACHE_NAME = "student-portal-v1";

const FILES_TO_CACHE = [
  "login.html",
  "home.html",
  "dashboard.html",
  "profile.html",
  "attendance.html",
  "result.html",
  "subject.html",
  "performance.html",
  "assignments.html",
  "notes.html",
  "projects.html",
  "timetable.html",
  "icon.png",
  "manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});