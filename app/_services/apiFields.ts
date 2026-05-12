import { Field } from "../_interfaces/IField";

interface FieldsResponse {
  status: string;
  data: Field[];
}

interface FieldResponse {
  status: string;
  data: Field;
}

export async function getFields(queryString?: any): Promise<Field[]> {
  try {
    let apiUrl =
      "https://arenabooking-api-production.up.railway.app/api/v1/fields?isActive=true";
    const queryKeys = Object.keys(queryString);
    const finalQuery = queryKeys
      .map((cur) => `${cur}=${queryString[cur]}`)
      .join("&");

    apiUrl += finalQuery;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const { data }: FieldsResponse = await res.json();
    return data;
  } catch (err) {
    console.log("Error fetching fields: ", err);
    return [];
  }
}

export async function getField(id: string): Promise<Field | null> {
  try {
    const res = await fetch(
      `https://arenabooking-api-production.up.railway.app/api/v1/fields/${id}`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const { data }: FieldResponse = await res.json();
    return data;
  } catch (err) {
    console.log("Error fetching fields: ", err);
    return null;
  }
}

export async function getTimeSlots(id: string): Promise<Field | null> {
  try {
    const res = await fetch(`https://arenabooking-api-production.up.railway.app/api/v1/fields/${id}?fields=timeSlots,category`);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const { data }: FieldResponse = await res.json();
    return data;
  } catch (err) {
    console.log("Error fetching fields: ", err);
    return null;
  }
}
