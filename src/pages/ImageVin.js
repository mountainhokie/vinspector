import { Link } from "react-router-dom";
import VinImage from "../components/VinImage";

function ImageVin({ vin, onVinChange }) {
    return (
        <>
            <VinImage />
            <Link
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                to="/"
            >
                <svg class="h-8 w-8 text-black mr-3"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /></svg>                Back
            </Link>  
        </>
    )
    
}

export default ImageVin