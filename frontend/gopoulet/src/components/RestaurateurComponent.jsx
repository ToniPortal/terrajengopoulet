import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/commonStyles';

const RestaurateurComponent = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/orders')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des commandes :', error);
      });
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    axios.put(`http://localhost:3000/orders/${orderId}`, { status: newStatus })
      .then((response) => {
        const updatedOrders = orders.map((order) => {
          if (order.uuid === orderId) {
            return { ...order, status: newStatus };
          }
          return order;
        });
        setOrders(updatedOrders);
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour du statut de la commande :', error);
      });
  };
  const deleteOrder = (orderId) => {
    axios.delete(`http://localhost:3000/orders/${orderId}`)
      .then(() => {
        // Filtrez l'état actuel des commandes pour enlever celle qui a été supprimée
        setOrders(orders.filter(order => order.uuid !== orderId));
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de la commande :', error);
      });
  };

  const notifyCustomer = (orderId) => {
    // Dans le futur, implémentation de la notification au client
  };

  return (
    <div style={styles.restaurateurPage}>
      <h1>Interface Restaurateur</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID de la commande</th>
            <th style={styles.th}>Statut de la commande</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.uuid}>
              <td style={styles.td}>{order.uuid}</td>
              <td style={styles.td}>{order.status}</td>
              <td style={styles.td}>
                {/* ... Boutons avec styles ... */}
                <button style={{ ...styles.button, backgroundColor: '#28a745' }} onClick={() => updateOrderStatus(order.uuid, 'En préparation')}>
                  Mettre en préparation
                </button>
                <button style={{ ...styles.button, backgroundColor: '#17a2b8' }} onClick={() => updateOrderStatus(order.uuid, 'Prêt à récupérer')}>
                  Prêt à récupérer
                </button>
                <button style={{ ...styles.button, ...styles.deleteButton }} onClick={() => deleteOrder(order.uuid)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurateurComponent;
