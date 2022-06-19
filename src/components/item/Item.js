import React from 'react';

function Item(props) {
    return (
        <aside className="photo" key={props.id}>
            <a href={props.url} target="_blank" rel="noreferrer">
                <img src={props.url} alt={props.nome} />
            </a>
        </aside>
    );
}

export default Item;