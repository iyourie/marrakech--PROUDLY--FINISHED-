//import icons
import { FaMapMarkerAlt } from "react-icons/fa";
//import files
import './Map.css'
// import some things for the map
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;




const positionData = [
    {
        position: [31.631090276143343, -7.997853730654261],
        content: 'Marrakech',
    },
    {
        position: [31.28743251135038, -7.380806235211901],
        content: "Tizi n'Tichka",
    },
    {
        position: [31.047564524695026, -7.131843800994853],
        content: 'Ait Benhaddou',
    },
    {
        position: [31.25267890462786, -5.387249730660967],
        content: "Drâa-Tafilalet",
    }, {
        position: [31.52058050189776, -5.5293850556210336],
        content: "Tinghir",
    }, {
        position: [31.524811954862887, -5.528333823018863],
        content: 'Todra River (free time, view)',
    }, {
        position: [31.279549548559665, -4.259016386911674],
        content: 'Rissani (traditional market)',
    }, {
        position: [32.96707208273402, -4.068948609285434],
        content: 'Erg Chebbi, Morocco (camel ride, view, sunset)',
    }, {
        position: [31.15353411255731, -3.9326396232212297],
        content: 'Merzouga (dinner, free time, camp activities)',
    }, {
        position: [30.933293883736027, -6.937571197180429],
        content: 'Ouarzazate (lunch, free time)',
    }, {
        position: [31.148753521317417, -7.9301162366758104],
        content: 'Atlas Mountains',
    }, {
        position: [31.631090276143343, -7.997853730654262],
        content: 'Marrakech ',
    },
];

const MyMapp = () => {
    const positionArray = positionData.map(data => data.position);

    return (
        <div className="map">
            <div className="map-itenerary">
                <span className='hoursNum'>72 hours</span>
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Marrakech</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Tizi n'Tichka</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Ait Benhaddou</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Drâa-Tafilalet</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Tinghir</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Todra River (free time, view)</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Rissani (traditional market)</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Erg Chebbi, Morocco (camel ride, view, sunset)</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Merzouga (dinner, free time, camp activities)</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Ouarzazate (lunch, free time)</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Atlas Mountains</span>
                </div>
                <hr />
                <div>
                    <i><FaMapMarkerAlt /></i>
                    <span>Marrakech</span>
                </div>
            </div>
            <MapContainer center={[31.631090276143343, -7.997853730654261]} zoom={6}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {positionData.map(data => (
                    <Marker position={data.position} key={data.position}>
                        <Popup>{data.content}</Popup>
                    </Marker>
                ))}
                <Polyline positions={positionArray} />
            </MapContainer>
        </div>
    );
};

export default MyMapp 