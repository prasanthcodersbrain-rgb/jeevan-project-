const toRadians = (value) => (Number(value) * Math.PI) / 180;

export const calculateDistanceKm = (fromLat, fromLng, toLat, toLng) => {
  const earthRadiusKm = 6371;
  const dLat = toRadians(Number(toLat) - Number(fromLat));
  const dLng = toRadians(Number(toLng) - Number(fromLng));
  const lat1 = toRadians(fromLat);
  const lat2 = toRadians(toLat);

  const haversine =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const angularDistance = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));

  return earthRadiusKm * angularDistance;
};
