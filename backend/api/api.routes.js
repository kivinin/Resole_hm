const router = require("express").Router();
const { Service, Client, Service_order } = require("../db/models");

router
  .get("/services", async (req, res) => {
    try {
      const services = await Service.findAll({ raw: true });
      res.json(services);
    } catch ({ message }) {
      res.json(message);
    }
  })

  .post("/client", async (req, res) => {
    try {
      const { name, number, adress } = req.body;
      const clients = await Client.create({ name, number, adress });

      const customers = await Service_order.create({
        client_id: clients.id,
        service_id: 1,
        status: false,
        unique_key: "123456",
      });

      res.json(clients, customers);
    } catch ({ message }) {
      res.json(message);
    }
  })

  .delete("/films/:filmId", async (req, res) => {
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

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.json(users);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
