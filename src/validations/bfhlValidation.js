const { z } = require('zod');

const bfhlPostSchema = z.object({
    data: z.array(z.union([z.string(), z.number()]))
});


exports.validateBfhlPost = (req, res, next) => {
    try {
        bfhlPostSchema.parse(req.body);
        next();
    } catch (e) {
        return res.status(400).json({ is_success: false, message: e.errors });
    }
};
