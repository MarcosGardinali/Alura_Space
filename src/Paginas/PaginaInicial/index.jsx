import React from 'react'
import Cabecalho from "Componentes/Cabecalho";
import Menu from "Componentes/Menu"
import styles from './PaginaInicial.module.scss'
import Banner from 'Componentes/Banner';
import Rodape from 'Componentes/Rodape';
import Galeria from 'Componentes/Galeria';
import Populares from 'Componentes/Populares';

export default function PaginaInicial(){
    return(
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <Banner />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>  
    )
}