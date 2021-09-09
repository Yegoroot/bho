import connectDB from '../../../middleware/mongodb';
import User from '../../../models/user';
import { NextApiResponse, NextApiRequest } from 'next';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../../../constants';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (email) {
      try {
        var user = User.find({email});
        // Create new user
        if (!user) throw 'Username or password is incorrect';
        let passComapred = await bcrypt.compare(password, user.password)
        if (!passComapred) throw 'Username or password is incorrect';
        const token = jwt.sign({ sub: user._id }, JWT_TOKEN, { expiresIn: '7d' });
        return res.status(200).send({...user, token});
      } catch (error: any) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);