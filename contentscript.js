const publicScript = document.createElement('script');
publicScript.src = chrome.extension.getURL(`public.js`);
document.head.append(publicScript);

const script = document.createElement('script');
script.src = chrome.extension.getURL(`browser-automation-toolbox.js`);
document.head.append(script);
