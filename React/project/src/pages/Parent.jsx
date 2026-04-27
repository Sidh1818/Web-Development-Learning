import Child from "./Child";

function Parent() {
    const children = [
        { name: "Alice", age: 10 },
        { name: "Bob", age: 8 },
    ];

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Parent passes data down to each Child via props:</p>
            {children.map((child, index) => (
                <Child key={index} name={child.name} age={child.age} />
            ))}
        </div>
    );
}

export default Parent;
