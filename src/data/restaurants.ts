export interface Restaurant {
    id: string;
    slug: string;
    name: string;
    rating: number;
    reviews: number;
    priceRange: string;
    address: string;
    phone: string;
    accessibility: string[];
    serviceOptions: string[];
    highlights: string[];
    popularFor: string[];
    offers: string[];
    diningOptions: string[];
    services: string[];
    atmosphere: string[];
    usualPublic: string[];
    planning: string[];
    payments: string[];
    kids: string[];
    parking: string[];
    images: string[];
    googleMapsUrl: string;
    wazeUrl: string;
    hours?: { [key: string]: string };
    bestReview?: {
        author: string;
        text: string;
        rating: {
            food: number;
            service: number;
            atmosphere: number;
        };
    };
}

export const restaurants: Restaurant[] = [
    {
        id: "restaurante-ross",
        slug: "restaurante-ross",
        name: "Restaurante Ross",
        rating: 4.9,
        reviews: 172,
        priceRange: "₡5 000-10 000",
        address: "frente al Liceo de Chachagua, Chachagua - Los Angeles, Provincia de Alajuela, San Ramón, Chachagua, 20213",
        phone: "+506 8820 1065",
        accessibility: [
            "Entrada accesible para personas en silla de ruedas",
            "Espacio accesible para personas en silla de ruedas",
            "Estacionamiento accesible para personas en silla de ruedas",
            "Sanitarios accesibles para personas en silla de ruedas"
        ],
        serviceOptions: [
            "Asientos al aire libre",
            "Entrega a domicilio",
            "Para llevar",
            "Consumo en el lugar"
        ],
        highlights: ["Buen café", "Buenos cócteles"],
        popularFor: ["Almuerzo", "Cena", "Cena en solitario"],
        offers: ["Alcohol", "Aperitivos", "Bebidas fuertes", "Bocadillos", "Café", "Cerveza", "Cócteles", "Platos vegetarianos", "Vino"],
        diningOptions: ["Almuerzo", "Cena", "Postres", "Espacio con asientos", "Servicio a la mesa"],
        services: ["Sanitario"],
        atmosphere: ["A la moda", "Agradable", "Informal", "Relajado"],
        usualPublic: ["Grupos", "Turistas"],
        planning: ["Se aceptan reservas"],
        payments: ["Pagos móviles mediante NFC", "Tarjetas de crédito", "Tarjetas de débito"],
        kids: ["Ideal para ir con niños"],
        parking: ["Hay suficiente espacio", "Estacionamiento gratuito", "Estacionamiento gratuito en la calle"],
        images: [
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/2f2641ce-1be8-40c2-7448-bd2448bdf300/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/250c9657-b1fe-4366-b37e-bf7d4026e700/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/15fcf0a5-bd22-466d-5fcb-1aeae8041e00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/2c86e087-885d-478d-7a82-aa7131558400/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/b5a57aae-3d28-4172-06fc-ad196f256000/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/63eef194-250b-40ec-2010-edefd360c600/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/c0602889-3c95-4d27-a89e-807578281a00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/97acd5ed-a1cb-45a5-5602-184980728400/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/96436c44-094e-48a1-a06c-d31c4851e500/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/01f3b29f-f59e-44d6-d648-7aea5815e500/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/602eca15-c3e9-4517-1a47-823df98bf100/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/3c52faa0-0cd2-404c-c7da-5aa67a26b500/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/3b83a4c1-00d6-4e7b-398b-fff59d44ab00/public"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/aKWNQNJ9WaWogxM58",
        wazeUrl: "https://waze.com/ul?q=Restaurante+Ross+Chachagua",
        hours: {
            "jueves": "11 a. m.–10 p. m.",
            "viernes": "11 a. m.–10 p. m.",
            "sábado": "11 a. m.–10 p. m.",
            "domingo": "11 a. m.–10 p. m.",
            "lunes": "11 a. m.–10 p. m.",
            "martes": "11 a. m.–10 p. m.",
            "miércoles": "11 a. m.–10 p. m."
        },
        bestReview: {
            author: "Robert Guay",
            text: "Restaurante Ross is an absolute gem. The food and batidos are consistently delicious, the portions are generous, and everything is clearly made with care. The environment is pleasant and relaxed, making it a perfect place to enjoy a meal. What truly sets this place apart is the staff. They are genuinely kind, welcoming, and wonderful every time. The menu has a variety of items and prices are very reasonable for the quality and quantity you get. This is hands down my favorite place to dine out in the area, and I can’t recommend it enough.",
            rating: { food: 5, service: 5, atmosphere: 5 }
        }
    },
    {
        id: "restaurante-el-parrillero",
        slug: "restaurante-el-parrillero",
        name: "Restaurante El Parrillero",
        rating: 4.5,
        reviews: 13,
        priceRange: "₡5 000-10 000",
        address: "Chachagua, Provincia de Alajuela",
        phone: "+506 8820 1065",
        accessibility: [
            "Entrada accesible para personas en silla de ruedas",
            "Espacio accesible para personas en silla de ruedas"
        ],
        serviceOptions: ["Consumo en el lugar", "Para llevar"],
        highlights: ["Comida casera", "Ambiente familiar"],
        popularFor: ["Almuerzo", "Cena"],
        offers: ["Aperitivos", "Bocadillos", "Café", "Platos vegetarianos"],
        diningOptions: ["Almuerzo", "Cena", "Espacio con asientos", "Servicio a la mesa"],
        services: ["Sanitario"],
        atmosphere: ["Agradable", "Informal", "Relajado", "Familiar"],
        usualPublic: ["Familias", "Grupos", "Turistas"],
        planning: [],
        payments: ["Tarjetas de crédito", "Tarjetas de débito"],
        kids: ["Ideal para ir con niños"],
        parking: ["Hay suficiente espacio", "Estacionamiento gratuito"],
        images: [
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/0c5252d6-009e-42d4-5c07-f84d85c7d900/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/6c69e10c-e5d2-4456-5ccd-41bd96d69200/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/28eb712d-989d-4bb8-357d-652046a1bc00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/47c91bb1-8917-4bc6-c3ec-cd52b16cca00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/890f4a64-b4f1-41cb-c08d-ee27c5da4800/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/9ba07f5f-26b4-4f83-1e0d-13a6d436cf00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/8a343a41-53e1-4b5f-5323-3d9037426000/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/0ebc9e56-fba4-4653-2a7f-d7c8ff42c200/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/76e859a9-0e77-4d38-45f1-0972fe59d500/public"
        ],
        googleMapsUrl: "https://www.google.com/maps/place/Restaurante+Parrillero/@10.4030042,-84.597484,17z/data=!4m15!1m8!3m7!1s0x8fa0735af063ac81:0x1933e04418a25aaa!2sRestaurante+Parrillero!8m2!3d10.4029989!4d-84.5949091!10e1!16s%2Fg%2F11srb0f1rc!3m5!1s0x8fa0735af063ac81:0x1933e04418a25aaa!8m2!3d10.4029989!4d-84.5949091!16s%2Fg%2F11srb0f1rc",
        wazeUrl: "https://waze.com/ul?q=Restaurante+El+Parrillero+La+Fortuna",
        hours: {
            "lunes": "10 a. m.–11:30 p. m.",
            "martes": "10 a. m.–11:30 p. m.",
            "miércoles": "10 a. m.–11:30 p. m.",
            "jueves": "10 a. m.–11:30 p. m.",
            "viernes": "10 a. m.–11:30 p. m.",
            "sábado": "10 a. m.–11:30 p. m.",
            "domingo": "10 a. m.–11:30 p. m."
        },
        bestReview: {
            author: "Severine Lupi",
            text: "After a long day of driving and zip lining we were pretty hungry and did not want to cook. This place was perfect for us. They had food for everyone in the family and it was very good. The staff was very nice and welcoming.",
            rating: { food: 5, service: 5, atmosphere: 5 }
        }
    },
    {
        id: "pollo-chachagua",
        slug: "pollo-chachagua",
        name: "Pollo Chachagua",
        rating: 4.4,
        reviews: 256,
        priceRange: "₡4 000-6 000",
        address: "CC52+3HG, Provincia de Alajuela, San Ramón",
        phone: "+506 8820 1065",
        accessibility: [
            "Entrada accesible para personas en silla de ruedas",
            "Espacio accesible para personas en silla de ruedas",
            "Estacionamiento accesible para personas en silla de ruedas",
            "Sanitarios accesibles para personas en silla de ruedas"
        ],
        serviceOptions: [
            "Asientos al aire libre",
            "Entrega a domicilio",
            "Para llevar",
            "Consumo en el lugar"
        ],
        highlights: ["Buen café", "Deliciosos postres"],
        popularFor: ["Almuerzo", "Cena", "Cena en solitario"],
        offers: ["Aperitivos", "Bocadillos", "Café"],
        diningOptions: ["Almuerzo", "Cena", "Postres", "Espacio con asientos", "Servicio a la mesa"],
        services: ["Sanitario"],
        atmosphere: ["A la moda", "Agradable", "Informal", "Relajado"],
        usualPublic: ["Grupos", "Turistas"],
        planning: ["Se aceptan reservas"],
        payments: ["Pagos móviles mediante NFC", "Tarjetas de crédito", "Tarjetas de débito"],
        kids: ["Ideal para ir con niños", "Menú para niños", "Sillas altas"],
        parking: ["Hay suficiente espacio", "Estacionamiento gratuito", "Estacionamiento gratuito en la calle"],
        images: [
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/af03858a-a243-4b4c-b311-fa05e37e3100/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/81266d85-73a9-4b5e-6b4a-f290284a2300/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/c8318f4e-d5af-44ec-59e6-ed050efe8f00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/a1feec66-2aec-4d89-f090-ce466f5da600/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/be96d3bc-61fc-4d2f-f82d-be9ac56e9a00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/98edba5a-c2e9-48a7-d3d9-29dc09c7eb00/public"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/ug7jmPRBDueCrGwL6",
        wazeUrl: "https://waze.com/ul?q=Pollo+Chachagua",
        hours: {
            "jueves": "11 a. m.–9 p. m.",
            "viernes": "11 a. m.–9 p. m.",
            "sábado": "11 a. m.–9 p. m.",
            "domingo": "11 a. m.–9 p. m.",
            "lunes": "11 a. m.–9 p. m.",
            "martes": "11 a. m.–9 p. m.",
            "miércoles": "11 a. m.–9 p. m."
        },
        bestReview: {
            author: "Wandering Cuban",
            text: "Do not pass this up. Some of the best fried chicken you’ll find anywhere, full stop. The move is the casado with fried chicken—rice, beans, a small mix of vegetables, and salad built around a main dish that absolutely delivers. Simple plate, flawless execution.\n\nYou can also order a quarter chicken with chips, and honestly, that’s more than enough. The chicken breast is shockingly juicy, perfectly seasoned, and fried just right. No dryness. No gimmicks.",
            rating: { food: 5, service: 5, atmosphere: 5 }
        }
    }
];
