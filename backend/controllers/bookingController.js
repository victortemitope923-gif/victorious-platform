import Booking from "../models/Booking.js";



// CREATE BOOKING
export const createBooking = async (req, res) => {

  try {

    const booking = await Booking.create(req.body);

    res.status(201).json({
      success: true,
      booking,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



// GET BOOKINGS
export const getBookings = async (req, res) => {

  try {

    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: bookings.length,
      bookings,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
