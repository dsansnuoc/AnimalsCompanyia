import "./import-jquery.js";

$(document).ready(main);
// $(document).ready(img);

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


function img() {

    if ("loading" in HTMLImageElement.prototype) {
      // Si el navegador soporta lazy-load, tomamos todas las imágenes que tienen la clase
      // `lazyload`, obtenemos el valor de su atributo `data-src` y lo inyectamos en el `src`.
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        var timestamp = new Date().getTime();  
        console.log(img.dataset.src);
        img.src = img.dataset.src+'?t=' + timestamp;
        
      });
    } else {
      // Importamos dinámicamente la libreria `lazysizes`
      let script = document.createElement("script");
      script.async = true;
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js";
      document.body.appendChild(script);
    }
}