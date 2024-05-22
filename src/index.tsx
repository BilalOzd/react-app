import ReactDOM from "react-dom/client";
import React from "react";

export function App() {
    return <>React App</>;
}

const rootElement = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

rootElement.render(<App />)


