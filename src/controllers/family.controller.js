const Family = require('../models/family.model');

const createFamily = async (req, res) => {
  try {
    const { code, name, guests, email, cel, comment, confirmed } = req.body;

    const family = await Family.create({
      code, 
      name,
      guests, 
      email, 
      cel, 
      comment: confirmed || "Nada", 
      confirmed: confirmed
    });

    res.status(201).json({
      message: "Familia creada satisfactoriamente",
      createFamily: family
    });

  } catch (error) {
    console.log("err", error);
    res.status(404).json({ message: error });
  }
}

module.exports = {
  createFamily
}