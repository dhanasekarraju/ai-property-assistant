import api from "./api";

export const getPropertyByUnit = async (unitNo: string) => {
    const res = await api.get(`/properties/${unitNo}`);
    return res.data;
};

export const getAllProperties = async () => {
    const res = await api.get("/properties");
    return res.data;
};