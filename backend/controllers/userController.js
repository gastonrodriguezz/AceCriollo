import { User } from '../models/userSchema.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const Register = async (req, res) => {
	try {
		const { name, username, email, password } = req.body;
		if (!name || !username || !email || !password) {
			return res.status(401).json({
				message: 'Todos los campos son requeridos.',
				success: false,
			});
		}
		const user = await User.findOne({ email });
		if (user) {
			return res.status(401).json({
				message: 'El usuario ya existe',
				success: false,
			});
		}

		const hashedPassword = await bcryptjs.hash(password, 16);

		await User.create({
			name,
			username,
			email,
			password: hashedPassword,
		});
		return res.status(201).json({
			message: 'Cuenta creada con éxito',
			success: true,
		});
	} catch (error) {
		console.log(error);
	}
};
export const Login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(401).json({
				message: 'El usuario ya existe',
				success: false,
			});
		}
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({
				message: 'Email o contraseña incorrecta',
				success: false,
			});
		}
		const isMatch = await bcryptjs.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({
				message: 'Email o contraseña incorrecta',
				success: false,
			});
		}
		const tokenData = {
			userId: user._id,
		};
		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: '1d' });
		return res
			.status(201)
			.cookie('token', token, { expiresIn: '1d', httpOnly: true })
			.json({
				message: `Bienvenido ${user.name}`,
				success: true,
			});
	} catch (error) {
		console.log(error);
	}
};
export const Logout = (req, res) => {
	return res.cookie('token', '', { expiresIn: new Date(Date.now()) }).json({
		message: 'El usuario ha cerrado la sesión correctamente',
		success: true,
	});
};
