import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { productId }
  } = useRouter();

  const [avocato, setAvocato] = useState([]);

  useEffect(() => {
    if (productId) window.fetch(`/api/avo/${productId}`).then(res => res.json()).then(data => setAvocato(data));
  }, [productId]);

  return (
    <>
      <h2>Esta es la pagina del producto: <h1>{avocato?.name}</h1></h2>
    </>
  );
};

export default ProductItem;
