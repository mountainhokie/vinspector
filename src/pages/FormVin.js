import { useEffect, useState } from "react";
import VehicleDetails from "../components/VehicleDetails";
import { Link } from "react-router-dom"

function VinForm({ vin2 }) {
    const [ vinInput, setVinInput ] = useState(vin2);
    const [ vin, setVin ] = useState();
    //JH4DA1850JS005062 Acura
    const handleInputChange = (e) => {
		setVinInput(
			e.currentTarget.value
			.toUpperCase()
			.replace(/[^A-Z\d]/g, '')
			.replace(/O/g, '0')
			.replace(/I/g, '1')
			.replace(/Q/g, '9')
		);
    };
    

    useEffect(() => {
        console.log(vinInput);
        if(vinInput?.length === 17)
            setVin(vinInput);
        else if(vinInput?.length ===0)
            setVin('');
    }, [vinInput])
	
    
    return (
        <>
            <div className="mb-16">
                <form className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2" 
                    >
                        VIN
                    </label>
                    <input
                        type="text"
                        className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter VIN"
                        value={vinInput}
                        onInput={handleInputChange}
                        maxLength={17}
                        autoFocus
                    />
                </form>
            </div>

            {
                vin && 
                <VehicleDetails vin={vin} />
            }

            <Link
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                to="/"
            >
                <svg className="h-8 w-8 text-black mr-3"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /></svg>                Back
            </Link>    

        </>
    )
    
}

export default VinForm