
export const handleAddToCart = (product, addToCart, setShowAlert) => {
    addToCart(product);
    setShowAlert(true); 
  
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };
  