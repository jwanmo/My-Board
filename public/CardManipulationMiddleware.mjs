import SuperLogger from './modules/SuperLogger.mjs';

const cardManipulationMiddleware = (req, res, next) => {
    // Log request details
    const logger = new SuperLogger();
    logger.logCardManipulationRequest(req);

    next(); // Pass control to the next middleware or route handler
};

export default cardManipulationMiddleware;
