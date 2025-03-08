import jwt from 'jsonwebtoken';

// Middleware to verify the token
const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract the token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id; // Attach the user ID to the request object
    next();
  } catch (error) {
    console.error('Token verification failed', error);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

export default protect;
