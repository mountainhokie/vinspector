import React, { useState, useEffect } from 'react';
import { CheckVin } from './CheckVin';

function VehicleDetails( { vin } ) {
    const [vehicleData, setVehicleData] = useState(null);

    useEffect(() => {
        console.log('vehicleDetails', vin)
        if(vin.length>16) {
            CheckVin(vin).then((vehicle) => {
                setVehicleData(vehicle)
            });
        }
    }, [vin]);

    if (!vehicleData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="font-bold mb-4">Vehicle Details</h2>
            <ul className="mb-8">
            { vehicleData.map((item, index) => {
                if ( item.Value?.trim().length > 1 && item.Value?.trim() !== 'Not Applicable' ) {
                    return (
                    <li key={index} className="border-solid border-2 border-sky-500 rounded-lg space-y-4 p-4 mb-2">
                        <strong>{item.Variable}: </strong>
                        <span>{item.Value}</span>
                    </li>
                    );
                }
                return null;
            })}
            </ul>
        </div>
    );
}

export default VehicleDetails;
