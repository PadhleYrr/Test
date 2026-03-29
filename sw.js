var CACHE='mppsc-v2';var URLS=['/','/index.html','/style.css','/app.js','/auth.js','/data_q.js','/data_q_paper1.js','/data_q_paper2.js','/data_notes.js','/data_notes_extended.js','/data_syllabus.js','/data_pyq.js','/smart_study.js','/i18n.js','/icon.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(URLS)}))});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
