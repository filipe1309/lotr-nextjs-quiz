import db from '../../db.json';

export default function dbHandler(req, res) {
  // Allow CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  db.bg = 'https://wallpaperset.com/w/full/8/a/b/208233.jpg';

  res.json(db);
}
