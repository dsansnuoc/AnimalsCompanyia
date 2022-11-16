import "./import-jquery.js";

$(document).ready(main);

let menuBar = true;

function main() {
    $('.menu_bar').click(function () {
        // $('nav').toggle(); 

        if (menuBar) {
            $('nav').animate({
                left: '0'
            });
        } else {
            $('nav').animate({
                left: '-100%'
            });
        }
        menuBar = !menuBar;
    });
};