import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import VehicleDetails from './VehicleDetails';

const VinImage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState('');
    const [text, setText] = useState('');
    const [progress, setProgress] = useState(0);
    const [vin, setVin] = useState();

    const handleChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    const handleInputChange = (e) => {
        setText(e.target.value)
    }

    const handleVinSubmit = (e) => {
        e.preventDefault();
        console.log(text)
        setVin(text);
        //setVin()
    }

    const handleSubmit = () => {
        setIsLoading(true);
        Tesseract.recognize(image, 'eng', {
            logger: (m) => {
                if (m.status === 'recognizing text') {
                    setProgress(parseInt(m.progress * 100));
                }
            },
        })
            .catch((err) => {
                console.error(err);
            })
            .then((result) => {
                // Get Confidence score
                let confidence = result.data.confidence
                console.log(result);
                console.log(confidence);
                setText(result.data.text);
                setIsLoading(false);
            });
    };

    return (
        <div className="mx-auto">
            {isLoading && (
                <>
                    <progress className="form-control min-w-full" value={progress} max="100">
                        {progress}%{' '}
                    </progress>{' '}
                    <p className="text-center">Converting:- {progress} %</p>
                </>
            )}
            {!isLoading && !text && (
                <>
                    <form>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900"
                            htmlFor="vehicleImage"
                        >
                            Upload file
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full mb-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                            aria-describedby="vehicleImageHelp"
                            id="vehicleImage"
                            type="file"
                            onChange={handleChange}
                        />
                        <button 
                            type="submit"
                            onClick={handleSubmit} 
                            className="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Convert Image
                        </button>
                    </form>
                    <div 
                        className="mt-1 mb-8 text-sm text-gray-500 dark:text-gray-300" 
                        id="vehicleImageHelp">
                            Upload a picture of the VIN located on the dashboard.
                    </div>
                </>
            )}
            {!isLoading && text && (
                <>
                    <h2 className="mb-4 font-bold">Converted Text</h2>
                    <form className="mb-16" onSubmit={handleVinSubmit}>
                        <label 
                            className="block text-gray-700 text-sm font-bold mb-2" 
                            htmlFor="vin"
                        >
                            Vin
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="vin" 
                            name="vin"
                            type="text" 
                            value={text}
                            onChange={handleInputChange}
                        />
                        <button
                            className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                        >
                            <svg className="h-8 w-8 text-black mr-3"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                            Submit
                        </button>
                    </form>

                    <h2 className="mb-8 font-bold">Image Converted</h2>
                    <div className="mb-8">
                        <img src={image} className="App-logo" alt="Uploaded" />
                    </div>

                    <div class="mb-8 bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md" role="alert">
                        <div class="flex">
                            <div class="py-1"><svg class="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                            <div>
                            <p class="font-bold">Double Check The Text Results</p>
                            <p class="text-sm">The Image to Text feature may produce some inaccurate results depending on the image as well as the numbers/letters in sequence.  Similar characters like '0' and 'O' or '5' and 'S' can be mixed as well as.</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {!isLoading && text && vin && (
                <>
                    <VehicleDetails vin={vin} />
                </>
            )}
        </div>
    );
};

export default VinImage;