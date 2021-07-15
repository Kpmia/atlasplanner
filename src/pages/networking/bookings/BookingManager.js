import Axios from "axios";
import { atlasAPI, emailAPI } from "../endpoints";

export const BookingManager = {

  deleteBooking: async (orgId, eventId, sessionId, bookingId) => {
    const config = {};
    try {
      return await atlasAPI.delete(
        `/bookings/${orgId}/${eventId}/${sessionId}/${bookingId}`,
        config
      )
    } catch (error) {
      console.log(error)
      return null;
    }
  },

}
