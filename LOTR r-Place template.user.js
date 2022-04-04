// ==UserScript==
// @name         LOTR r/Place template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Arise, arise, Riders of Théoden! Spears shall be shaken, shields shall be splintered, a sword-day, a red day, ere the sun rises! Ride now, ride now, ride! Ride for ruin and the world's ending!
// @author       Mx_T4t0_and_Sinia/Sapplecat
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/959962412218478653/960341691037024326/gandalf_overlay_final.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}