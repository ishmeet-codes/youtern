// Middleware to check if the user is an HR
exports.isHR = (req, res, next) => {
    const { role } = req.body;
    if (role !== 'HR') {
      return res.status(403).json({ message: 'Access denied. Only HRs can perform this action.' });
    }
    next();
  };
  