const translateButton = document.getElementById("translate_button");
const translateTextO = translateButton.textContent;

const menu1O = document.getElementById("menu1").textContent;
const menu2O = document.getElementById("menu2").textContent;
const menu3O = document.getElementById("menu3").textContent;
const menu4O = document.getElementById("menu4").textContent;
const abtMe1O = document.getElementById("abt_me1").textContent;
const abtMe2O = document.getElementById("abt_me2").textContent;
const abtMe3O = document.getElementById("abt_me3").textContent;
const prj1O = document.getElementById("prj1").textContent;
const prj2O = document.getElementById("prj2").textContent;
const prj_titleO = document.getElementById("prj_title").textContent;
const prj3O = document.getElementById("prj3").textContent;
const prj_techO = document.querySelector('.prj_tech').textContent;
const prj_techs = document.querySelectorAll('.prj_tech');
const prj3_techO = document.getElementById("prj3_tech").textContent;
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
        
        document.getElementById("projects_title").textContent = "Projetos";
        document.getElementById("prj_title").textContent = "Estacionamento Inteligente";
        document.getElementById("prj1").textContent = "Um aplicativo mobile de e-commerce para uma loja de produtos naturais, desenvolvido como meu projeto final do curso de Informática. O app permite que clientes naveguem pelos produtos, gerenciem o carrinho, façam pedidos e visualizem o histórico de compras, enquanto administradores podem gerenciar produtos, estoque e pedidos.";
        document.getElementById("prj2").textContent = "Um jogo educacional no estilo escape room desenvolvido para a Feira de Ciências e Tecnologia da SATC. O jogo desafia os jogadores a escapar da detenção resolvendo questões e superando obstáculos. Trabalhei em equipe e aprendi Unity3D e C# ao longo do desenvolvimento.";
        document.getElementById("prj3").textContent = "Um sistema de estacionamento inteligente baseado em IoT, projetado para monitorar vagas em tempo real e melhorar a experiência de estacionamento. O sistema utiliza um ESP32, sensores de distância, LEDs RGB e servomotores para detectar vagas disponíveis e controlar as barreiras de entrada e saída, com um site exibindo o status do estacionamento.";
        document.getElementById("prj3_tech").textContent = "Componentes eletrônicos";
        prj_techs.forEach(function(e) {
            e.textContent = "Tecnologias: ";
        });

        document.getElementById("experience_title").textContent = "Experiência";
        document.getElementById("certifications_title").textContent = "Certificações";

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

        document.getElementById("projects_title").textContent = menu2O;
        document.getElementById("prj_title").textContent = prj_titleO;
        document.getElementById("prj1").textContent = prj1O;
        document.getElementById("prj2").textContent = prj2O;
        document.getElementById("prj3").textContent = prj3O;
        document.getElementById("prj3_tech").textContent = prj3_techO;
        prj_techs.forEach(function(e) {
            e.textContent = prj_techO;
        });

        document.getElementById("experience_title").textContent = menu3O;
        document.getElementById("certifications_title").textContent = menu4O;

        document.getElementById("footer1").textContent = footer1O;
    }
});

window.addEventListener("load", function() {
    document.getElementById("loading").classList.add("hidden");
});

function updateHeaderHeight() {
    const header = document.getElementById("header");
    document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight + 10}px`
    );
}
updateHeaderHeight();
window.addEventListener("resize", updateHeaderHeight);