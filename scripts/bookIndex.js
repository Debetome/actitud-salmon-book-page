import introduction from "url:../content/introduction.md"
import part1 from "url:../content/part1.md"
import part2 from "url:../content/part2.md"
import part3 from "url:../content/part3.md"

const bookIndex = [
    {
        "title": "INTRODUCCIÓN",
        "content": `${introduction}`,
        "sections": [
            {
                "id": "encontrar",
                "title": "¿Qué vas a encontrar en este libro?"
            }
        ]
    },
    {
        "title": "PARTE 1: Fundamentos de la Actitud Salmón",
        "content": `${part1}`,
        "sections": [
            {
                "id": "depende",
                "title": "¿De quién depende el futuro de tu negocio?"
            },
            {
                "id": "lucha",
                "title": "Lucha contra los supervillanos"
            },
            {
                "id": "arma",
                "title": "Tu arma secreta: la Actitud Salmón"
            }            
        ]
    },
    {
        "title": "PARTE 2: Actitud Salmón en tu negocio",
        "content": `${part2}`,
        "sections": [
            {
                "id": "actitud",
                "title": "La Actitud Salmón genera negocio"
            },
            {
                "id": "caminos",
                "title": "Cuatro caminos para hacer negocio a contracorriente"
            },
            {
                "id": "clientes",
                "title": "CLIENTES: Repensando personas y necesidades"
            },
            {
                "id": "oferta",
                "title": "OFERTA: Cuestionarme lo que ofrezco"
            },
            {
                "id": "venta",
                "title": "VENTA: Sacar provecho del nuevo proceso de compra"
            },
            {
                "id": "comunicacion",
                "title": "COMUNICACIÓN: El vehículo hacia el cliente"
            }            
        ]
    },
    {
        "title": "PARTE 3: Poner en marcha tu Actitud Salmón",
        "content": `${part3}`,
        "sections": [
                       
        ]
    },
    {
        "title": "CONCLUSIÓN. Haz tu propia receta",
        "content": ``,
        "sections": [
                       
        ]
    },
]

export default bookIndex