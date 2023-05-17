import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import FormVin from './pages/FormVin';
import ImageVin from './pages/ImageVin';

function App() {
	// const [ vin, setVin ] = useState('');
	// const handleVinChange = (vinInput) => {
	// 	setVin(vinInput);
	// };

	return (
		<BrowserRouter>
			<div className="App mx-auto max-w-3xl p-4 flex min-h-screen justify-center items-center">
				<div className="container mx-auto">
					<h1 className="text-3xl text-center font-bold underline mb-8">
						VINspector
					</h1>
					<div>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/form-vin" element={<FormVin />} />
							<Route path="/image-vin" element={<ImageVin />} />
						</Routes>

						{/* <VinImage /> */}
						{/* <FormVin vin={vin} onVinChange={handleVinChange} />
						<VehicleDetails vin={vin} /> */}
					</div>
				</div>
			</div>
		</BrowserRouter>
  );
}

export default App;
