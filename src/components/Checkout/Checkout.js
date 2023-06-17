import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, total, clearCart } = useContext(CartContext)
    
    const createOrder = async ({ name, phone, number }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
        }


    }
    if (loading) {
        return <h1>Order in proccess . . .</h1>
    }
    if (orderId) {
        return <h1>Your order ID is: {orderId}</h1>
    }
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout