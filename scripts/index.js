// Esta es la base de datos de nuestros usuarios
const usuarios = [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
    {
      id: 5,
      name: "Ed Sheeran",
      email: "edsheeran@gmail.com",
      password: "holahola",
    },
    {
      id: 6,
      name: "Jacqui",
      email: "jacquiHaceCaca@gmail.com",
      password: "diarrea",
    },
    {
      id: 7,
      name: "Pana",
      email: "panaCarlos@gmail.com",
      password: "autos100",
    },
    {
      id: 8,
      name: "Pedruru",
      email: "salaberrypedro@outlook.com",
      password: "devilmon",
    },
    {
      id: 9,
      name: "Guillin",
      email: "guillin@gmail.com",
      password: "guillin100",
    },
    {
      id: 10,
      name: "Josefina",
      email: "joserennes@gmail.com",
      password: "SofiMagui",
    }
  ];

const email = usuarios.map(object => object.email);
const password = usuarios.map(object => object.password);

$(".login-btn").click(function() {
  $("#error-container").addClass("hidden");
  $("#loader").removeClass("hidden");
  setTimeout(function() {
    const compareEmail = email.indexOf($("#email-input").val());
    const comparePassword = password.indexOf($("#password-input").val());
    const numArray = usuarios.find(obj => obj.email === $("#email-input").val());
    if (compareEmail !== -1 && comparePassword !== -1 && numArray.email === $("#email-input").val() && numArray.password === $("#password-input").val()) {
      $("#loader").text("Sesión iniciada correctamente.");
      setTimeout(function() {
        $("form").hide();
        $("h1").text("Sesión iniciada");
        if($(window).width() < 500) {
          $("h1").css("margin-top", "14rem");
        }
      }, 1500);
    } else if ($("#password-input").val().length < 5) {
      $("#loader").addClass("hidden");
      $("#error-container").removeClass("hidden");
      $("#error-container").text("Error. La contraseña tiene que tener más de 5 carácteres.");
      $("#error-container").css("color", "red");
      } else {
      $("#loader").addClass("hidden");
      $("#error-container").removeClass("hidden");
      $("#error-container").text("Alguno de los datos es incorrecto.");
      $("#error-container").css("color", "red");
      }
  }, 3000);
});

$(document).ready(function() {
  $("#show-password").prop("checked", false);
});

$("#show-password").click(function(){
  if ($("#show-password").is(":checked")) {
    $("#password-input").attr("type", "text");
  } else {
    $("#password-input").attr("type", "password");
  }
});

$(document).on("keydown", function(e) {
  if (e.keyCode === 13) {
    $(".login-btn").click();
  }
});



/*   $(".login-btn").click(function() {
    $("#error-container").addClass("hidden");
    $("#loader").removeClass("hidden");
    setTimeout(function() {
      if (usuarios[3].email === $("#email-input").val() && usuarios[3].password === $("#password-input").val()) {
        $("#loader").text("Sesión iniciada correctamente");
        setTimeout(function() {
          $("form").hide();
          $("h1").text("Sesión iniciada");
        }, 1500);
      } else {
        $("#loader").addClass("hidden");
        $("#error-container").removeClass("hidden");
      }
    }, 3000);
  }); */

