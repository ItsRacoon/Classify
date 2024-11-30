const jwt=require('jsonwebtoken')

//authentication middleware
const authenticate =(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1];
    if(!token)return res.status(401).json({message:'Access denied: No token provided'});
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info from token
        next();
    } catch (err) {
        res.status(401).json({ message: 'Access denied: Invalid token' });
    }
};


//authorization middleware
const authorize = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access forbidden: Insufficient privileges' });
    }
    next();
};

module.exports = { authenticate, authorize };