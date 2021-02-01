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

  // Remap local images, to allow ohers to use
  const { host } = req.headers;
  db.bg = host + db.bg;

  db.questions.map((question) => {
    // eslint-disable-next-line no-param-reassign
    question.image = host + question.image;
    return question;
  });

  res.json(db);
}
