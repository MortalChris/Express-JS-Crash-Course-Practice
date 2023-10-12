//MiddleWare
const logger = (req, res, next) => {
    console.log(`${req.portocol}://${req.get('host')}${req.originalUrl}`);
    next();
};