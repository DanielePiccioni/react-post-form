import React, { useState } from "react"

export default function PostForm() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    return (
        <form>
            <h2>Meow</h2>
            <div>
                <label>Autore:</label>
                <input type="text" name="author" />
            </div>

            <div>
                <label>Titolo:</label>
                <input type="text" name="title" />
            </div>
        </form>
    )
}
