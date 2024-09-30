import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js';
import { PORT, DOMAIN, URL } from './config/config.js'
import path from 'path';
import { __dirname } from './config/config.js';

const app = express();

// ----------------------------------
// Midlewares: 
// ----------------------------------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public"))) 

app.use("/api/v1", indexRoutes);
// GET /
app.get("/", (req, res)=> {
    try {
        res.setHeader("Content-Type", "text/html")
    const LandingHTML = `<h1>Bienvenidos a nuestra REST-API que consiste en:</h1>
    <ul>
        <li>Una aplicación en ReactJS usando la maquetación proporcionada.</li>
        <li>Una API REST en ExpressJS que devuelva la información necesaria para la aplicación.</li>
        <li>Gestion de variables de entonrno.</li>
        <li>Uso de rutas con react-router-dom.</li>
        <li>Uso de hooks.</li>
        <li>Uso de fetch.</li>
        <li>Uso de Vercel para el deploy.</li>
    </ul>
    `
        res.status(200).send(LandingHTML);

    }	catch (error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: "No estoy funcionando",
        data: null,
        success:"",
        cant: 0
    })
})


app.listen(PORT, () => {
    console.log(`Server running on ${URL}`);
});