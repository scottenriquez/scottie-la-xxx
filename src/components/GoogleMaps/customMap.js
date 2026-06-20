import getGoogleMapsAPIKey from '../../services/googleMapsAPIKeyService.js';
import getGoogleMapsOptionsSettings from '../../services/googleMapsOptionsService.js';
import { APIProvider, InfoWindow, Map } from '@vis.gl/react-google-maps';

export default function CustomMap({ defaultZoom, defaultCenter, markers }) {
  const { styles } = getGoogleMapsOptionsSettings();
  return (
    <APIProvider apiKey={getGoogleMapsAPIKey()}>
      <Map defaultCenter={defaultCenter} defaultZoom={defaultZoom} styles={styles}>
        {markers.map(({ lat, lng }, index) => (
          <InfoWindow key={index} position={{ lat, lng }} options={{ closeOnClick: false }} style={{ color: 'black' }}>
            <p style={{ margin: 0, fontSize: '0.7rem' }}>{`(${lat}, ${lng})`}</p>
          </InfoWindow>
        ))}
      </Map>
    </APIProvider>
  );
}
