import { useState, useEffect } from 'react';
import Link from 'next/link';

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window.fetch('/api/avo').then((res) => res.json()).then(({ data, length }) => { setProductList(data); });
  }, []);

  return (
    <>
      <h1>Welcome gonorreas!</h1>
      {productList.map((product) =>
        <div key={product.id}>
          <Link href={`product/${product.id}`}>
            {product.name}
          </Link>
        </div>)}
    </>
  );
};
export default Home;
