import { cookies } from "next/headers";
export async function register(clientData: any) {
  try {
    const res = await fetch(
      "https://arenabooking-api-production.up.railway.app/api/v1/clients/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      },
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `Failed to create a client: ${error.message}`,
      );
    }

    const result = await res.json();
    const setCookieHeader = res.headers.get("set-cookie");

    if (setCookieHeader) {
      const token = result.token;

      const cookieStore = await cookies();
      cookieStore.set("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 90 * 24 * 60 * 60,
        path: "/",
      });
    }

    return result;
  } catch (err) {
    console.error("Error fetching categories:", err);
  }
}

export async function login(clientData: any) {
  try {
    const res = await fetch(
      "https://arenabooking-api-production.up.railway.app/api/v1/clients/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      },
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Failed to Login:${error.message}`);
    }

    const result = await res.json();

    const setCookieHeader = res.headers.get("set-cookie");

    if (setCookieHeader) {
      const token = result.token;

      const cookieStore = await cookies();
      cookieStore.set("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 90 * 24 * 60 * 60,
        path: "/",
      });
    }

    return result;
  } catch (err) {
    console.error("Error fetching categories:", err);
  }
}

export async function getMe() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt")?.value;

    if (!token) {
      throw new Error("Unauthorized: No token found");
    }
    
    const res = await fetch(
      "https://arenabooking-api-production.up.railway.app/api/v1/clients/me",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      },
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Failed to get your data:${error.message}`);
    }

    const {data} = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching my data:", err);
    return err
  }
}

export async function updateMe(clientData:any) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt")?.value;

    if (!token) {
      throw new Error("Unauthorized: No token found");
    }
    
    const res = await fetch(
      "https://arenabooking-api-production.up.railway.app/api/v1/clients/me",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(clientData)
      },
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Failed to update your personal data:${error.message}`);
    }

    const result = await res.json();
    return result;
  } catch (err) {
    console.error("Error udpating data:", err);
    return err;
  }
}

export async function changePassword(clientData:any) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt")?.value;

    if (!token) {
      throw new Error("Unauthorized: No token found");
    }
    
    const res = await fetch(
      "https://arenabooking-api-production.up.railway.app/api/v1/clients/change-password",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(clientData)
      },
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Failed to ChangePassword:${error.message}`);
    }

    const result = await res.json();
    return result;
  } catch (err) {
    console.error("Error while changing password:", err);
    return err;
  }
}


