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
        </form>
    )
}
