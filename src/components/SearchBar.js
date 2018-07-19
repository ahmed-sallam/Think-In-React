import React from 'react';

class SearchBar extends React.Component{

    handleOnChangeInput = (e)=>{
        let filterText= e.target.value;
        this.props.changeInput(filterText)
    }
    handleOnChangeCheckbox = (e)=>{
        let inStockOnly= e.target.checked;
        this.props.changeCheckbox(inStockOnly)

    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Search..."
                value={this.props.filterText}
                onChange={this.handleOnChangeInput}/>
                <p>
                <input type="checkbox" name="inStock" 
                checked={this.props.inStockOnly} 
                onChange={this.handleOnChangeCheckbox}/>
                Only show products in stock.
                </p>
            </div>
        );
    }
}
export default SearchBar;