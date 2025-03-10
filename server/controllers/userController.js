import userService from '../services/userService.js';

const generateToken = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
};
class UserController {
    //Регистрация пользователя
    async registration(req, res, next) {
        try {
            console.log(req.body);

            const { userName, password, email } = req.body;
            const userData = await userService.registration(userName, password, email);
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }
}
export default new UserController();
