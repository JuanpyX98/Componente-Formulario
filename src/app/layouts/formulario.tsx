import React, { useState, useRef } from 'react'
//Importaciones MaterialUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'; // Grid version 2
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import InputLabel from '@mui/material/InputLabel';
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
//Import ReCaptcha
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';



const Formulario = () => {



    //Ver-Ocultar congtraseña

    const [input1, setInput1] = useState(false)

    const [input2, setInput2] = useState(false)

    function visibilidad(input: String){

      if(input == 'input1'){
        input1 ? setInput1(!input) : setInput1(true);
      }
      else if('input2'){
        input2 ? setInput2(!input) : setInput2(true);
      }
        
    }

    //-----------------------

    // ReCapcha

    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [solicitud, setSolicitud] = useState<boolean>(false);

    async function verificacionCaptcha(token: string){
      await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=6Lds6bUpAAAAAPcn0F_gLJgb2ZMbrK73UjzSr6X5&response=${token}`)
    }

    //-----------------------
  return (
    
        <Container sx={{width: '384px', height: '667px',display: 'flex', flexDirection: 'column', padding: '16px'}}>
          <style jsx global>{`
          .MuiFilledInput-root::after{
            border-bottom-color: #606060 !important;
          }
        
      `}</style>
          <Typography sx={{fontSize: '24px', fontWeight: '400'}} variant="h5" component="h1">
            Registrate!
          </Typography>
          <Typography sx={{marginBottom:'32px', fontSize: '14px'}} variant="body2" component="h2">
            Ingresá un correo válido y crea una contraseña
          </Typography>
          <TextField sx={{width: '100%', marginBottom: '16px', '& label': {
            color: '#606060',
          },
          '& label.Mui-focused': {
            color: '#606060', // Color cuando el TextField está enfocado
          },}} id="filled-basic" label="Usuario" variant="filled" />
          <FormControl sx={{ width: '100%', marginBottom: '16px',  '& label': {
            color: '#606060',
          },
          '& label.Mui-focused': {
            color: '#606060', // Color cuando el TextField está enfocado
          },}} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={input1 ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>{
                    visibilidad('input1')
                  }}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {input1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
          <FormControl sx={{width: '100%', marginBottom: '48px',  '& label': {
            color: '#606060',
          },
          '& label.Mui-focused': {
            color: '#606060', // Color cuando el TextField está enfocado
          },}} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Repetir Contraseña</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={input2 ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>{
                    visibilidad('input2')
                  }}
                //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {input2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <ReCAPTCHA
            
            sitekey="6Lds6bUpAAAAAPcn0F_gLJgb2ZMbrK73UjzSr6X5"
            ref={recaptchaRef}
            onChange={()=>{console.log()}}
          />
          </Box>
         
          <Button

          sx={{backgroundColor: 'red','&:hover':{backgroundColor: 'red'}, marginTop: '48px'}}

            variant="contained"

            color="primary"

            size="large">

            Registrarme

          </Button>
          <Typography sx={{fontSize: '12px', fontWeight: '400', textAlign: 'center', marginTop: '16px', marginBottom: '16px'}} variant="h5" component="h1">
            O
          </Typography>
          <Divider />
          <Typography sx={{fontSize: '14px', fontWeight: '400', textAlign: 'center', marginTop: '16px', marginBottom: '16px'}} variant="h5" component="h1">
            Ya tengo usuario. <Typography sx={{cursor: 'pointer',fontSize: '14px', fontWeight: '400'}} onClick={()=>{console.log('Precionado')}} component='span'>Ingresar</Typography>
          </Typography>
        </Container>
     
  );
}

export default Formulario