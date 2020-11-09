import { useRouter } from 'next/router'
import NavBar from '../../components/NavBar'


const ProductItem = () => {
  const {
    query: { productId }
  } = useRouter()
  return (
    <div>
      <NavBar/>
      Esta es la pagina del producto: {productId}
    </div>
  )
}

export default ProductItem
