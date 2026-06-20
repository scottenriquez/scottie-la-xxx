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
        stylers: [{ color: '#d3c6aa' }],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{ visibility: 'on' }, { color: '#272e33' }, { width: 2 }],
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{ color: '#2e383c' }],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#374145' }, { weight: 1.2 }],
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#a7c080' }],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d3c6aa' }],
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#a7c080' }],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{ color: '#2e383c' }],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#343f44' }, { visibility: 'on' }],
      },
      {
        featureType: 'poi.business',
        elementType: 'geometry',
        stylers: [{ visibility: 'on' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{ color: '#a7c080' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#272e33' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#a7c080' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ color: '#3d484d' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [{ color: '#3d484d' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d3c6aa' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#272e33' }],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{ color: '#343f44' }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#859289' }],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#3d484d' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#7fbbb3' }],
      },
    ],
  };
};

export default getGoogleMapsOptionsSettings;
