import { NextApiResponse, NextApiRequest } from 'next';
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const body = req.body;

    if (!body.email || !body.subject || !body.message) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'Missing email, body or message' })
    }

    
    return res.status(200).send({ message: 'Success' })
}