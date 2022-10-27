import cart from "./cart.svg"

function CartWidget() {
    return (
            <img className="h-12 mx-4 cursor-pointer carrito" alt='cart' src={cart}></img>
            
    );
}

export default CartWidget;
