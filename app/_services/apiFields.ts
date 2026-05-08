import { Field } from "../_interfaces/IField";

interface FieldsResponse {
  status: string;
  data: Field[];
}

export async function getFields(fieldsCount:number): Promise<Field[]> {
  try {
    const res = await fetch(
      `https://arenabooking-api-production.up.railway.app/api/v1/fields?limit=${fieldsCount}`,
    );

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
