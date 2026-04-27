import { useState } from "react";

function UserForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(formData);
    };

    return (
        <div>
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br />
                <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} /><br />
                <button type="submit">Submit</button>
            </form>

            {submitted && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p>Name: {submitted.name}</p>
                    <p>Email: {submitted.email}</p>
                    <p>Message: {submitted.message}</p>
                </div>
            )}
        </div>
    );
}

export default UserForm;
