import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setHeaderSubTitle } from '../redux/actions/BooksAction';
import { addToOrders, emptyCart, setAddress } from '../redux/actions/StoreAction';
import { CURRENCY, DEFAULT_PRICE, PRECISION, SHIPPING, TAX } from '../util/helper';

const Cart = () => {
    const { cart, address } = useSelector((state: any) => state.store);

    const [editing, setEditing] = useState(false);
    const [cartDetails, setCart] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goToOrders = useCallback(() => navigate('/my-orders/', { replace: false }), [navigate]);

    useEffect(() => {
        dispatch(setHeaderSubTitle('Cart') as any);
        const tempCart = cart.reduce((acc: any, curr: any) => {
            if (acc[curr.id]) acc[curr.id] = { ...curr, count: acc[curr.id].count + 1 };
            else acc[curr.id] = { ...curr, count: 1 };
            return acc;
        }, {});
        setCart(Object.values(tempCart));
    }, [dispatch, cart]);

    const saveAddress = (e: any) => {
        e.preventDefault();
        if (!editing) return;
        const newAddressForm = new FormData(document.getElementById('address') as HTMLFormElement);
        const newAddress = {
            HNo: newAddressForm.get('hno') as string || address.HNo,
            Street: newAddressForm.get('street') as string || address.Street,
            City: newAddressForm.get('city') as string || address.City,
            ZipCode: newAddressForm.get('zip') as string || address.ZipCode
        };
        dispatch(setAddress(newAddress) as any);
        setEditing(false);
    };
    const editAddress = () => {
        setEditing(true);
    };
    const clearCart = () => {
        dispatch(emptyCart() as any);
    };

    const checkout = () => {
        const orders = cartDetails.map((book: any) => ({
            ...book,
            date: new Date().toDateString()
        }));
        dispatch(addToOrders(orders) as any);
        goToOrders();
    };

    const price: number = cart.reduce((acc: any, obj: any) => {
        return acc + parseFloat(obj.price);
    }, DEFAULT_PRICE);
    const tax: number = Number((price * TAX).toFixed(PRECISION));
    const shippingCharges: number = SHIPPING;
    const total: number = Number(price) + Number(tax) + Number(shippingCharges);

    return (
        <div className="cart">
            <div className="shipping">
                <h4>Shipping Address</h4>
                <div className="address">
                    <form id='address'>
                        <div>
                            <label>H.No:</label>
                            <input type="text" className={editing ? '' : 'input-disabled'} disabled={!editing} name="hno" defaultValue={address.HNo} required />
                        </div>
                        <div>
                            <label>Street:</label>
                            <input type="text" className={editing ? '' : 'input-disabled'} disabled={!editing} name="street" defaultValue={address.Street} required />
                        </div>
                        <div>
                            <label>City:</label>
                            <input type="text" className={editing ? '' : 'input-disabled'} disabled={!editing} name="city" defaultValue={address.City} required />
                        </div>
                        <div>
                            <label>ZipCode:</label>
                            <input type="text" className={editing ? '' : 'input-disabled'} disabled={!editing} name="zip" defaultValue={address.ZipCode} required />
                        </div>
                        <div className="options">
                            <button className="btn" onClick={saveAddress} disabled={!editing}>Save Address</button>
                            <button type='button' className="btn" onClick={editAddress} disabled={editing}>Edit Address</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="shopping">
                {price !== DEFAULT_PRICE ?
                    <>
                        <div className="shoppingBag">
                            <h4>Shopping Bag</h4>
                            <ol>
                                {cartDetails.map((book: any) => (<li key={book.id}><b>{book.title}</b>  X  {book.count}</li>))}
                            </ol>
                        </div>
                        <div className="paymentInfo">
                            <h4>Payment Info</h4>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Items Price:</td>
                                        <td>{CURRENCY} {price}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax:</td>
                                        <td>{CURRENCY} {tax}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charges:</td>
                                        <td>{CURRENCY} {shippingCharges}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Total</td>
                                        <td>{CURRENCY} {Number(total).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td className="options">
                                            <button className="btn" onClick={checkout}>Checkout</button>
                                            <button className="btn" onClick={clearCart}>Cancel</button>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </>
                    : <h4>⚠️ Your cart is empty</h4>}
            </div>
        </div>
    );
};

export default Cart;
