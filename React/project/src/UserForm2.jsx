import { useState } from "react";

function UserForm2() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>User Form - Live Preview</h2>

            <form>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br />
                <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} /><br />
            </form>

            <h3>Live Preview:</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Message: {formData.message}</p>
        </div>
    );
}

export default UserForm2;
