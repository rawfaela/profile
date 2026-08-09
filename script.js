const translateButton = document.getElementById("translate_button");
const translateTextO = translateButton.textContent;

const menu1O = document.getElementById("menu1").textContent;
const menu2O = document.getElementById("menu2").textContent;
const menu3O = document.getElementById("menu3").textContent;
const menu4O = document.getElementById("menu4").textContent;
const abtMe1O = document.getElementById("abt_me1").textContent;
const abtMe2O = document.getElementById("abt_me2").textContent;
const abtMe3O = document.getElementById("abt_me3").textContent;
const footer1O = document.getElementById("footer1").textContent;

translateButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (translateButton.textContent === translateTextO) {
        translateButton.textContent = "Translate to English";
        
        document.getElementById("menu1").textContent = "Sobre mim";
        document.getElementById("menu2").textContent = "Projetos";
        document.getElementById("menu3").textContent = "Experiência";
        document.getElementById("menu4").textContent = "Certificações";
        
        document.getElementById("abtme_title").textContent = "Sobre Mim";
        document.getElementById("abt_me1").textContent = "Oie! Meu nome é Rafaela, sou estudante e aspirante a desenvolvedora de software, apaixonada por tecnologia e resolução de problemas. Tenho formação técnica em Informática e experiência em diferentes áreas do desenvolvimento de software, incluindo desenvolvimento web, aplicações mobile, bancos de dados e IoT.";
        document.getElementById("abt_me2").textContent = "Gosto de aprender novas tecnologias e transformar ideias em projetos práticos (como este!). Já trabalhei com linguagens como JavaScript, Python, Java, C++, C#, SQL e Progress 4GL, além de tecnologias como React Native, Firebase, Arduino e ESP32.";
        document.getElementById("abt_me3").textContent = "Estou sempre buscando oportunidades para aprimorar minhas habilidades, explorar novos desafios e crescer como desenvolvedora. Acredito que cada projeto é uma oportunidade de aprender algo novo.";
        document.getElementById("footer1").textContent = "Contato";
    } else {
        translateButton.textContent = translateTextO;
        
        document.getElementById("menu1").textContent = menu1O;
        document.getElementById("menu2").textContent = menu2O;
        document.getElementById("menu3").textContent = menu3O;
        document.getElementById("menu4").textContent = menu4O;
        
        document.getElementById("abtme_title").textContent = menu1O;
        document.getElementById("abt_me1").textContent = abtMe1O;
        document.getElementById("abt_me2").textContent = abtMe2O;
        document.getElementById("abt_me3").textContent = abtMe3O;

        document.getElementById("footer1").textContent = footer1O;
    }
});

window.addEventListener("load", function() {
    document.getElementById("loading").classList.add("hidden");
});