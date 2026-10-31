// ==UserScript==
// @name         力扣 Leet · 自带 API
// @namespace    local.leetcode.ai
// @version      2.5.1
// @author       undemo
// @homepageURL  https://github.com/undemo/leetcode-local-ai
// @supportURL   https://github.com/undemo/leetcode-local-ai/issues
// @downloadURL  https://raw.githubusercontent.com/undemo/leetcode-local-ai/main/leetcode-local-ai.user.js
// @updateURL    https://raw.githubusercontent.com/undemo/leetcode-local-ai/main/leetcode-local-ai.meta.js
// @description  复用原生 Leet 对话、提交分析卡片和复杂度图表，使用自己的 API 并在本地保存结果。
// @match        https://leetcode.cn/problems/*
// @run-at       document-start
// @noframes
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addValueChangeListener
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @connect      api.deepseek.com
// @connect      *
// ==/UserScript==
