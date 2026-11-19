'use strict';
const VERSION='2026-11-19-pwa-1';
const PREFIX='ruuhka:'+new URL(self.registration.scope).pathname+':';
const CACHE=PREFIX+VERSION;
const PRECACHE=['./','./index.html','./style.css','./game.js','./pwa.js','./manifest.webmanifest','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png','./icons/favicon-32.png','./assets/cars/green-v1.png','./assets/cars/pink-v1.png','./assets/cars/orange-v1.png','./assets/cars/brown-v1.png','./assets/cars/red-v1.png'];
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(PRECACHE.map(path=>new Request(new URL(path,self.registration.scope),{cache:'reload'})));})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim();})());});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',event=>{const request=event.request,url=new URL(request.url),scope=new URL(self.registration.scope);if(request.method!=='GET'||url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;event.respondWith((async()=>{const cache=await caches.open(CACHE);const cached=await cache.match(request,{ignoreSearch:true});if(cached)return cached;try{return await fetch(request);}catch(error){if(request.mode==='navigate'){const shell=await cache.match(new URL('./index.html',scope));if(shell)return shell;}throw error;}})());});
