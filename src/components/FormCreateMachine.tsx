import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material"
import axios from "axios"
import { FormRecordMotor } from "../interfaces/interfaces"
import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { loaderTree } from "../pages"

export const FormCreateMachine = () => {

  const { formCreateMachine, toggleFormCreateMachine } = useContext(GlobalContext);
  const [formRecordMotor, setFormRecordMotor] = useState<FormRecordMotor>({
    name: "",
    power_out_hp: "",
    power_out_kw: "",
    voltage_rating: "",
    freq_hz: "",
    amps_rating: "",
    factor_service: "",
    frame: "",
    insulation_class: "",
    locked_rotor_current: "",
    locked_rotor_code: "",
    speed_rpm: "",
    // fetchFoldersAndFiles: async () => {}
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'power_out_hp') {
      const powerOutKw = (parseFloat(value) / 1.341).toFixed(2);

      setFormRecordMotor({
        ...formRecordMotor,
        [name]: value,
        power_out_kw: powerOutKw,
      });
    } else {
      setFormRecordMotor({
        ...formRecordMotor,
        [name]: value,
      });
    }

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formRecordMotor.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Datos enviados:", formRecordMotor)

      try {
        const url = import.meta.env.VITE_BACKEND_CREATE_MACHINE
        const res = await axios.post(url, formRecordMotor);
        
        if (res.status == 201) {
          loaderTree()
          console.log(" Se creo la maquina", res.status)
        }

      } catch (error) {
          console.error("Error al crear maquina", error)
      }
    }
  }

  return (
    <>
      <div
        className={` ${
          formCreateMachine ? "w-full" : "w-0"
        } h-full fixed top-0 right-0 bg-white overflow-x-hidden transition-all duration-400 pt-16 z-50 border border-gray-300`}
      >
        <Container>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            {/* Primera fila de dos campos */}
            <TextField
              label="Nombre"
              variant="outlined"
              name="name"
              value={formRecordMotor.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
            />
            <Grid container spacing={1}>
              {/* Segunda fila de dos campos */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Potencia (HP)"
                  variant="outlined"
                  name="power_out_hp"
                  value={formRecordMotor.power_out_hp}
                  onChange={handleChange}
                  margin="normal"
                  error={!!errors.power_out_hp}
                  helperText={errors.power_out_hp}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Potencia (kW)"
                  variant="outlined"
                  name="power_out_kw"
                  value={formRecordMotor.power_out_kw}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.power_out_kw}
                  helperText={errors.power_out_kw}
                  InputProps={{
                    disabled: true,
                    style: { background: '#f5f5f5' },
                  }}
                />
              </Grid>
              {/* Tercera fila de dos campos */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Voltaje (V)"
                  variant="outlined"
                  name="voltage_rating"
                  value={formRecordMotor.voltage_rating}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.voltage_rating}
                  helperText={errors.voltage_rating}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  label="Frecuencia (Hz)"
                  variant="outlined"
                  name="freq_hz"
                  value={formRecordMotor.freq_hz}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.freq_hz}
                  helperText={errors.freq_hz}
                >
                  <MenuItem value="50">50 Hz</MenuItem>
                  <MenuItem value="60">60 Hz</MenuItem>
                </TextField>
              </Grid>
              {/* Cuarta fila de dos campos */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Corriente Nominal (A)"
                  variant="outlined"
                  name="amps_rating"
                  value={formRecordMotor.amps_rating}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.amps_rating}
                  helperText={errors.amps_rating}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Factor de Servicio"
                  variant="outlined"
                  name="factor_service"
                  value={formRecordMotor.factor_service}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.factor_service}
                  helperText={errors.factor_service}
                />
              </Grid>
              {/* Quinta fila de dos campos */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Frame"
                  variant="outlined"
                  name="frame"
                  value={formRecordMotor.frame}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.frame}
                  helperText={errors.frame}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Aislamiento"
                  variant="outlined"
                  name="insulation_class"
                  value={formRecordMotor.insulation_class}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.insulation_class}
                  helperText={errors.insulation_class}
                />
              </Grid>
              {/* Sexta fila de dos campos */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Corriente de Rotor Bloqueado"
                  variant="outlined"
                  name="locked_rotor_current"
                  value={formRecordMotor.locked_rotor_current}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.locked_rotor_current}
                  helperText={errors.locked_rotor_current}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Código de Rotor Bloqueado"
                  variant="outlined"
                  name="locked_rotor_code"
                  value={formRecordMotor.locked_rotor_code}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.locked_rotor_code}
                  helperText={errors.locked_rotor_code}
                />
              </Grid>
              {/* Septima fila de dos campos */}
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  label="Velocidad RPM"
                  variant="outlined"
                  name="speed_rpm"
                  value={formRecordMotor.speed_rpm}
                  onChange={handleChange}
                  margin="normal"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name}
                >
                  {formRecordMotor.freq_hz === "50" ? (
                    [
                      <MenuItem key="3000" value="3000">3000 RPM</MenuItem>,
                      <MenuItem key="1500" value="1500">1500 RPM</MenuItem>,
                      <MenuItem key="1000" value="1000">1000 RPM</MenuItem>,
                      <MenuItem key="750" value="750">750 RPM</MenuItem>,
                      <MenuItem key="600" value="600">600 RPM</MenuItem>,
                      <MenuItem key="500" value="500">500 RPM</MenuItem>,
                      <MenuItem key="428" value="428">428 RPM</MenuItem>,
                      <MenuItem key="375" value="375">375 RPM</MenuItem>,
                    ]
                  ) : (
                    [
                      <MenuItem key="3600" value="3600">3600 RPM</MenuItem>,
                      <MenuItem key="1800" value="1800">1800 RPM</MenuItem>,
                      <MenuItem key="1200" value="1200">1200 RPM</MenuItem>,
                      <MenuItem key="900" value="900">900 RPM</MenuItem>,
                      <MenuItem key="720" value="720">720 RPM</MenuItem>,
                      <MenuItem key="600" value="600">600 RPM</MenuItem>,
                      <MenuItem key="514" value="514">514 RPM</MenuItem>,
                      <MenuItem key="450" value="450">450 RPM</MenuItem>,
                    ]
                  )}
                </TextField>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', mt: 4 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Enviar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={toggleFormCreateMachine}
              >
                Cancelar 
              </Button>
            </Box>
          </Box>
        </Container>
      </div>

    </>
  )
}
