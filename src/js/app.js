'use strict';
import header from "../parts/header/header.js";
import services from "../parts/services/services.js";
import news from "../parts/news/news.js";

document.addEventListener('DOMContentLoaded', () => {
    header();
    services();
    news();
})
