import React from 'react';

function Form(props) {
    return(
        <form onSubmit={props.onSubmit} id="form">
            <input type="text" name="pesquisa" onChange={props.onChange} placeholder="Pesquisar animal..." autoComplete='off' />
            <button type="submit">BUSCAR</button>
        </form>
    );
}

export default Form;