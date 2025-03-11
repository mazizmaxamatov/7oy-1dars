import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login"); // ✅ Agar foydalanuvchi login qilmagan bo'lsa, login sahifasiga yo'naltirish
    }
    setUser(storedUser);
  }, []);

  if (!user) {
    return <p className="text-center text-red-500">Foydalanuvchi ma'lumotlari yo‘q!</p>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Profil</h2>
      <p><strong>Ism:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
