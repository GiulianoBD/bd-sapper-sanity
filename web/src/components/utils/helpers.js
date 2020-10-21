import { writable } from 'svelte/store'

export const scrollCDN = 'https://cdn.jsdelivr.net/npm/locomotive-scroll@3.6.1/dist/locomotive-scroll.min.js'
// export const particlesCDN = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
// export const shopifyCDN = 'http://sdks.shopifycdn.com/js-buy-sdk/v2/latest/index.umd.min.js'
// export const iframeCDN = 'https://www.youtube.com/iframe_api'

export const scrollToTrigger = writable(false)
export const dialog = writable('default')
export const visible = writable(false)

export const loadScript = function (scriptUrl) {
  // Create a script tag and wrap it in promise
  const script = document.createElement('script');
  script.src = scriptUrl;
  document.body.appendChild(script);
  
  return new Promise((ok, fail) => {
    script.onload = () => ok();
    script.onerror = () => fail();
  });
  
}

export function formatDate(date) {
  let locale = 'it-IT'
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString(locale, options)
}

// export function openInNewTab(url) {
//   This is the workaround to open link cross IE 8 Safari 5
//   / ALSO how the fuck do i open a new tab in safari?
//   window.location.assign(url)
// }