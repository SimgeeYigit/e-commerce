import { ChevronRight, Package, Truck, Trash2, ShoppingBasket, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { decreaseCartItem, increaseCartItem, removeCartItem } from "../../Redux/store/actions/shoppingCartActions";

const ShoppingCart = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [code, setCode] = useState("");
    
    const cart = useSelector((state) => state.shoppingCart.cart);

    const [selectedItems, setSelectedItems] = useState({});

    useEffect(() => {
        const initialSelection = {};
        cart.forEach((item) => {
            initialSelection[item.id] = true;
        });
        setSelectedItems(initialSelection);
    }, [cart]);

    const handleSelectChange = (itemId) => {
        setSelectedItems((prev) => ({
            ...prev,
            [itemId]: !prev[itemId],
        }));
    };

    const totalPrice = cart.reduce((total, item) => {
        return selectedItems[item.id]
            ? total + item.price * item.quantity
            : total;
    }, 0);

    const totalQuantity = cart.reduce((total, item) => {
        return selectedItems[item.id]
            ? total + item.quantity
            : total;
    }, 0);

    const codeControl = (code) => {
        if (code === "SUMMER20") {
            return -20;
        }
        return 0;
    }

    const discount = codeControl(code);
    const grandTotal = totalPrice + 0 + discount; 

    return (
        <div>
            <div className="font-montserrat px-[20px] md:px-6">
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-20">
                        <ShoppingBasket className="w-32 h-32 text-[#23A6F0] rounded-full border border-[#23A6F0] p-4" />
                        <p className="font-bold text-2xl">Your cart is empty.</p>
                        <p>Add something to make me happy :)</p>
                        <button
                            onClick={() => history.push("/shop")}
                            className="bg-[#23A6F0] text-white p-3 rounded-md text-sm hover:bg-[#1d8dd8] font-bold"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between md:flex-row flex-col">
                        <div className="font-montserrat px-[20px] md:px-6">
                            <h1 className="font-bold text-lg py-8">My Cart ({cart.length} Items)</h1>
                            <ul className="flex flex-col gap-8 pb-8">
                                {cart.map((item) => (
                                    <li className="border rounded" key={item.id}>
                                        <div className="h-12 bg-gray-100 flex items-center">
                                            <div className="flex gap-2 items-center p-2 md:p-8">
                                                <h2 className="text-gray-400">
                                                    Seller: <span className="text-black">{item.store_id}</span>
                                                </h2>
                                                <p className="bg-emerald-500 text-white p-1 rounded text-sm">
                                                    {item.rating}
                                                </p>
                                                <ChevronRight className="w-4 text-gray-400" />
                                                <p className="border p-1 rounded text-sm border-sky-500 text-sky-500 inline-flex items-center gap-1">
                                                    Corporate
                                                    <span className="w-4 h-4 flex items-center justify-center border border-sky-500 rounded-full text-xs">
                                                        i
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-teal-100 h-8 flex justify-center items-center gap-2">
                                            <Package className="text-teal-500 w-4 h-4" />
                                            <p className="text-base">Free Shipping!</p>
                                        </div>

                                        <div className="flex justify-between p-8 items-center gap-4 md:gap-24 md:flex-row flex-col">
                                            <div className="flex items-center gap-4 md:flex-row flex-col">
                                                <input
                                                    type="checkbox"
                                                    checked={!!selectedItems[item.id]}
                                                    onChange={() => handleSelectChange(item.id)}
                                                    className="w-5 h-5 emerald-500 cursor-pointer"
                                                />

                                                <img
                                                    src={item.images[0]?.url}
                                                    alt={item.name}
                                                    className="w-28 h-auto object-cover"
                                                />

                                                <div className="flex flex-col gap-2">
                                                    <h3 className="font-semibold text-gray-800">
                                                        {item.name}{" "}
                                                        <span className="font-normal text-gray-500">
                                                            {item.description}
                                                        </span>
                                                    </h3>
                                                    <p>Size: One Size</p>
                                                    <div className="flex gap-2">
                                                        <Truck className="text-teal-500 w-5 h-5 min-w-5 min-h-5" />
                                                        <p>Estimated delivery date: 9 days</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-center items-center">
                                                <div className="border flex items-center rounded">
                                                    <button
                                                        onClick={() => dispatch(decreaseCartItem(item.id))}
                                                        disabled={item.quantity === 1}
                                                        className="flex items-center justify-center bg-gray-100 py-2 px-2"
                                                    >
                                                        -
                                                    </button>
                                                    <p className="w-12 text-center">{item.quantity}</p>
                                                    <button
                                                        onClick={() => dispatch(increaseCartItem(item.id))}
                                                        className="flex items-center justify-center bg-gray-100 py-2 px-2 text-sky-500"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                                            <Trash2
                                                className="cursor-pointer w-5 h-5 min-w-5 min-h-5"
                                                onClick={() => dispatch(removeCartItem(item.id))}
                                                strokeWidth={1.0}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex justify-between pb-8 px-12 font-bold">
                                <p>{totalQuantity} Items</p>
                                <p>{`Total: $${totalPrice.toFixed(2)}`}</p>
                            </div>
                        </div>
                        <div className="flex flex-col font-montserrat md:px-6 py-8 gap-6 w-full md:w-[40%]">
                            <div className="flex justify-center bg-[#23A6F0] text-white p-3 rounded-md text-sm hover:bg-[#1d8dd8] font-bold">
                                <button>Confirm the order</button>
                                <ChevronRight className="w-5 h-5" />
                            </div>
                            <div className="border p-4 rounded">
                                <h3 className="text-xl pb-5">Order Summary</h3>
                                <div className="flex flex-col gap-2 border-b pb-4">
                                    <div className="flex justify-between">
                                        <p className="pr-4">Total of products:</p>
                                        <p>${totalPrice.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="pr-4">Shipping:</p>
                                        <p>$29.00</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="pr-4">Free shipping today only:</p>
                                        <p className="font-bold text-[#23A6F0]">-$29.00</p>
                                    </div>
                                    {codeControl(code) !== 0 && (<div className="flex justify-between">
                                        <p className="pr-4">Discount code:</p>
                                        <p className="font-bold text-[#23A6F0]">-$20.00</p>
                                    </div>)}
                                </div>
                                <div className="flex justify-between pt-4">
                                    <p>Total:</p>
                                    <p className="font-bold text-[#23A6F0]">${grandTotal.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-montserrat flex text-center items-center justify-center bg-white text-[#23A6F0] p-3 rounded-md text-sm font-bold border rounded">
                                    <Plus className="w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="ENTER DISCOUNT CODE"
                                        className="ml-2 outline-none text-sm"
                                        onChange={(e) => setCode(e.target.value)} />
                                </div>
                                <p className="font-montserrat text-sm text-center">Use the code SUMMER20 for a special $20 discount today.</p>
                            </div>
                            <div className="flex justify-center bg-[#23A6F0] text-white p-3 rounded-md text-sm hover:bg-[#1d8dd8] font-bold">
                                <button>Confirm the order</button>
                                <ChevronRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
