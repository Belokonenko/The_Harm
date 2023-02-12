'use strict';
import header from "../parts/header/header.js";
import services from "../parts/services/services.js";
import news from "../parts/news/news.js";
import work from "../parts/work/work.js";
import about from "../parts/about/about.js";
import gallery from "../parts/gallery/gallery.js";

document.addEventListener('DOMContentLoaded', () => {
    header();
    work();
    services();
    news();
    about();
    gallery();
})
