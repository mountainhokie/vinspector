import axios from "axios";

export const CheckVin = async (vin) => {
    const apiURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/';
    const resp = await axios.get(`${apiURL}${vin}?format=json`)
    return resp.data.Results;
}