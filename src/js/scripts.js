import "./import-jquery.js";

$(document).ready(main);

let menuBar = true;

function main() {
    $('.menu_bar').click(function () {
        // $('nav').toggle(); 

        if (menuBar) {
            $('nav').animate({
                left: '0',
                bottom: '110px',
                height: '300px'
            });
        } else {
            $('nav').animate({
                left: '-100%',
                bottop: '110px',
                height: '300px'

            });
        }
        menuBar = !menuBar;
    });
};