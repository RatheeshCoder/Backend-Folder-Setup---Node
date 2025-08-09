import isEmpty from "is-empty";

const rateLimitStore = new Map();

export const limiter = () => {
  const windowMs = 2 * 60 * 1000;
  const maxRequests = 5;

  return (req, res, next) => {
    try {
      const { body } = req;
      body.email = body.email.toLowerCase().trim();

      const userKey = body.email;

      if (isEmpty(userKey)) {
        return res.status(400).json({ success: false, message: "Email is required for rate limiting." });
      }

      const now = Date.now();
      const userData = rateLimitStore.get(body.email);

      if (userData) {
        const { requests, startTime } = userData;

        if (now - startTime < windowMs) {
          if (requests >= maxRequests) {
            const retryAfter = Math.ceil((startTime + windowMs - now) / 1000);
            return res
              .status(429)
              .json({ success: false, message: `Too many requests. Please wait ${retryAfter} seconds before trying again.` });
          }

          rateLimitStore.set(userKey, { requests: requests + 1, startTime });
        } else {
          rateLimitStore.set(userKey, { requests: 1, startTime: now });
        }
      } else {
        rateLimitStore.set(userKey, { requests: 1, startTime: now });
      }

      next();
    } catch (error) {
      console.error("Rate limiter error:", error);
      return res.status(500).json({ success: false, message: "An error occurred while applying rate limits." });
    }
  };
};

setInterval(() => {
  const now = Date.now();
  for (const [key, { startTime }] of rateLimitStore.entries()) {
    if (now - startTime > 2 * 60 * 1000) {
      rateLimitStore.delete(key);
    }
  }
}, 60 * 1000);
