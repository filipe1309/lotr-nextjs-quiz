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
  if (!db.bg.includes('http')) {
    const { host } = req.headers;
    const protocol = req.protocol ? (`${req.protocol}://`) : 'http://';
    db.bg = protocol + host + db.bg;

    db.questions.map((question) => {
      // eslint-disable-next-line no-param-reassign
      question.image = protocol + host + question.image;
      return question;
    });
  }

  res.json(db);
}
