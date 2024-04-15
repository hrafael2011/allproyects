import React from 'react'
import { formatearFecha, formatearNumero, acortarTexto  } from '../helpers/helpers';


const App1 = () => {

    let fecha = new Date();
    let cantidad = 34343
    let texto = 'Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque. Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de gavilán. El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo. El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a su querido cachorro. El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque. Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de gavilán. El cadáver de Wamba, rey godo de España, fue'

    let edad = 18
    let genero = 'Mascuino'
    let numero = 13
    let paises = [

        {
            nombre: 'Republica Dominicana',
            dominio: 'Do'
        },
        {
            nombre: 'Venezuela',
            dominio: 've'
        },
        {
            nombre: 'Peru',
            dominio: 'Pe'
        },
        {
            nombre: 'Mexico',
            dominio: 'Me'
        },
        {
            nombre: 'Chile',
            dominio: 'ch'
        }

    ]


  return (
    <div>

        {/* Esta es una forma de realizar condiciones */}
      <h3>Renderizado condicional</h3>
      {(edad>=18) &&(
        <h4>La persona es mayor de edad</h4>
        )}

        {/*Esta es otra forma de hacer condiciones, esta vinee siendo como el equivalente a if y else */}
        {(genero == 'Masculino') ?(

            <h4>Es varon</h4>
        ):(
            <h4>Es Hembra</h4>
        )}

        <h1>Rederizado swith case</h1>
        {(()=>{
            switch(numero){
                case 13:
                    return <h4>El numero es 13</h4>
                    break;
                case 14:
                    return <h4>El numero es 14</h4>
                    break;
                default:
                    return <h4>El numero es 11</h4>

            }



        })()} {/* esos parerentesis son nesesarios al final */}


        
        <h1>Ejemplo de loop</h1>
        <ul>
                {[...Array(11)].map((x, i)=>(
                    <li key={i}>{i+1}</li>
                ))}

        </ul>


        <h3>Loop Normal</h3>
           

        <h3>Inline IIFE</h3>
        <h3>Con ES2015 syntax y Array methods</h3>
        <h3>ciclo de for sencillo</h3>


        <h1>Como recorrer un arreglo con map</h1>
        <ul>
            {paises.map((pais, index)=>(
                <li key={pais}>
                   {index +1} - {pais.nombre} El dominio es: {pais.dominio}</li>

            ))}
        </ul>

        <h1>Helper personalizados</h1>
        <ul>
            <li>{formatearFecha(fecha)}</li>
            <li>${formatearNumero(cantidad)}</li>
            <li>{acortarTexto(texto,5,25)}</li>
        </ul>

    </div>
  )
}

export default App1
