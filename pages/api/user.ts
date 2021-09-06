import connectDB from '../../middleware/mongodb';
import User from '../../models/user';
import { NextApiResponse, NextApiRequest } from 'next';
import { hash } from 'bcrypt';



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { name, email, password, number, biography } = req.body;
    if (name && email && password) {
      const hashedPassword = await hash(password, 10);
      try {
        var user = new User({
          name,
          email,
          password: hashedPassword,
          number,
          biography
        });
        // Create new user
        var userCreated = await user.save();
        return res.status(200).send(userCreated);
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