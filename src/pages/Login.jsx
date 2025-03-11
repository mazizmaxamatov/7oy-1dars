import { useState } from "react";
import { loginUser } from "../api/apiBooks";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser(user);
      localStorage.setItem("user", JSON.stringify(response)); // ✅ Foydalanuvchini saqlash
      navigate("/profile"); // ✅ Login qilgandan keyin Profile sahifasiga yo'naltirish
    } catch (error) {
      console.error("Login qilishda xatolik:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Kirish</h2>
      <input type="email" className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" className="w-full px-4 py-2 border rounded-md mb-4" placeholder="Parol" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md" onClick={handleLogin}>Kirish</button>
    </div>
  );
};

export default Login;
