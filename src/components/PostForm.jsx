import React, { useState } from "react"

export default function PostForm() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Meow</h2>
            <div>
                <label>Autore:</label>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Titolo:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Testo:</label>
                <textarea
                    name="body"
                    value={formData.body}
                    onChange={handleChange}></textarea>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="public"
                        checked={formData.public}
                        onChange={handleChange} />
                    Pubblico?
                </label>
            </div>
            <button type="submit">Invia</button>
        </form>
    )
}
