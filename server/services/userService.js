import ApiError from '../exceptions/error-handler.js';
import { User } from '../models/models.js';
import bcrypt from 'bcryptjs';
class UserService {
    //Регистрация нового пользователя
    async registration(userName, email, password) {
        console.log(`email`, userName);

        //Проверяем существование пользователя
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return ApiError.badRequest('User with this email already exists');
        }
        if (!userName || !email || !password) {
            throw ApiError.badRequest('All fields are required');
        }
        //Создаем нового пользователя
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ userName, email, password: hashPassword });
        return user;
    }
}
export default new UserService();
