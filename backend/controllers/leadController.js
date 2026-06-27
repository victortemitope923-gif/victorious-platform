import Lead from "../models/Lead.js";



// CREATE LEAD
export const createLead = async (req, res) => {

  try {

    const { name, email, service, message } = req.body;

    const lead = await Lead.create({
      name,
      email,
      service,
      message,
    });

    res.status(201).json({
      success: true,
      lead,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};




// GET LEADS
export const getLeads = async (req, res) => {

  try {

    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: leads.length,
      leads,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};




// UPDATE LEAD STATUS
export const updateLeadStatus = async (req, res) => {

  try {

    const lead = await Lead.findById(req.params.id);

    if (!lead) {

      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });

    }

    lead.status = req.body.status;

    await lead.save();

    res.json({
      success: true,
      lead,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

