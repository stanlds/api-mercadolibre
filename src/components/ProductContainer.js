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
      previousLabel={"Anterior"}
      nextLabel={"Siguiente"}
      pageCount={amountPage}
      containerClassName={"btn-group paginationBttns"}
      previousLinkClassName={"btn btn-dark"}
      nextLinkClassName={"btn btn-dark"}
      pageLinkClassName={"btn btn-outline-secondary"}
      activeLinkClassName={"btn btn-dark"}
      onPageChange={this.handlePagination}
      />
      </div>
    )
  }
}

export default ProductContainer
