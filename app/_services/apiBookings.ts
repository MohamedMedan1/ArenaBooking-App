import { getToken } from "../_utils/getToken";

const BASE_URL = "https://arenabooking-api-production.up.railway.app/api/v1";

async function getAuthHeaders() {
  const token = await getToken();
  if (!token) throw new Error("Unauthorized: No token found");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function getAllBookings() {
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(`${BASE_URL}/clients/me/bookings`, {
      method: "GET",
      headers,
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Failed to fetch bookings");

    return result.data;
  } catch (err: any) {
    console.error("Error fetching Bookings:", err.message);
    throw err; 
  }
}

export async function getBooking(order:string) {
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(`${BASE_URL}/clients/me/bookings?paymobOrderId=${order}`, {
      method: "GET",
      headers,
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Failed to fetch booking");

    return result.data;
  } catch (err: any) {
    console.error("Error fetching Bookings", err.message);
    throw err; 
  }
}

export async function createNewBooking(reqData: { fieldId: string; bookingData: any }) {
  const { fieldId, bookingData } = reqData;
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(`${BASE_URL}/fields/${fieldId}/bookings`, {
      method: "POST",
      headers,
      body: JSON.stringify(bookingData),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Failed to create booking");

    if (result.status === "success" && !result.paymentUrl) {
      console.warn("Booking created but no paymentUrl received");
    }

    return result;
  } catch (err: any) {
    console.error("Error creating booking:", err.message);
    throw err;
  }
}

export async function cancelBooking(bookingId: string) {
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(`${BASE_URL}/clients/me/bookings/${bookingId}/cancel`, {
      method: "PATCH",
      headers,
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Failed to cancel booking");

    return result;
  } catch (err: any) {
    console.error("Error canceling booking:", err.message);
    throw err;
  }
}