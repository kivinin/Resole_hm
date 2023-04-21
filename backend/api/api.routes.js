const router = require('express').Router();
const { Film, User } = require('../db/models');

router
  .get('/films', async (req, res) => {
    try {
      const films = await Film.findAll({ raw: true });
      res.json(films);
    } catch ({ message }) {
      res.json(message);
    }
  })
  .post('/films', async (req, res) => {
    try {
      const { title, poster, description } = req.body;
      const newFilm = await Film.create({ title, poster, description });
      res.json(newFilm);
    } catch ({ message }) {
      res.json(message);
    }
  })
  .delete('/films/:filmId', async (req, res) => {
    try {
      const { filmId } = req.params;
      const result = await Film.destroy({ where: { id: filmId } });
      console.log(result);
      if (result) {
        res.json(filmId);
      }
    } catch ({ message }) {
      res.json(message);
    }
  });

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.json(users);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
