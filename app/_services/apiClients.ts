export async function register(clientData:any) {
  try {
    const res = await fetch("https://arenabooking-api-production.up.railway.app/api/v1/clients/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(clientData)
    });
    
    if (!res.ok) {
      console.log(await res.json());
      throw new Error(`Failed to create a client: ${res.status} ${res.statusText}`);
    }

    const result = await res.json();

    return result;
    
  } catch (err) {
    console.error("Error fetching categories:", err);
  }
}

export async function login(clientData:any) {
  try {
    const res = await fetch("https://arenabooking-api-production.up.railway.app/api/v1/clients/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(clientData)
    });
    
    if (!res.ok) {
      console.log(await res.json());
      throw new Error(`Failed to login: ${res.status} ${res.statusText}`);
    }

    const result = await res.json();

    return result;
    
  } catch (err) {
    console.error("Error fetching categories:", err);
  }
}

export async function getMe() {
  try {
    const res = await fetch("https://arenabooking-api-production.up.railway.app/api/v1/clients/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", 
      }
    });
    
    if (!res.ok) {
      console.log(await res.json());
      throw new Error(`Failed to login: ${res.status} ${res.statusText}`);      
    }

    const data = await res.json();
    return data;

  } catch (err) {
    console.error("Error fetching categories:", err);    
  }
}
