import { loginRequest } from "@/app/providers/azure";
import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      // try {
      //   await instance.logoutRedirect();
      // } catch (logoutErr) {
      //   console.error("Logout after failed redirect failed:", logoutErr);
      // }
      console.error("Login failed:", error);
    }
  };
  
  useEffect(() => {
    if (accounts.length > 0) {
      navigate("/");
    } else {
      handleLogin();
    }
  }, [accounts]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>Please log in to continue</h1>
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>Login with Azure</button>
    </div>
  );

}

export default Login;