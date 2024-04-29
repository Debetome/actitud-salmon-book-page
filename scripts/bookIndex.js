import introduction from "url:../content/introduction.txt"
import part1 from "url:../content/part1.txt"
import part2 from "url:../content/part2.txt"
import part3 from "url:../content/part3.txt"
import conclusion from "url:../content/conclusion.txt"

const BASE_DIR = "https://raw.githubusercontent.com/Debetome/actitud-salmon-book-webpage/master/content";

const bookIndex = [
    {
        "title": "INTRODUCCIÓN",
        "content": `${BASE_DIR}/introduction.txt`,
        "sections": [
            "¿Qué vas a encontrar en este libro?"            
        ]
    },
    {
        "title": "PARTE 1: Fundamentos de la Actitud Salmón",
        "content": `${BASE_DIR}/part1.txt`,
        "sections": [
            "¿De quién depende el futuro de tu negocio?",
            "Lucha contra los supervillanos",
            "Tu arma secreta: la Actitud Salmón"
        ]
    },
    {
        "title": "PARTE 2: Actitud Salmón en tu negocio",
        "content": `${BASE_DIR}/part2.txt`,
        "sections": [
            "La Actitud Salmón genera negocio",
            "Cuatro caminos para hacer negocio a contracorriente",
            "CLIENTES: Repensando personas y necesidades",
            "OFERTA: Cuestionarme lo que ofrezco",
            "VENTA: Sacar provecho del nuevo proceso de compra",
            "COMUNICACIÓN: El vehículo hacia el cliente"
        ]
    },
    {
        "title": "PARTE 3: Poner en marcha tu Actitud Salmón",
        "content": `${BASE_DIR}/part3.txt`,
        "sections": [
            "7 ingredientes para ponerse en acción",
            "Escapa de la forma de hacer tradicional",
            "Procesos y herramientas",
            "Mejor hoy que mañana"
        ]
    },
    {
        "title": "CONCLUSIÓN. Haz tu propia receta",
        "content": `${BASE_DIR}/conclusion.txt`,
        "sections": [
            "Agradecimientos",
            "Bibliografía",
            "Sobre mí. Por si quieres conocerme algo más"
        ]
    },
]

export default bookIndex