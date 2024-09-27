import { landingData } from '../data/mockdata.js'

const baseResponseApi = {
    data: [],
    msg: "Data fetched successfully",
    status: "success"
};

export const getLandingData = (req, res, next) => {
    try {
        const responseApi = { ...baseResponseApi };
        const statusCode = landingData ? 200 : 204;
        responseApi.msg = "Datos obtenidos con éxito";
        responseApi.data = landingData;
        res.status(statusCode).json(responseApi);
    } catch (error) {
        console.error("Error:", error);
        const errorResponse = { ...baseResponseApi, status: "error", msg: "Tuvimos un error al obtener la BD" };
        res.status(500).json(errorResponse);
    }
};
