import {useState} from 'react'
import {Link} from 'react-router-dom'
import { categorias,productos } from '../datos'
import useHooksPersonalizados from '../hooks/useHooksPersonalizados'

const HookCustom = () => {

    const[categoria, setCategoria] = useState(0);
    const[verduras, setVerduras] = useHooksPersonalizados();
    const[producto, setProducto] = useState(0);
    const handleDesplegar = (valor) =>{
        setCategoria(valor);
        if(valor==0){
            Setverduras([]);
        }else{
            setVerduras(productos.filter(prod=>prod.categorias_id=== parseInt(valor) )); // el valor es de arreglo producto, filster es una funcion de java script, que permite crear una variable en tiempo de ejecucion , el parseInt es por que  es un string y para que lo lea 
        }
    }
  return (
    <>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Custom Hook
          </li>
        </ol>
      </nav>
      <hr />
      <h3>HooksCustom</h3>

      <div className="form-grou">
        <label htmlFor="categoria">Categorias</label>
        <select value={categoria} onChange={(e)=>{handleDesplegar(e.target.value)}} id="categoria" className='form-control'>
        <option value="0">Seleccione....</option>
        {categorias.map((cat)=>(
            <option key={cat.id} value={cat.id}>{cat.nombre}</option>
        ))}
        </select>
        
      </div>

      <div className="form-grou">
        <label htmlFor="categoria">Productos</label>
        <select value={categoria} onChange={()=>{}} id="producto" className='form-control'>
        <option value="0">Seleccione....</option>
        {verduras.map((verdura)=>
        (
                <option key={verdura.id} value={verdura.id}>{verdura.nombre}</option>
        ))}
        
        </select>
        
      </div>
    </>
  )
}

export default HookCustom
