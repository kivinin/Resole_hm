const router = require('express').Router();
const {
  Service,
  Client,
  Cart,
  Service_order,
  Product,
  Order,
} = require('../db/models');

router
  .get('/service', async (req, res) => {
    try {
      const services = await Service.findAll({ raw: true });
      res.json(services);
    } catch ({ message }) {
      res.json(message);
    }
  })

  .get('/products', async (req, res) => {
    try {
      const products = await Product.findAll({ raw: true });
      res.json(products);
    } catch ({ message }) {
      res.json(message);
    }
  })

  .post('/order', async (req, res) => {
    try {
      const { name, number, carts } = req.body;
      //      console.log(name, number, carts);
      const adress = '';
      const checkNumber = await Client.findAll({ where: { number: number } });

      if (checkNumber.length === 0) {
        const clients = await Client.create({ name, number, adress });
      } else {
        console.log('pusto');
      }

      const clientsFind = await Client.findAll({ where: { number: number } });
      const order = await Order.create({
        client_id: clientsFind[0].id,
        status: false,
      });

      carts.map(async (cart) => {
        try {
          await Cart.create({
            product_id: cart.id,
            order_id: order.id,
            quantity: 1,
          });
        } catch (message) {
          console.log(message);
        }
      });

      res.json(order);
    } catch ({ message }) {
      res.json(message);
    }
  })

  .post('/client', async (req, res) => {
    try {
      const { name, number, adress } = req.body;
      console.log('1233456789');
      const token = '5976899897:AAHNOrGZ_VSY300IfhA_mQY_QWQAv3Moe4k';
      const idChat = '676975446';
      const uniqKey = Math.random().toString(36).slice(-8);
      const message = [
        '<b>Name</b>: ' + name,
        '<b>Number</b>: ' + number,
        '<b>Adress</b>: ' + adress,
        '<b>uniqKey</b>: ' + uniqKey,
      ];

      let msg = message.join(' ');
      msg = encodeURI(msg);

      const postBot = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${idChat}&parse_mode=html&text=${msg}`
      );
      console.log(name, number, adress);
      const clients = await Client.create({ name, number, adress });
      console.log(uniqKey, '+++++++++');

      const customers = await Service_order.create({
        client_id: clients.id,
        service_id: 38,
        status: false,
        unique_key: uniqKey,
      });
      console.log(customers, '-________----');
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
    console.log(servicesorders);
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

router.delete('/service/:serviceId', async (req, res) => {
  try {
    const service = await Service.destroy({
      where: { id: req.params.serviceId },
    });
    if (service > 0) {
      res.json(req.params.serviceId);
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.put('/serviceorders/edit/:serviceorderId', async (req, res) => {
  try {
    const { serviceorderId } = req.params;
    const { status, before_img, after_img, comments } = req.body;
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
      res.json(serviceorderDB);
    } else {
      res.status(500).json({ message: 'Заполни все поля' });
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.put('/service/edit/:serviceId', async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { service_name, price, service_description, service_image } =
      req.body;

    const serviceDB = await Service.findOne({
      where: { id: serviceId },
    });
    serviceDB.service_name = service_name;
    serviceDB.price = price;
    serviceDB.service_description = service_description;
    serviceDB.service_image = service_image;
    serviceDB.save();
    res.json(serviceDB);
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.post('/service', async (req, res) => {
  try {
    const { service_name, service_description, service_image, price } =
      req.body;
    const newService = await Service.create({
      service_name,
      service_description,
      service_image,
      price,
    });

    res.json(newService);
  } catch ({ message }) {
    res.json(message);
  }
});

router.delete('/product/:productId', async (req, res) => {
  console.log('Elfkbk', req.params.productId);
  try {
    const product = await Product.destroy({
      where: { id: req.params.productId },
    });
    console.log(product, 'asdsadsadasdasdadas');
    if (product > 0) {
      res.json(req.params.productId);
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.put('/product/edit/:productId', async (req, res) => {
  try {
    console.log(123);
    const { productId } = req.params;
    const { product_name, product_price, product_description, product_image } =
      req.body;
    console.log(req.body);
    const productDB = await Product.findOne({
      where: { id: productId },
    });
    productDB.product_name = product_name;
    productDB.product_price = product_price;
    productDB.product_description = product_description;
    productDB.product_image = product_image;
    productDB.save();
    res.json(productDB);
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.post('/product', async (req, res) => {
  try {
    const { product_name, product_description, product_image, product_price } =
      req.body;
    const newProduct = await Product.create({
      product_name,
      product_description,
      product_image,
      product_price,
    });
    res.json(newProduct);
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/order', async (req, res) => {
  try {
    const order = await Order.findAll({
      include: [
        {
          model: Cart,
          include: { model: Product },
        },
        {
          model: Client,
        },
      ],
    });
    res.json(order);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
