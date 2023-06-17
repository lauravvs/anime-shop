import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div className="container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    name
                    <input 
                    className="Label">
            </label>
        </div>
    )
}