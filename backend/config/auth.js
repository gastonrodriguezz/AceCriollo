import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({
	path: '../config/.env',
});
const isAuthenticated = async (req, res, next) => {
	try {
		const { token } = res.cookie;
		console.log(token);
		if (!token) {
			return res.status(401).json({
				message: 'Usuario no autenticado.',
				success: false,
			});
		}
		const decode = await JsonWebTokenError.verify(token, process.env.TOKEN_SECRET);
		console.log(decode);
		req.user = decode.id;
		next();
	} catch (error) {
		console.log(error);
	}
};
