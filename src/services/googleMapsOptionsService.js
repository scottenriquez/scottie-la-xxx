import {
  mapGreen,
  mapAqua,
  mapLabel,
  mapLabelMuted,
  mapInk,
  mapSurface,
  mapSurfaceRaised,
  mapSurfaceHigh,
} from '../theme/colors';

const getGoogleMapsOptionsSettings = () => {
  return {
    styles: [
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{ visibility: 'on' }],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [{ color: mapLabel }],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{ visibility: 'on' }, { color: mapInk }, { width: 2 }],
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{ color: mapSurface }],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: mapSurfaceRaised }, { weight: 1.2 }],
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [{ color: mapGreen }],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: mapLabel }],
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text.fill',
        stylers: [{ color: mapGreen }],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{ color: mapSurface }],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: mapSurfaceRaised }, { visibility: 'on' }],
      },
      {
        featureType: 'poi.business',
        elementType: 'geometry',
        stylers: [{ visibility: 'on' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{ color: mapGreen }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: mapInk }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.stroke',
        stylers: [{ color: mapGreen }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ color: mapSurfaceHigh }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [{ color: mapSurfaceHigh }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{ color: mapLabel }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.stroke',
        stylers: [{ color: mapInk }],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{ color: mapSurfaceRaised }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: mapLabelMuted }],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: mapSurfaceHigh }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: mapAqua }],
      },
    ],
  };
};

export default getGoogleMapsOptionsSettings;
