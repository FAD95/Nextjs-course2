import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const avo = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB();
  const id = request.query.id;
  try {
    const entry = await db.getById(id as string);
    response.status(200).json(entry);
  } catch (error) {
    console.error(error);
  }
};

export default avo;
