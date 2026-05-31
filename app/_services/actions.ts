"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cancelBooking, createNewBooking } from "../_services/apiBookings";
import { changePassword, login, register, updateMe } from "./apiClients";
import { logout } from "../_utils/authActions";
export async function signUpAction(formData:any) {
  const result = await register(formData);
  return result;
}

export async function loginAction(formData:any) {
  const result = await login(formData);
  return result;
}

export async function updateMeAction(formData: any) {
  const result = await updateMe(formData);
  return result;
}

export async function changePasswordAction(formData: any) {
  const result = await changePassword(formData);
  return result;
}


export async function createBookingAction(formData: any) {
  let paymentUrl = "";

  try {
    const { fieldId, bookingData } = formData; 
    const result = await createNewBooking({ fieldId, bookingData });

    if (result.status === "success" && result.paymentUrl) {
      paymentUrl = result.paymentUrl;
    } else {
      throw new Error("Payment URL not found");
    }
  } catch (err:any) {
    if (
      err.message === "There is no user with that Id" ||
      err.message.includes("Unauthorized") ||
      err.message.includes("token")
    ) {
      await logout();
      redirect("/login");
    }
    throw new Error(err.message || "Failed to create booking");
  }

  if (paymentUrl) {
    redirect(paymentUrl);
  }
}

export async function cancelBookingAction(fieldId:any) {
  try {
    await cancelBooking(fieldId);
    revalidatePath("/bookings");
    return { success: true };
  } catch (err: any) {
    if (
      err.message === "There is no user with that Id" ||
      err.message.includes("Unauthorized") ||
      err.message.includes("token")
    ) {
      await logout();
      redirect("/login");
    }
    return { success: false, message: err.message || "Failed to cancel booking" };
  }
}