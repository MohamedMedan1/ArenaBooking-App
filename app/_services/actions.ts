"use server"
import { login, register } from "./apiClients"

export async function createNewAccount(formData:any) {
  const result = await register(formData);
  return result;
}

export async function loginAction(formData:any) {
  const result = await login(formData);
  return result;
}