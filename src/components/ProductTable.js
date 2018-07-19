import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
class ProductTable extends React.Component{

    render(){

        let rows=[]
        let lastCategory= null;
        this.props.data.map(row =>{
            if(row.category!==lastCategory){
                rows.push(
                    <ProductCategoryRow key={row.category} catName={row.category}/>
                )
            }
            lastCategory=row.category;
            if(row.name.toLowerCase().includes(this.props.filterText.toLowerCase())){
                if(this.props.inStockOnly){
                        if(row.stocked){
                            rows.push(
                                <ProductRow key={row.name} 
                                            prodName={row.name} 
                                            prodPrice={row.price} 
                                            color={row.stocked? "#000": "#f00"}/>
                            )
                        }
                }else{
                    rows.push(
                        <ProductRow key={row.name} 
                                    prodName={row.name} 
                                    prodPrice={row.price} 
                                    color={row.stocked? "#000": "#f00"}/>
                    )
                }
            }
            
            return null;
        });
        return(
            <tbody>
                {rows}
            </tbody>
        );
    }
}



export default ProductTable;