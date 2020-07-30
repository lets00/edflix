import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

export default function CadstroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de categoria</h1>
            <form>
                <label>Nome da categoria</label>
                <input type="text"/>
                <button type="submit">Cadsatrar</button>
            </form>
            <Link to='/'>Ir para home</Link>
        </PageDefault>
    )
}