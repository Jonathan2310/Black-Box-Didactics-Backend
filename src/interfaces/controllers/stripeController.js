const stripe = require('../../utils/stripe');

exports.crearSesionPago = async (req, res) => {
  try {
    const { productos } = req.body;

    const line_items = productos.map(producto => ({
      price_data: {
        currency: 'mxn',
        product_data: {
          name: producto.nombre,
        },
        unit_amount: Math.round(producto.precio * 100),
      },
      quantity: producto.cantidad,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5173/',
      cancel_url: 'http://localhost:5173/carrito',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error al crear sesión de pago:', error.message);
    res.status(500).json({ error: 'Error al crear la sesión de pago' });
  }
};
