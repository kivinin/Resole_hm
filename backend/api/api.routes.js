const router = require("express").Router();
const { Service, Client, Service_order } = require("../db/models");

router
  .get("/service", async (req, res) => {
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

      const token = "5976899897:AAHNOrGZ_VSY300IfhA_mQY_QWQAv3Moe4k";
      const idChat = "676975446";
      const message = [
        "<b>Name</b>: " + name,
        "<b>Number</b>: " + number,
        "<b>Adress</b>: " + adress,
      ];

      let msg = message.join(" ");
      msg = encodeURI(msg);

      const postBot = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${idChat}&parse_mode=html&text=${msg}`
      );

      const uniqKey = Math.random().toString(36).slice(-8);
      const clients = await Client.create({ name, number, adress });
      const customers = await Service_order.create({
        client_id: clients.id,
        service_id: 1,
        status: false,
        unique_key: uniqKey,
      });

      res.json(clients, customers, postBot);
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
