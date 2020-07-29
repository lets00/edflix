import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import Button from '../Button'

import './Menu.css'

export default () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo do AluraFlix" />
            </Link>
            <Button as={Link} to="/cadastro/video">Novo vídeo</Button>
        </nav>
    )
}
