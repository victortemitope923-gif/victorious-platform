import Business from "../models/Business.js";



// CREATE BUSINESS PROFILE
export const createBusiness = async (req, res) => {

  try {

    const business = await Business.create(req.body);

    res.status(201).json({
      success: true,
      business,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// GET BUSINESS PROFILE
export const getBusiness = async (req, res) => {

  try {

    const business = await Business.findOne();

    res.json({
      success: true,
      business,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

