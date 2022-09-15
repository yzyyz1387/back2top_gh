// 2022/9/15
// index.js
// Author: 幼稚园园长
// SoftWare: WebStorm
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let btn = document.createElement("button");
    btn.innerHTML = "返回顶部";
    btn.style.position = "fixed";
    btn.style.bottom = "10px";
    btn.style.right = "10px";
    btn.style.zIndex = "9999";
    btn.style.backgroundColor = "#3898fc";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.padding = "5px 10px";
    btn.style.cursor = "pointer";
    btn.style.display = "none";
    document.body.appendChild(btn);
    let timer = null
    let user =false
    window.onscroll = function() {
        let top = Math.floor(document.documentElement.scrollTop)
        if (top > 100) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
        console.log(top)
        if (top === 0 && !user) {
            clearInterval(timer)
        }

    }
    btn.onclick = function() {
        timer = setInterval(function() {
            user = true
            let top = Math.floor(document.documentElement.scrollTop)
            top = top > 10? top : 0
            let speed = top / 5
            document.documentElement.scrollTop = top - speed
            if (top === 0) {
                clearInterval(timer)

            }
        }, 30)
    }

})();