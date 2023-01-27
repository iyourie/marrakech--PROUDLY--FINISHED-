import { Marker, MapContainer, TileLayer, useMapEvents, Rectangle } from "react-leaflet"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import './SmallMap.css'
import axios from 'axios';
let a, b;

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.on('click', function (e) {
                setPosition(e.latlng.lat <= 31.648257777 && e.latlng.lat >= 31.60495938257777 && e.latlng.lng <= -7.95 && e.latlng.lng >= -8.045026123047 ? e.latlng : { lat: 0, lng: 0 })
                a = e.latlng.lat;
                b = e.latlng.lng;
                if (e.latlng.lat <= 31.648257777 && e.latlng.lat >= 31.60495938257777 && e.latlng.lng <= -7.95 && e.latlng.lng >= -8.045026123047) {
                    document.querySelector('.SmallMap input').style.borderColor = '#21b939';
                    document.querySelector('.SmallMap .d').style.color = '#21b939';
                    document.querySelector('.SmallMap .qe').style.display = 'none';
                } else {
                    document.querySelector('.SmallMap input').style.borderColor = 'red';
                    document.querySelector('.SmallMap .d').style.color = 'red';
                    document.querySelector('.SmallMap .qe').style.display = 'block';
                }
            });
        }
    })

    const [address, setAddress] = useState('');
    useEffect(() => {
        axios.get('https://nominatim.openstreetmap.org/reverse', {
            params: {
                lat: a,
                lon: b,
                format: 'json'
            }
        })
            .then(response => {
                setAddress(response.data.display_name);
            })
    }, [position])
    document.querySelector('.SmallMap input').value = address
    return position === null ? null : (
        <Marker position={position} />
    )
}

let SmallMap = () => {
    const [isFocused, setIsFocused] = useState(false);
    const rectangle = [
        [31.60495938257777, -8.045026123047],
        [31.648257777, -7.95],
    ]
    const rectangleOptions = { color: '#21b939' }
    const [t] = useTranslation()
    return (
        <div className="SmallMap">
            <div>
                <span style={{ color: isFocused ? '#21b939' : 'rgb(199 199 199)' }} className="d">your pickup location</span>
                <input type="text" onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)} />
                <span className="qe">{t('qe')}</span>
            </div>
            <MapContainer center={[31.627595938257777, -7.99633026123047]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
                <Rectangle bounds={rectangle} pathOptions={rectangleOptions} />
            </MapContainer>
        </div>
    )
}
export default SmallMap