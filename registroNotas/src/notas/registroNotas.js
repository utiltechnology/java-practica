import React, {useState} from 'react';
import {
  Button,
  Container,
} from "reactstrap"; 

const data = [];

class RegistroNotas extends React.Component {

  state = {
    data: data,
    modalInsertar: false,
    form: {
      id: "",
    },
  };

  insertar= ()=>{
    

    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
    
  }

eliminar=(dato)=>{
  var opcion=window.confirm("Seguro que deseas eliminar el registro " + dato.id +"?");
  if (opcion == true) {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {

      if (dato.id == registro.id) {
        arreglo.splice(contador, 1);
      }
      contador++;
    });
    this.setState({ data: arreglo});
  }
};

  handleChange = (e) => { 
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
 
  render(){
  return (
  <>
<Container>


<br/>
<div className="card" style={{height: "40rem"}}>
  
<nav>
    <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
         
      {this.state.data.map((dato) => (
<button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" key={dato.id}>Nota {dato.id}</button>
              ))}


<button class="nav-link active" id="nav-home-tab " data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false" onClick={() => this.insertar()}>+</button>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
   
  {this.state.data.map((dato) => (
    
    <div class="mb-3"  key={dato.id}>
<br/>
Nota {dato.id}
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
   </div>  
                 ))}

  </div>
</div>

<br />
         
  </Container>
 
  </>
  );
 }
}
export default RegistroNotas;
