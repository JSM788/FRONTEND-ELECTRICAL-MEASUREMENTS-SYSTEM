import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  styled,
} from "@mui/material"
import { useRef, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
// import { InicialLogo } from "../svgs/InicialLogo"
// import x from "./Login.module.css"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#1b80dc',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#85bdf4',
    },
    '&:hover fieldset': {
      borderColor: '#449cec',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1b80dc',
    },
  },
});


export const Login = () => {
  const navigate = useNavigate()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [showPassword, setShowPassword] = useState(false)
  // const [error, setError] = useState<string | null>(null)
  // const [isLoading, setIsLoading] = useState(false)
  
  const fetchLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const role: string = "user1";

    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    console.log({ username, password })
    try {
      const url = import.meta.env.VITE_BACKEND_LOGIN
      const res = await axios.post(url, { username, password })
      console.log(res, "RESSS")
      if (res.status === 200) {
        const jwt = res.data.access
        localStorage.setItem("token", jwt)
        
        switch (role) {
          case "admin":
            navigate("/admin-dashboard");
            break;
          case "user1":
            navigate("/bk-dashboard");
            break;
          case "user2":
            navigate("/pq-dashboard");
            break;
          default:
            break;
        }

      }
    } catch (error) {
      console.error("Error al loguearse", error)
    }
  }

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography variant="h4">Login</Typography>
        <Box component="form" onSubmit={fetchLogin}>
          <CssTextField
            label="Usuario"
            variant="outlined"
            margin="normal"
            fullWidth
            name="username"
            inputRef={usernameRef}
          />
          <CssTextField
            label="Contraseña"
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"}
            inputRef={passwordRef}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 3,
              borderRadius: ".5rem",
              backgroundImage: 'linear-gradient(to bottom, #1b80dc, #0e63bb)',
              "&:hover": { backgroundImage: 'linear-gradient(to bottom, #0e63bb, #0d519b)' },
              "&:active": { backgroundImage: 'linear-gradient(to bottom, #0d519b, #0f457d)' },
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
