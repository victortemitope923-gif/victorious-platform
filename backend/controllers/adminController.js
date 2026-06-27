import User from "../models/User.js";
import Lead from "../models/Lead.js";
import Booking from "../models/Booking.js";



export const getDashboardStats = async (req, res) => {

  try {

    const totalUsers = await User.countDocuments();

    const totalLeads = await Lead.countDocuments();

    const totalBookings = await Booking.countDocuments();

    const totalAdmins = await User.countDocuments({
      role: "admin",
    });

    res.json({
      success: true,

      stats: {
        totalUsers,
        totalLeads,
        totalBookings,
        totalAdmins,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

