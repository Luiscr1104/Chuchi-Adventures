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
        id: "restaurante-diego-ulate",
        slug: "restaurante-diego-ulate",
        name: "Restaurante Diego Ulate",
        rating: 4.9,
        reviews: 146,
        priceRange: "₡5 000-10 000",
        address: "9CC5+GG, Provincia de Alajuela, San Ramon",
        phone: "+506 8820 1065",
        accessibility: [
            "Entrada accesible para personas en silla de ruedas",
            "Espacio accesible para personas en silla de ruedas",
            "Sanitarios accesibles para personas en silla de ruedas"
        ],
        serviceOptions: ["Para llevar", "Consumo en el lugar", "Entrega a domicilio"],
        highlights: ["Buen café", "Buenos cócteles", "Deliciosos postres"],
        popularFor: ["Almuerzo", "Cena", "Cena en solitario"],
        offers: ["Alcohol", "Aperitivos", "Bocadillos", "Café", "Cerveza", "Cócteles"],
        diningOptions: ["Almuerzo", "Cena", "Postres", "Servicio a la mesa"],
        services: ["Sanitario", "Tiene bar"],
        atmosphere: ["A la moda", "Agradable", "Informal"],
        usualPublic: ["Grupos", "Turistas"],
        planning: [],
        payments: ["Pagos móviles mediante NFC", "Tarjetas de crédito", "Tarjetas de débito"],
        kids: ["Ideal para ir con niños"],
        parking: ["Hay suficiente espacio", "Estacionamiento gratuito", "Estacionamiento gratuito en la calle"],
        images: [
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/a14304bc-c954-4c4e-6416-9106c4181100/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/eb8a9a5e-4f86-4ef1-aa7d-0cb89dcefa00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/115aeffb-6171-4c09-db97-7cb2f6cdca00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/457ecfe8-16e0-4b69-4702-1afab9845d00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/b9e038b3-fdd9-4190-d6f2-0b02dd7b5d00/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/491eb96b-d6d5-4869-936f-4d59a45fd900/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/cf193ee0-08bb-484d-ae5d-fcf476bf9000/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/c1b39cb9-74c8-4fa0-2d90-2654d7c48600/public",
            "https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/43bb23da-a88c-4522-4bd7-ea6248d45200/public"
        ],
        googleMapsUrl: "https://maps.app.goo.gl/byL8THeyA6eBRXnv5",
        wazeUrl: "https://waze.com/ul?q=Restaurante+Diego+Ulate",
        bestReview: {
            author: "C K",
            text: "This food was absolutely DELICIOUS!!! We ordered the shrimp ceviche, 2 person assortment, and the beef fajita and more (mango smoothie and passion fruit smoothie).In total, it only cost $45! (2 kids 3 adults) The 2 person assortment included a sort of chicken that was so delicious! They also gave us a bunch of starters like nachos with this amazing bean dip, fries, salad, corn chips, and small drinks like this tomato chili drink and a (horchata?) looking drink. One of the staff was so nice to us and stopped by often to check on us. Even though we don’t speak Spanish, he (luckily) spoke some English. The place was decorated nicely and not too crowded (Christmas Eve?) around 6pm.I love this place would recommend (vibes are so chill!)",
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
