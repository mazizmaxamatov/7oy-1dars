import { useState } from "react";
import { registerUser } from "../api/apiBooks";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await registerUser(user);
      localStorage.setItem("user", JSON.stringify(response)); // ✅ Foydalanuvchi ma'lumotlarini saqlash
      navigate("/profile"); // ✅ Ro'yxatdan o'tgandan keyin Profile sahifasiga yo'naltirish
    } catch (error) {
      console.error("Ro'yxatdan o'tishda xatolik:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Ro‘yxatdan o‘tish</h2>
      <input type="text" className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Ismingiz" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="email" className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Parol" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md" onClick={handleRegister}>Ro‘yxatdan o‘tish</button>
    </div>
  );
};

export default Register;
