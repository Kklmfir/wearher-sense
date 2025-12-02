import axios from 'axios';
const key = process.env.GOOGLE_MAPS_KEY;

export async function getTraffic(lat, lon){
  // as Google Maps Traffic is visual only, use Directions API for ETA (example)
  // For MVP return a stub or call Directions between two proximate points
  return {
    status: "Lancar",
    avg_speed: 40
  };
}
