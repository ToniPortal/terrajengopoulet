import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Importez le module cors
import { v4 as uuidv4 } from 'uuid';
import Order from './orderModel.js';
import bcrypt from 'bcryptjs';

dotenv.config();

// Modèle d'utilisateur (à adapter selon votre schéma)
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Connexion à MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie pour la création de l’administrateur.'))
  .catch(err => console.error('Impossible de se connecter à MongoDB', err));

// Création de l'utilisateur administrateur
const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash('Rk822mCm', 10); // Hash du mot de passe
  const adminUser = new User({ username: 'adm_alyptus', password: hashedPassword });

  try {
    await adminUser.save();
    console.log('Utilisateur administrateur créé avec succès.');
    mongoose.disconnect();
  } catch (error) {
    console.error('Erreur lors de la création de l’utilisateur administrateur:', error);
    mongoose.disconnect();
  }
};

createAdmin();
