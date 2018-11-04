const filesToCache = [
    '/',
    'css/base.css',
    'css/bootstrap.min.css',
    'index.html',
    'img/aclu-2-144.png',
    'img/aclu-2.png',
    'img/aclu-2.jpg',
    'img/adult-casual-clothes-296881-v2.jpg',
    'img/auto-automobile-blur-532001.jpg',
    'js/base.js',
    'js/bootstrap.min.js',
    'js/jquery-1-11-2-min.js',
    'js/jquery-ui-min.js',
    'js/jquery.cubeportfolio.min.js'

  ];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

    
    self.addEventListener('activate', event=>{
    console.log('Service Worker activating...');
    });
    
    self.addEventListener('fetch', event=>{
        console.log('Fetching: ', event.request.url);
    });
    
    
    //FETCH api
    
    function postRequest() {
      const formData = new FormData(document.getElementById('msg-form'));
      var jsonObject = {};
      formData.forEach(function(value, key){
        jsonObject[key] = value;
      });
    
      var httpHeaders = { 'Content-Type' : 'application/json' };
      var myHeaders = new Headers(httpHeaders);
      fetch('http://localhost:5000/', {
        method: 'POST',
        body: JSON.stringify(jsonObject),
        headers: myHeaders
      })
        .then(validateResponse)
        .then(readResponseAsText)
        .then(showText)
        .catch(logError);
    }
    
    function logResult(result) {
      console.log(result);
    }
    
    function logError(error) {
      console.log('Looks like there was a problem:', error);
    }
    
    function validateResponse(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
    
    function readResponseAsJSON(response) {
      return response.json();
    }
    
    
   
    
    
    self.addEventListener('fetch', event => {
        console.log('Fetch event for ', event.request.url);
        event.respondWith(
          caches.match(event.request)
          .then(response => {
            if (response) {
              console.log('Found ', event.request.url, ' in cache');
              return response;
            }
            console.log('Network request for ', event.request.url);
            return fetch(event.request)
      
            .then(response => {

                return caches.open(staticCacheName).then(cache => {
                  cache.put(event.request.url, response.clone());
                  return response;
                });
              });
      
          }).catch(error => {
      
          })
        );
      });