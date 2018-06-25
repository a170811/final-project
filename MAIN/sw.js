const cacheFile = [
  /*
   */
  './index.html',  './index.js',  './index.css',  './manifest.json',  './pageHTML.txt',  './sw.js',  './register.js',
  './Aboutus/001.png',  './Aboutus/002.png',  './Aboutus/003.png',  './Aboutus/004.png',
  './Aboutus/005.png',  './Aboutus/006.png',  './Aboutus/007.png',  './Aboutus/arrow.svg',
  './Aboutus/bg+whale.png',  './Aboutus/bg+whale.svg',  './Aboutus/bg.svg',  
  './Aboutus/bubble.svg',  './Aboutus/bubble2.svg',  './Aboutus/bubble3.svg',
  './Aboutus/info_icon.svg',
  './Aboutus/pageHTML.txt',  './Aboutus/whale.gif',  './Aboutus/whale.js',
  './Home/pageHTML.txt',
  './Record_page/BG.svg',  './Record_page/a.png',  './Record_page/b.png',
  './Record_page/drip.png',    './Record_page/pageHTML.txt',  './Record_page/next.png',  
  './Record_page/prev.png', 
  './Daily_page/pageHTML.txt',
  './Setup_page/bg.svg',  './Setup_page/logo.svg',  './Setup_page/pageHTML.txt',
  './Flooding_page/pageHTML.txt',
  './Picture/a.png',   './Picture/arrow-white.svg',  './Picture/b.png',  './Picture/bg-1.svg',
  './Picture/bg-2.svg',  './Picture/bg.svg',  './Picture/boat.svg',
  './Picture/castle-no-shadow.svg',  './Picture/castle-shadow.svg',  './Picture/dragon.png',
  './Picture/drip_full.svg',  './Picture/drip_half.svg',  './Picture/drip_none.svg',
  './Picture/fb.png',  './Picture/logo+title.svg',  './Picture/logo+word.svg',
  './Picture/logo.svg',  './Picture/prev.png',  './Picture/setting.svg',  './Picture/share.svg',
  './Picture/start-bg+logo.svg',  './Picture/start-bg.svg',  './Picture/turtle-no-shadow.svg',
  './Picture/turtle-shadow.svg',  './Picture/turtle.svg',  './Picture/whale-bone.svg',
  './Picture/whale-no-shadow.svg',  './Picture/whale-phone.png',  './Picture/whale-shadow.svg',
  './Picture/whale.ico',  './Picture/whale.svg',  './Picture/word.svg', './Picture/whale-black.svg',
  './Setup_page/music.mp3', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js',
  './'
]

/*
//----- jump web from local -----//
self.addEventListener('fetch', event => {
  console.log("now install")

  event.respondWith(
    caches.open(cacheKey)
    .then(cache => cache.addAll(cacheFile))
    // .then(() => self.skipWaiting())
  )
  return response || fetch(event.requset);
})
*/




//FileInputStream fis = new FileInputStream(new File(getCacheDir(), "index.js"));
const cacheKey = 'drink_water'

// install
self.addEventListener('install', event => {
  console.log("now install")

  event.waitUntil(
    caches.open(cacheKey)
    .then(cache => cache.addAll(cacheFile))
      )
    // .then(() => self.skipWaiting())
})



/*
 .then(cache => {
            cache.matchAll('./index.js')
            .then(() =>  console.log(test) )  
          })

 *
 */
 




// activate
self.addEventListener('activate', event => {
  console.log(`activate ${cacheKey}, now ready to handle fetches`)
  event.waitUntil(
    caches.keys().then(cacheNames => {
      const promiseArr = cacheNames.map(item => {
        if (item !== cacheKey) {
          return caches.delete(item)
        }
      })
      return Promise.all(promiseArr)
    })
  )
})

// fetch
self.addEventListener('fetch', event => {
  console.log(`${event.request.method}: ${event.request.url}`)
  //console.log(`${event.request.header}`)
  //console.log(`${event.request.text}`)
  //console.log(`${event.request.json}`)
  //console.log(`${event.request.arrayBuffer}`)
  //console.log(event.request.formData())
  //console.log(event.request); 

  


/*
  var requestURL = new URL(event.request.url);
    console.log(requestURL.pathname);
  if (/^\/pageHTML.txt\//.test(requestURL.pathname)) {
    //event.respondWith(/* some other combination of patterns );
    console.log("Find");
    return;
}
*/
  var req = event.request.clone();

  if (req.clone().method == "POST") {
    console.log('Get Post');
    event.respondWith(
      caches.match(event.request).then(response => {
          //return response
        if (response) {
          return response
        }
        return fetch(event.request)
      })
    )

  }
  else if (req.clone().method == "GET") {
    console.log('Get Post');
    event.respondWith(
      caches.match(event.request.url.pathname).then(response => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
    )

  }



/*
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
  */
})

/*
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
      messagingSenderId: "363801879198"
};

firebase.initializeApp(config);
messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('Received background message ', payload);
  
});

console.log("Loaded SW..");
*/
