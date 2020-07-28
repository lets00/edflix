import React from 'react'
import Logo from '../../assets/img/logo.png'
import Button from '../Button'

import './Menu.css'

export default () => {
    return (
       <nav className="Menu">
           <a href="/">
               <img className="Logo" src={Logo} alt="Logo do AluraFlix"/>
           </a>
           {/* <a className="ButtonLink" href="/">Novo vídeo</a> */}
           <Button>Novo vídeo</Button>
       </nav>
    )
}
