// orderModel.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  uuid: { type: String, required: true },
  status: { type: String, required: true, enum: ['en attente', 'en préparation', 'prêt à récupérer'], default: 'en attente' },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;