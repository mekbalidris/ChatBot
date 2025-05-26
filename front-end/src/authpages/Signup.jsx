import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileIcon from "../components/ProfileIcon";

function Sign_up() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Fonction pour gérer l'upload de l'image
  const ImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("image", reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Charger l'image depuis le localStorage au démarrage
  const loadImage = () => {
    const storedImage = localStorage.getItem("image");
    if (storedImage) {
      setImagePreview(storedImage);
    }
  };

  // Charger l'image au chargement du composant
  useState(() => {
    loadImage();
  }, []);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validation du nom d'utilisateur
  const validateAll = () => {
    const regex = /^[a-zA-Z0-9._]+$/;
    if (username.length < 3) {
      alert("Le nom d'utilisateur doit contenir au moins 3 caractères.");
      return false;
    }
    if (!regex.test(username)) {
      alert(
        "Le nom d'utilisateur ne doit contenir que des lettres, des chiffres, des '.' et des '_'."
      );
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Email must be @gmail.com, @yahoo.com, or @usthb.edu");
      return false;
    }
    return true;
  };

  // Soumettre le formulaire
  const handleSubmit = () => {
    if (validateAll()) {
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      // Stocker l'utilisateur dans le localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Naviguer vers la page suivante
      navigate("/chatpage");
    }
  };

  return (
    <>
      {/* Formulaire */}
      <div
        className="mx-auto mt-4 flex flex-col items-center justify-center bg-[rgba(126,97,171,0.25)] backdrop-transparent border-4 border-[var(--color-3)] rounded-2xl"
        style={{ height: "70vh", width: "80%", maxWidth: "520px" }}
      >
        {/* Champ Username */}
        <div className="flex items-center justify-center w-[80%] h-[9%] mt-3 border-2 border-[var(--color-3)] rounded-xl bg-transparent font-[ZenDots] shadow-lg">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full h-full bg-transparent text-[#F5F5F5] p-5 focus:outline-none"
          />
          <div className="profile flex items-center justify-center mr-1.5">
            <ProfileIcon size={28} color={"#e3e3e3"} />
          </div>
        </div>

        {/* Champ email */}
        <div className="flex items-center justify-center w-[80%] h-[9%] mt-3 border-2 border-[var(--color-3)] rounded-xl bg-transparent font-[ZenDots] shadow-lg">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-full bg-transparent text-[#F5F5F5] p-5 focus:outline-none"
          />
          <div
            className="w-8 h-8 bg-center bg-no-repeat p-5"
            style={{ backgroundImage: "url('/public/mail.svg')" }}
          ></div>
        </div>

        {/* Champ Password */}
        <div className="flex items-center justify-center w-[80%] h-[9%] mt-3 border-2 border-[var(--color-3)] rounded-xl bg-transparent font-[ZenDots] shadow-lg">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-full bg-transparent text-[#F5F5F5] p-5 focus:outline-none"
          />
          <div
            className="w-8 h-8 bg-center bg-no-repeat p-5"
            style={{ backgroundImage: "url('/public/lock.svg')" }}
          ></div>
        </div>

        {/* Champ Confirm Password */}
        <div className="flex items-center justify-center w-[80%] h-[9%] mt-3 border-2 border-[var(--color-3)] rounded-xl bg-transparent font-[ZenDots] shadow-lg">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full h-full bg-transparent text-[#F5F5F5] p-5 focus:outline-none"
          />
          <div
            className="w-8 h-8 bg-center bg-no-repeat p-5"
            style={{ backgroundImage: "url('/public/lock.svg')" }}
          ></div>
        </div>

        {/* Image de profil */}
        <div className="input-img w-[80%] mt-3 h-28 border-2 border-dashed border-gray-300 text-[#F5F5F5] rounded-xl flex items-center justify-center relative">
          {/* Bouton pour supprimer l'image */}
          {imagePreview && (
            <button
              onClick={() => {
                localStorage.removeItem("image");
                setImagePreview(null);
              }}
              className="absolute top-[-8px] right-2 text-3xl text-[#F5F5F5] hover:text-gray-700"
            >
              &times;
            </button>
          )}

          <label
            htmlFor="image-upload"
            className="absolute text-4xl text-[#F5F5F5] cursor-pointer"
          >
            +
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={ImageChange}
          />
          {imagePreview && (
            <img
              id="preview"
              src={imagePreview}
              alt="Image Preview"
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </div>

        {/* Bouton Sign up */}
        <div className="flex items-center justify-center w-full h-[18%] mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-[80%] sm:w-[330px] h-[50px] rounded-xl bg-[var(--color-1)] shadow-lg text-white font-semibold flex items-center justify-center hover:bg-gray-300 hover:text-[var(--color-2)] hover:cursor-pointer transition duration-300"
          >
            Sign up
          </button>
        </div>

        {/* Lien vers Log in */}
        <div className="w-full flex items-end justify-center text-[#AEAEAE] font-[ZenDots] flex-grow">
          <span className="p-2">
            You have an account?{" "}
            <button
              className="text-[#F8E7F6] font-bold cursor-pointer bg-transparent border-none p-2 hover:underline hover:text-[#AEAEAE]"
              onClick={() => navigate("/login")}
            >
              Log in!
            </button>
          </span>
        </div>
      </div>
      {/* Section aide / contact */}
      <div className="w-full flex items-center justify-center fixed bottom-0 p-4 font-[ZenDots] text-[#AEAEAE]  z-10">
        <span className="flex items-center justify-center w-full text-center">
          If you have a problem,
          <a className="ml-2 text-blue-500 hover:underline" href="">
            contact us!
          </a>
        </span>
      </div>
    </>
  );
}

export default Sign_up;