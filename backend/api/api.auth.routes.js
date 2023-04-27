const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

router.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      let user = await Admin.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        user = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        req.session.userid = user.id;
        res.status(201).json(user);
      } else {
        res.status(403).json({ message: 'Неверный email или пароль' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/verification', async (req, res) => {
  const userId = req.session.userid;
  if (userId) {
    const user = await Admin.findOne({
      where: { id: userId },
      attributes: { exclude: ['password'] },
    });
    res.status(200).json(user);
  } else {
    res.status(403).json({ message: 'no session' });
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res.clearCookie('user_sid').status(200).json({ message: 'Успешный выход' });
  });
});

module.exports = router;
