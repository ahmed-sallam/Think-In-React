import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const data= [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterText:'',
            inStockOnly:false
        }
    }
    handleChangeInput=(filterText)=>{
        this.setState({filterText});
    }

    handleChangeCheckbox=(inStockOnly)=>{
        this.setState({inStockOnly});
    }

    render(){
        return(
            <div>
                <SearchBar inStockOnly={this.state.inStockOnly} 
                filterText={this.state.filterText}
                changeInput={this.handleChangeInput}
                changeCheckbox={this.handleChangeCheckbox}/>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <ProductTable data={data} 
                    inStockOnly={this.state.inStockOnly} 
                    filterText={this.state.filterText}/>
                </table>
            </div>
        );
    }
}

export default FilterableProductTable;