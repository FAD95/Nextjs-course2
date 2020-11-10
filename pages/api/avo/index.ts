import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();
  try {
    const allEntries = await db.getAll();
    const length = allEntries.length;
    response.status(200).json({ data: allEntries, length });
  } catch (error) {
    console.error(error);
  }
};

export default allAvos;
