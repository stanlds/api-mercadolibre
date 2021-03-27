import React from 'react'
import Product from './Product'
import Search from './Search'
import {getProductBySearch, getPagination } from '../services/products'
import ReactPaginate from 'react-paginate'

class ProductContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      product: [],
      isFetch: true,
      amountPage:0,
      getSearch:""
    }
  }


  handleSearch = async (search) => {
    const responseJson = await getProductBySearch(search)
    this.setState({ product: responseJson.results, getSearch: search, amountPage: responseJson.pageNumber})
  }

  handlePagination = async (selectedPage) => {
    const page = selectedPage.selected;
    const responseJSon = await getPagination(page, this.state.getSearch)
    console.log(responseJSon)
    this.setState({ product: responseJSon.results, isFetch: false });
}

  render () {
    const { isFetch, product , amountPage} = this.state

    return (
      <div>
      <>
        <Search handleSearch={this.handleSearch} />

        {
          isFetch && ''
        }

        {
          (!isFetch && !product.length) && 'No se encuentra el producto'
        }

        <section className="product-container">
          {
            product.map((product) => <Product
              id={product.id}
              name={product.title}
              price={product.price}
              imageUrl={product.thumbnail}
            />)
          }
        </section>
      </>
      <ReactPaginate  
      previousLabel={"← Previous"}
      nextLabel={"Next →"}
      pageCount={amountPage}
      onPageChange={this.handlePagination}
      containerClassName={"pagination"}
      previousLinkClassName={"pagination__link"}
      nextLinkClassName={"pagination__link"}
      disabledClassName={"pagination__link--disabled"}
      activeLinkClassName={"pagination__link--active"}    
      
      />
      </div>
    )
  }
}

export default ProductContainer
