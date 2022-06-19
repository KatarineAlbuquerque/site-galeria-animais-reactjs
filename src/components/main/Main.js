import React, { useEffect, useState } from 'react';
import { getAnimais } from '../../resources/Animals';
import {Content, Footer, Form, Header} from '../../components';

function Main() {
    // Passando Estados para as constantes
    const [pesquisa, setPesquisa] = useState("");
    const [animais, setAnimais] = useState([]);
    const [valida] = useState(true);

    // Função de Pesquisa do formulário
    const pesquisar = (e) => {
        e.preventDefault(); // Não recarrega o navegador
        let a = getAnimais(); // "a" Seta todos os animais

        // Filtra o animal de acordo com o texto informado no campo input.
        const resultado = a.filter(foto => foto.nome.toLowerCase().indexOf(pesquisa) !== -1);
        getPesquisa(resultado); // retorna um resultado e adiciona a lista.
    }
    
    // Função que que recebe a pesquisa.
    const getPesquisa = (resultado) => {
        setAnimais(resultado); // Retorna o resultado da pesquisa
    }
    
    // Função do campo input onChange
    const pesquisarChange = (e) => {
        let valor = e.target.value.toLowerCase(); // Captura o valor do campo input com letras minúsculas
        setPesquisa(valor); // seta o valor da pesquisa
    }

    useEffect(() => { // Trabalha com o Ciclo de Vida do React
        setAnimais(getAnimais()); // Seta a função que lista todos os animais
    }, []);

    return (
        <div id="main">
            {/** Cabeçalho */}
            <Header />
            {/** Formulário */}
            <Form onSubmit={(e) => pesquisar(e)} onChange={(e) => pesquisarChange(e)} />
            {/** Conteúdo */}
            <Content
                valida={valida}
                animais={animais}
            />
            {/** Rodapé */}
            <Footer />
        </div>
    )
}

export default Main;
