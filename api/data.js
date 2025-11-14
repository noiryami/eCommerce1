import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const dbPath = path.join(process.cwd(), 'src/api/db.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    const jsonData = JSON.parse(data);
    
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read data' });
  }
}
