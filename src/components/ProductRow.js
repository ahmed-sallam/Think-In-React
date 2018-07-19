import React from 'react';

const ProductRow = (props) =>{
    return(
        <tr style={{color: props.color}}>
            <td>{props.prodName}</td>
            <td>{props.prodPrice}</td>
        </tr>
    );
}

export default ProductRow;