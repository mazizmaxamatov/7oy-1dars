const BASE_URL = "https://reqres.in/api"; // Bitta marta e'lon qilamiz

export const loginUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  
  if (!response.ok) {
    console.error("Login xatosi:", data);
    throw new Error(data.error || "Login qilishda xatolik!");
  }

  console.log("Login response:", data);
  return data;
};

export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Ro‘yxatdan o‘tish xatosi:", data);
    throw new Error(data.error || "Ro‘yxatdan o‘tishda xatolik!");
  }

  console.log("Register response:", data);
  return data;
};

export const getProfile = async () => {
  const response = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Agar token kerak bo‘lsa
    },
  });

  if (!response.ok) {
    throw new Error("Profil ma'lumotlarini olishda xatolik");
  }

  return response.json();
};
