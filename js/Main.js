$(document).ready(function () {

    //Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            pager: true,
            slideWidth: 1200
        });

    }

    //Posts
    if (window.location.href.indexOf('index') > -1) {
        let posts = [
            {
                title: 'Prueba titulo 1',
                date: ' Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
                content: 'Yo podria prometerte el mundo, tu prometeme un madrugada para cantarte .Compay Segundo mientras tu me bailas como Lady Gaga. Yo te prometo, amor, que solamente yo tengo en mi mente pedirte una noche porque no necesitare mas que un muelle de San Blas sonando en nuestro coche.Yo podria prometerte el mundo, tu prometeme  un madrugada para cantarte Compay Segundo mientras tu me bailas como Lady Gaga.'
            },

            {
                title: 'Prueba titulo 2',
                date: ' Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
                content: 'Yo podria prometerte el mundo, tu prometeme un madrugada para cantarte .Compay Segundo mientras tu me bailas como Lady Gaga. Yo te prometo, amor, que solamente yo tengo en mi mente pedirte una noche porque no necesitare mas que un muelle de San Blas sonando en nuestro coche.Yo podria prometerte el mundo, tu prometeme  un madrugada para cantarte Compay Segundo mientras tu me bailas como Lady Gaga.'
            },

            {
                title: 'Prueba titulo 3',
                date: ' Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
                content: 'Yo podria prometerte el mundo, tu prometeme un madrugada para cantarte .Compay Segundo mientras tu me bailas como Lady Gaga. Yo te prometo, amor, que solamente yo tengo en mi mente pedirte una noche porque no necesitare mas que un muelle de San Blas sonando en nuestro coche.Yo podria prometerte el mundo, tu prometeme  un madrugada para cantarte Compay Segundo mientras tu me bailas como Lady Gaga.'
            },

            {
                title: 'Prueba titulo 4',
                date: ' Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
                content: 'Yo podria prometerte el mundo, tu prometeme un madrugada para cantarte .Compay Segundo mientras tu me bailas como Lady Gaga. Yo te prometo, amor, que solamente yo tengo en mi mente pedirte una noche porque no necesitare mas que un muelle de San Blas sonando en nuestro coche.Yo podria prometerte el mundo, tu prometeme  un madrugada para cantarte Compay Segundo mientras tu me bailas como Lady Gaga.'
            },

            {
                title: 'Prueba titulo 5',
                date: ' Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + " del " + moment().format("YYYY"),
                content: 'Yo podria prometerte el mundo, tu prometeme un madrugada para cantarte .Compay Segundo mientras tu me bailas como Lady Gaga. Yo te prometo, amor, que solamente yo tengo en mi mente pedirte una noche porque no necesitare mas que un muelle de San Blas sonando en nuestro coche.Yo podria prometerte el mundo, tu prometeme  un madrugada para cantarte Compay Segundo mientras tu me bailas como Lady Gaga.'

            }

        ];


        posts.forEach((item, index) => {
            let post = `
         <article class="post">
         <h2> ${item.title} </h2>
         <span class="date"> ${item.date} </span>
         <p>
         ${item.content}
         </p>
         <a href="#" class="button-more">Leer mas</a>
         </article >
        `;


            $("#posts").append(post);
        });
    }

    // Selector de tema

    let theme = $("#theme");

    $("#to-pink").click(function () {
        theme.attr("href", "css/pink.css");
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });

    // Scroll 

    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Llogin falso

    $("#login form").submit(function () {
        let form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    let form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined") {
        let about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido," + form_name + "</strong>");
        about_parrafo.append("<a href='#' id= 'logout'>Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon

    if (window.location.href.indexOf('About') > -1) {
        $("#acordeon").accordion();
    }

    //Reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () {
            let reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 100);
      

    }
   //Validation
   if (window.location.href.indexOf('contact') > -1) {

     $("form input[name='date']").datepicker({
         dateFormat: 'dd-mm-yy'
     })

      $.validate({
          lang: 'es',
          errorMessagePosition:'top',
          scrollTopOnError:true
      });
   }


});


