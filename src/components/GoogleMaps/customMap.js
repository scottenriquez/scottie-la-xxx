import getGoogleMapsAPIKey from '../../services/googleMapsAPIKeyService.js';
import getGoogleMapsOptionsSettings from '../../services/googleMapsOptionsService.js';
import { APIProvider, InfoWindow, Map } from '@vis.gl/react-google-maps';

export default function CustomMap({ defaultZoom, defaultCenter, markers }) {
  const { styles } = getGoogleMapsOptionsSettings();
  return (
    <APIProvider apiKey={getGoogleMapsAPIKey()}>
      <Map defaultCenter={defaultCenter} defaultZoom={defaultZoom} styles={styles}>
        {markers.map(({ lat, lng }, i) => (
          <InfoWindow key={i} position={{ lat, lng }} options={{ closeOnClick: false }} style={{ color: 'black' }}>
            <p>{`(${lat}, ${lng})`}</p>
          </InfoWindow>
        ))}
      </Map>
    </APIProvider>
  );
}
