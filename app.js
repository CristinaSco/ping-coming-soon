function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  const $email = $(".email");
  $result.text("");

  if (!validateEmail(email)) {
    $result.text("Please provide a valid email address");
    $result.css("color", "hsl(354, 100%, 66%)");
    $result.css("text-align", "center");
    $result.css("margin-right", "250px");
    $result.css("margin-bottom", "15px");
    $result.css("font-family", "font-family: 'Libre Franklin', sans-serif;");
    $result.css("font-size", "10px");
    $result.css("font-style", "italic");
    $email.css("border","1px solid hsl(354, 100%, 66%)");
  }
  return false;
}

$("#validate").on("click", validate);
