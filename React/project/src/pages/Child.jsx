function Child({ name, age }) {
    return (
        <div style={{ border: "1px solid #aaa", padding: "1rem", margin: "0.5rem" }}>
            <h3>Child Component</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

export default Child;
