import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const avatarUrl = "https://github.com/love-quinn.png/"

// Fix Leaflet's default icon issue with React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

export default function App() {

    return (
        <div className="container h-screen w-screen mx-auto flex items-center justify-center">
            <div 
                className="flex flex-col bg-gray-800 shadow-lg py-4 px-6 mx-4 rounded-md">
                <div className="flex flex-row items-center">
                    <img className="w-24 rounded-full"
                        src={avatarUrl}
                        alt="User Avatar" />

                    <div className="ml-4">
                        <h3 className="font-semibold text-xl">Love Quinn</h3>
                        <h4 className="text-indigo-300 pt-1">Front-End Developer</h4>
                    </div>
                </div>
                
                <div className="mt-6">
                    <h2
                        className="font-semibold text-2xl mb-2">
                            Bio
                    </h2>
                    <p className="text-gray-300 font-light mt-1 max-lg text-justify">
                        Lucas(Love Quinn), is a passionated Front-end React Developer based in Sao Paulo, Brazil. 📍
                    </p>
                </div>

                <div className="mt-4">
                    <h2 className="font-semibold text-2xl mb-2">Location</h2>
                        <div className="md:w-1/3  ">
                            <MapContainer className="rounded-lg " center={[-23.69149, -46.58391]} zoom={9} style={{ height: "200px", width: "100%" }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[-23.69149, -46.58391]}>
                                    <Popup>
                                        Love Quinn is here.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                </div>

            </div>
        </div>
    )
}