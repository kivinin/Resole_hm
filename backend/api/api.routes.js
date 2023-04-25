
const router = require("express").Router();
const {
  Service,
  Client,
  Cart,
  Service_order,
  Product,
  Order,
} = require("../db/models");


router
  .get('/service', async (req, res) => {
    try {
      const services = await Service.findAll({ raw: true });
      res.json(services);
    } catch ({ message }) {
      res.json(message);
    }
  })


  .get("/products", async (req, res) => {
    try {
      const products = await Product.findAll({ raw: true });
      res.json(products);
    } catch ({ message }) {
      res.json(message);
    }
  })

  .post("/order", async (req, res) => {
    try {
      const { name, number, carts } = req.body;
      //      console.log(name, number, carts);
      const adress = "";
      const clients = await Client.create({ name, number, adress });
      const cart = await Cart.create({ product_id: carts[0].id, quantity: 1 });

      const order = await Order.create({
        client_id: clients.id,
        status: false,
        cart_id: cart.id,
      });

      res.json(clients, cart, order);
    } catch ({ message }) {
      res.json(message);
    }
  })

  .post("/client", async (req, res) => {



    try {
      const { name, number, adress } = req.body;

      const token = '5976899897:AAHNOrGZ_VSY300IfhA_mQY_QWQAv3Moe4k';
      const idChat = '676975446';
      const message = [
        '<b>Name</b>: ' + name,
        '<b>Number</b>: ' + number,
        '<b>Adress</b>: ' + adress,
      ];

      let msg = message.join(' ');
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

router.get('/serviceorders', async (req, res) => {
  try {
    const servicesorders = await Service_order.findAll({
      include: { model: Client },
    });

    res.json(servicesorders);
  } catch ({ message }) {
    res.json(message);
  }
});

router.delete('/serviceorders/:serviceorderId', async (req, res) => {
  try {
    const serviceorder = await Service_order.destroy({
      where: { id: req.params.serviceorderId },
    });
    if (serviceorder > 0) {
      res.json(req.params.serviceorderId);
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.put('/serviceorders/edit/:serviceorderId', async (req, res) => {
  console.log('dasdasda');
  try {
    const { serviceorderId } = req.params;
    const { status, before_img, after_img, comments } = req.body;
    console.log(req.body);
    if (comments && status) {
      const serviceorderDB = await Service_order.findOne({
        where: { id: serviceorderId },
      });
      const client = await Client.findOne({
        where: { id: serviceorderDB.client_id },
      });
      serviceorderDB.status = status;
      serviceorderDB.before_img = before_img;
      serviceorderDB.after_img = after_img;
      serviceorderDB.comments = comments;
      serviceorderDB.save();
      res.json( serviceorderDB );
    } else {
      res.status(500).json({ message: 'Заполни все поля' });
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

module.exports = router;
