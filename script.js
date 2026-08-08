const translateButton = document.getElementById("translate_button");
const translateTextO = translateButton.textContent;
const abtMe1O = document.getElementById("abt_me1").textContent;
const abtMe2O = document.getElementById("abt_me2").textContent;
const abtMe3O = document.getElementById("abt_me3").textContent;

translateButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (translateButton.textContent === translateTextO) {
        translateButton.textContent = "Translate to English";
        document.getElementById("abt_me1").textContent = "Oie! bla  bla";
        document.getElementById("abt_me2").textContent = "Eu gosto de";
        document.getElementById("abt_me3").textContent = "Estou sempre procurando";
    } else {
        translateButton.textContent = translateTextO;
        document.getElementById("abt_me1").textContent = abtMe1O;
        document.getElementById("abt_me2").textContent = abtMe2O;
        document.getElementById("abt_me3").textContent = abtMe3O;
    }
});