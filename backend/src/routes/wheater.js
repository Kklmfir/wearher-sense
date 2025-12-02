import express from 'express';
import { getBMKGWeather } from '../services/bmkg.js';
import { getTraffic } from '../services/googleMaps.js';
import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 60 });

const router = express.Router();

router.get('/', async (req,res) => {
  const lat = parseFloat(req.query.lat);
  const lon = parseFloat(req.query.lon);
  if (!lat || !lon) return res.status(400).json({error: 'lat & lon required'});

  const cacheKey = `${lat}_${lon}`;
  if (cache.has(cacheKey)) return res.json(cache.get(cacheKey));

  try {
    const weather = await getBMKGWeather(lat, lon); // implement in services/bmkg.js
    const traffic = await getTraffic(lat, lon); // implement service
    const payload = { location:{lat,lon}, weather, traffic };
    cache.set(cacheKey, payload);
    res.json(payload);
  } catch (err) {
    console.error(err);
    res.status(500).json({error:'failed to fetch'});
  }
});

export default router;
