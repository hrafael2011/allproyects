import {useState} from 'react'

const useHooksPersonalizados = () => {
    const[verduras, Setverduras] = useState([]);
  return [verduras, Setverduras];
}

export default useHooksPersonalizados
