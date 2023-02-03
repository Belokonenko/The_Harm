'use strict';

import test from "./modules/test.js";
import header from "../parts/header.js";

document.addEventListener('DOMContentLoaded', () => {
    console.log('hello app');
    test();
    header();
})
