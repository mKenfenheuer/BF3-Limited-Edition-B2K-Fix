// ==UserScript==
// @name         FixBF3BL
// @namespace    https://frae.io
// @version      1.0.0a
// @description  Fix BF3 Limited Edition B2K/Premium Servers
// @author       MrGForse
// @match        https://battlelog.battlefield.com/bf3/*
// @run-at       document-start
// ==/UserScript==

// The below code will replace all relevant hosted JS assets with custom ones.

//438223020
const old_data = "//eaassets-a.akamaihd.net/bl-cdn/cdnprefix/production-5766-20200917/public/generated/en_US/bundle_base_bottombundles_438223020.js";
const new_data = "https://rawcdn.githack.com/mKenfenheuer/BF3-Limited-Edition-B2K-Fix/cfd0d81fdd0c70a24a584030727e953a056e016a/bundle_base_bottombundles_438223020.js?raw=true";

function injectScript(originalPage) { //Function injectScript replaces the file
    console.log('Performing inection, please wait...');
    document.open();
    console.log('Reloading page with injected scripts...');
    document.write(originalPage.replace(old_data, new_data));
    document.close();
}

setTimeout(function() { // Initialise script and wait for HTML to load
    console.log('Initialising...');
    injectScript(document.documentElement.outerHTML);
}, 1111);
