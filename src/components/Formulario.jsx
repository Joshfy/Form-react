import styled from "styled-components";
import Logo from '../assets/logo.png';
import Ema from '../assets/verde.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import  { useState } from 'react';
// import { BsFillTelephoneFill } from 'react-icons/fa';



const Cuerpo = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
background-color: #7ec07e;
`;

  const ContFormu = styled.div`
    display: flex;
    align-items: center; /* Centrar contenido verticalmente */
    border-radius: 16px;
    width: 62vw;
    height: 37vh%;
    border: 8px solid black;
    background-color: none;
    @media (max-width: 768px) {
      width: 84vw;
      height: 63vh;
    display: block; /* Cambia el valor de display a 'block' para dispositivos más pequeños */

  }

  `;

const Parte1 = styled.div`
    background-color: rgb(255, 255, 255);
    flex: 1;
    padding: 20px;
    width: 93vw;
    height: 58vh;
    @media (max-width: 768px) {
    width: 74vw;
    height: 26vh;
    
  }
  
`;
const Textos = styled.div`
justify-content:center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin-left: 38px;
@media (max-width: 768px) {
  margin-left: 57px;

    
  }

`;
const Titulo = styled.h3`
  color: rgb(34, 99, 194);
  font-size: 25px;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 17px;
    margin: -9px;

    
  }
`;

const Info = styled.p`
font-size:20px;
color: rgb(34, 99, 194);
display: flex;
@media (max-width: 768px) {
  font-size: 15px;
    
  }

&.tele{
    transform: translate(3px, -38px);
}
`;

const Part2 = styled.div`

  background-image: url(${Ema});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Divide en 2 columnas iguales */
  height: 100%;
  width: 53%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 84vw;
    height: 32vh;
  

  }

`;

const FormContent = styled.form`
  font-size: 20px;
  border-radius: 16px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Column = styled.div` 
  padding: 10px;
  
  @media (max-width: 768px) {
    padding: 5px;
  }
`;
const Label = styled.label`
  color: rgb(34, 99, 194);
  font-family: 'Segoe UI';
  margin-top: 33px;
  display: block; /* Muestra los labels en líneas horizontales */
  @media (max-width: 768px) {
    margin-top:7px;
  }

  
`;

const Input = styled.input`
  margin: 5px 0;
  font-size: 15px;
  height: 22px;
  width: 80%;
  @media (max-width: 768px) {
    margin-top:15px;
    font-size: 10px;
  }
`;

const Select = styled.select`
  margin: 5px 0;
  padding: 10px;
  border: 0 0 0 0px solid #ccc;
  border-radius: 0px;
  border: none;
  @media (max-width: 768px) { 
    padding: 5px;

  }
`;

const Button = styled.button`
    padding: 12px 33px;
    background-color: rgb(118, 211, 28);
    color: #000000;
    border: none;
    cursor: pointer;
    transform: translateX(13px);
    margin-top: 46px;
    &:hover {
    background-color: #000000; /* Cambia el color de fondo en hover */
    color: #ffffff; /* Cambia el color de texto en hover */
    transform: translateX(20px); /* Aplica una transformación diferente en hover */
  }
    
    @media (max-width: 768px) {
    padding: 8px 19px;
    transform: translateX(16px);
    margin-top: 13px;
  }
`;

const Images = styled.img`
width: 65%;
transform: translate(48px, -8px);
&:hover {
  transform: translate(48px, -25px) scale(1.5); 
  }

border-radius: 16px;
box-shadow: 1px black;
@media (max-width: 768px) {
  }
`;


const Icon = styled(FaPhoneAlt)`
  margin-right: 5px;
  transform: translate(-20px, 12px);
  @media (max-width: 768px) {
    transform: translate(-20px, 0px);

  }
`;

const Icon2 = styled(MdEmail)`
  margin-right: 5px;
  transform: translate(-20px, 47px);
  @media (max-width: 768px) {
    transform: translate(-20px, 39px);

  }

`;

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    dni: '',
    sexo: 'Masculino',
    direccion: '',
    telefono: '',
    correo: '',
    contraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu servidor o hacer lo que desees con ellos
  };
////////////////////Alerts//////////

const MyForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    // Agrega más campos de formulario según sea necesario
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valida los campos del formulario
    if (formData.nombre === '' || formData.email === '') {
      alert('Por favor completa todos los campos del formulario.');
      return;
    }

    // Si todos los campos están completos, puedes enviar los datos o realizar otra acción
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor, por ejemplo.
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
}
  return (
    <Cuerpo>
      <ContFormu>
        <Parte1>
          <Images src={Logo} alt="imagen"/>
          <Textos>
              <Titulo>Bienvenido al panel de información</Titulo>
              <Icon2/>
              <Info>info.contact@gail.com</Info>
              <Icon/>
              <Info className="tele"> +51 98746515 </Info>
          </Textos>
        </Parte1>
        <Part2>
          <FormContent onSubmit={handleSubmit}>
            <Column>
              <Label>Nombres</Label>
              <Input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
              />

              <Label>Apellidos</Label>
              <Input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
              />

              <Label>DNI</Label>
              <Input
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
              />
              <Label>Sexo</Label>
              <Select name="sexo" value={formData.sexo} onChange={handleChange}>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="*/">Otro</option>
              </Select>
              
              </Column>
              </FormContent>
              <FormContent onSubmit={handleSubmit}>

              <Column>
              

              <Label>Teléfono</Label>
              <Input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />

              <Label>Correo</Label>
              <Input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
              />

              <Label>Contraseña</Label>
              <Input
                type="password"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
              />
            </Column>
            <Button type="submit">Enviar</Button>

          </FormContent>
        </Part2>
      </ContFormu>
    </Cuerpo>
  );
};

export default Formulario;