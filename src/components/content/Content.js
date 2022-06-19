import React from 'react';
import {Item} from '../../components';

function Content(props) {
    return (
        <section id="content">
                {!props.valida ?                    
                    <section id="content">
                        <h3>Não há foto(s) com o nome informado para exibir.</h3>
                    </section>                    
                    :                    
                    props.animais.map((foto) => {
                        return (
                            <Item key={foto.id} id={foto.id} nome={foto.nome} url={foto.url}/>
                        )
                    })
                }
            </section>
    );
}

export default Content;