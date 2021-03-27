
export async function getProductBySearch (q) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MCO/search?limit=20&q=${q}&offset=2`)
  const responseJson = await response.json()
  const page = await responseJson.paging
  const totalProducts = await page.primary_results
  const numPages = Math.ceil( await totalProducts / 20);
  responseJson.pageNumber =  numPages
  return await responseJson
}

export default {
  getProductBySearch
}

export async function getProductDetails(productId) {
  const response = await fetch(`https://api.mercadolibre.com/items/${productId}`)
  const responseJson = await response.json()
  return await responseJson
}


export async function getPagination (page,q) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MCO/search?limit=20&q=${q}&offset=${page*20}`)
  const responseJson = await response.json()
  
  return responseJson
}
