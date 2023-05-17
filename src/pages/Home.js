import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="mx-auto max-w-xs flex flex-col rounded-md shadow-sm">
            <Link
                className="mb-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                to="/form-vin"
            >
                <svg className="h-8 w-8 text-black mr-3"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17 15l4 4m0 -4l-4 4" />  <path d="M7 6v-1h11v1" />  <line x1="7" y1="19" x2="11" y2="19" />  <line x1="13" y1="5" x2="9" y2="19" /></svg>
                Enter Vin
            </Link>
            <Link
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                to="/image-vin"
            >
                <svg className="h-8 w-8 text-black mr-3"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <circle cx="8.5" cy="8.5" r="1.5" />  <polyline points="21 15 16 10 5 21" /></svg>
                Snap Picture of Vin
            </Link>
        </div>
    )
}

export default Home