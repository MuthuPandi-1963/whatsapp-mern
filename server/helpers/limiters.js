import rateLimit from 'express-rate-limit'

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // limit each IP
  message: "Too many requests, please try again later.",
  standardHeaders: true,    // return rate limit info in headers
  legacyHeaders: false,     // disable X-RateLimit headers
});


export const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // only 5 attempts allowed
  message: "Too many login attempts, please try again later",
});