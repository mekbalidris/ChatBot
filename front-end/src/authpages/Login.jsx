import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Log_in() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRememberMe, setIsRememberMe] = useState(false);

  // Remplace la fonction handleLogin par celle-ci :
  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Comparaison
    const validUsername = localStorage.getItem("username");
    const validEmail = localStorage.getItem("email");
    const validPassword = localStorage.getItem("password");

    const isValid =
      (username === validUsername || username === validEmail) &&
      password === validPassword;

    if (isValid) {
      navigate("/chatpage");
    } else {
      alert("Identifiants incorrects.");
    }
  };

  return (
    <>
      {/* Conteneur principal */}
      <form
        onSubmit={handleLogin}
        className="box flex flex-col items-center  bg-[rgba(126,97,171,0.25)] bg-transparentS border-[3px] border-[#cab2fb] rounded-[20px] text-sm z-10 mx-auto mt-4"
        style={{
          height: "65vh",
          width: "80%",
          maxWidth: "520px",
          minWidth: "320px",
        }}
      >
        {/* Inputs */}
        <div
          className="inputs w-full flex flex-col font-[ZenDots] items-center justify-center"
          style={{ height: "40%" }}
        >
          <div
            className="inputbox_login w-[80%] flex items-center justify-center border-2 border-[#cab2fb] rounded-[14px] bg-transparent shadow-[0_5px_10px_rgba(0,0,0,0.3)] mt-4"
            style={{ height: "25%" }}
          >
            <input
              type="text"
              placeholder="Username or email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-full flex items-center justify-center border-0 bg-transparent text-[#F5F5F5] p-5 focus:outline-none"
            />
            <div
              className="user w-8 h-8 bg-center bg-no-repeat p-5"
              style={{ backgroundImage: 'url("/public/account_circle.svg")' }}
            ></div>
          </div>

          <div
            className="inputbox_login w-[80%] flex items-center justify-center border-2 border-[#cab2fb] rounded-[14px] bg-transparent shadow-[0_5px_10px_rgba(0,0,0,0.3)] mt-4"
            style={{ height: "25%" }}
          >
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full flex items-center justify-center border-0 bg-transparent text-[#F5F5F5] p-5 focus:outline-none"
            />
            <div
              className="lock w-8 h-8 bg-center bg-no-repeat p-5"
              style={{ backgroundImage: 'url("/public/lock.svg")' }}
            ></div>
          </div>
        </div>

        {/* Section "Remember me" et bouton "Forgot password" */}
        <div
          className="remember w-full flex items-center font-[ZenDots] justify-between text-[14.5px] text-[#AEAEAE] p-5"
          style={{ height: "10%" }}
        >
          <span className="rem flex items-center">
            <label className="relative">
              <input
                type="checkbox"
                className="mt-1 peer w-4 h-4 appearance-none bg-transparent border-2 border-[#cab2fb] rounded cursor-pointer"
                checked={isRememberMe}
                onChange={() => setIsRememberMe((prev) => !prev)}
              />
              <span className="mt-1 absolute top-0 left-0 w-4 h-4 flex items-center justify-center pointer-events-none peer-checked:visible invisible">
                <img
                  src="/public/check.png"
                  alt="check"
                  className="w-full h-full object-contain"
                />
              </span>
            </label>
            <span className="ml-2 text-[#AEAEAE]">Remember me</span>
          </span>

          <button className="forgot text-[#AEAEAE]  cursor-pointer bg-transparent hover:underline hover:text-[#F8E7F6]">
            Forgot password!
          </button>
        </div>

        {/* Bouton de login */}
        <div
          className="login w-full flex items-center justify-center"
          style={{ height: "30%" }}
        >
          <button
            type="submit"
            className="btn  w-[80%] h-[50px] rounded-[15px] bg-[#36135A] shadow-[0_5px_10px_rgba(0,0,0,0.3)] text-white font-semibold flex items-center justify-center hover:bg-[rgb(207,207,207)] hover:text-[#36135A] cursor-pointer"
            disabled={!username || !password}
          >
            Log in
          </button>
        </div>

        {/* Section register */}
        <div
          className="register w-full flex items-end justify-center text-[#AEAEAE] font-[ZenDots] flex-grow"
          style={{ height: "10%" }}
        >
          <span className="creat p-[7px]">
            Don't have an account?{" "}
            <button
              className="signup text-[#F8E7F6] font-bold cursor-pointer bg-transparent p-[10px] hover:underline hover:text-[#AEAEAE]"
              onClick={() => navigate("/signup")}
            >
              Sign up!
            </button>
          </span>
        </div>
      </form>

      {/* Section help */}
      <div className="help w-full flex items-center justify-center font-[ZenDots] text-[#AEAEAE]  z-10 fixed bottom-0 p-4">
        <span className="contact flex items-center justify-center w-full text-center">
          If you have a problem,
          <a className="acc ml-2 hover:underline text-blue-500" href="">
            contact us!
          </a>
        </span>
      </div>
    </>
  );
}

export default Log_in;