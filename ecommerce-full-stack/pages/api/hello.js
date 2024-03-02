import db from '../../Utils/db'

export default async function handler(req, res) {
  await db.connect()
  await db.disconnect()
  res.status(200).json({ name: 'Vlad760 ☠️', description: 'learning nextJS' })
}
