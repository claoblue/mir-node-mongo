const Guest = require('../models/guest.model');

// POST: Para Crear un invitado
const createGuest = async (req, res) => {
  try {
    const { name, foodRecommendation, confirmed } = req.body;
    const guest = await Guest.create({
      name,
      foodRecommendation: foodRecommendation || "Ninguna",
      confirmed: confirmed
    });

    res.status(201).json({
      message: "El invitado fue creado.",
      createGuest: guest
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

module.exports = {
  createGuest
}