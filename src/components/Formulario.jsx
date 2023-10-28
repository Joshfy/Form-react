import styled from "styled-components";
import Logo from '../assets/logo.png';
import Ema from '../assets/verde.jpg';
import Alert from './Alert'; // Asegúrate de ajustar la ruta de importación
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


  //aAa   //

  const [formularioValido, setFormularioValido] = useState(true);

const handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name === 'telefono') {
    // Validar que el campo "Teléfono" solo contenga números
    if (!/^\d*$/.test(value)) {
      alert('El campo Teléfono solo debe contener números.');
      setFormularioValido(false); // Marcar el formulario como inválido
    }
  }

  setFormData({
    ...formData,
    [name]: value,
  });
};  

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

  
  ////verificando///
  const [camposInvalidos, setCamposInvalidos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const camposFaltantes = [];
  
    switch ('') {
      case formData.nombres:
        camposFaltantes.push('nombres');
        break;
      case formData.apellidos:
        camposFaltantes.push('apellidos');
        break;
      case formData.dni:
        camposFaltantes.push('dni');
        break;
      case formData.telefono:
        camposFaltantes.push('telefono');
        break;
      case formData.correo:
        camposFaltantes.push('correo');
        break;
      case formData.contraseña:
        camposFaltantes.push('contraseña');
        break;
    }
  
    setCamposInvalidos(camposFaltantes);
    
  
    if (camposFaltantes.length > 0) {
      alert(`Falta rellenar los siguientes campos: ${camposFaltantes.join(', ')}`);
    } else if (!formularioValido) {
      alert('El formulario no es válido. Por favor, corrija los errores.');
    } else {
      alert('Enviando datos');
    }
  };

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
                onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                
              />
              <Label>Apellidos</Label>
              <Input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                
              />

              <Label>DNI</Label>
              <Input
                type="number"
                name="dni"
                value={formData.dni}
                onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
 
              />
              <Label>Sexo</Label>
              <Select name="sexo" value={formData.sexo}  required>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="*/">Otro</option>
                onChange={(e) => setFormData({ ...formData, sexo: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}

              />

              <Label>Correo</Label>
              <Input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={(e) => setFormData({ ...formData, correo: e.target.value })}

              />

              <Label>Contraseña</Label>
              <Input
                type="password"
                name="contraseña"
                value={formData.contraseña}
                
                onChange={(e) => setFormData({ ...formData, contraseña: e.target.value })}

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
