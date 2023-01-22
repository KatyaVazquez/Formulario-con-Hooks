
const Formulario = (props) => {

  const {datitos, setDatitos} = props;
  const change = (e) => {
    setDatitos ({
      ...datitos,
    [e.target.name]: e.target.value
    
    }
  );
  }
  /* const [first, setfirst] = useState("");
  const [apellido, setapellido] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const [email, setemail] = useState("");
  const [confircontraseña, setconfircontraseña] = useState(""); */

  return (
    <>
      <form>
        <div className='Formulario'>
          <label>Name</label>
          <input type="text" name="Name"  onChange={change}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name= "LastName" onChange={change}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name= "Email" onChange={change}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name= "Password" onChange={change}/>
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name= "confirmPassword" onChange={change}/>
        </div>
      </form>
    </>
  )
}

export default Formulario