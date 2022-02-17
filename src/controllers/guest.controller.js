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

// GET: para obtener la lista de invitados
const guestsList = async (req, res) => {
  try {
    const docs = await Guest.find()
        .select("name type recommendation confirmed _id")
        .exec();
    
    const response = {
      count: docs.length,
      guests: docs.map(doc => {
        // Se hace "destructing" para traer solo los datos que necesito
        // si hago ...doc sobre el objeto de retorno se traeran datos
        // adicionales del documento que no son necesarios.
        const { _id, name, foodRecommendation, confirmed } = doc;
        return {
          _id, name, foodRecommendation, confirmed,
          request: {
            type: "GET",
            uri: `http://localhost:8081/guests/${_id}`
          }
        }
      })
    };
    res.status(200).json(response);
  } catch (error) {
    console.log("err", error);
    res.status(404).json({ message: error });
  }
}

module.exports = {
  createGuest,
  guestsList
}