import ReactDOM from "react-dom/client";
import React from "react";
import './index.css';

export function App() {
    return <>
    React App
    //INLINE STYLE
    <div style = {{color: 'red'}}>INLINE STYLE</div>
    //EXTERNAL STYLE İŞLEMİ
    <div className="container">External CSS</div>
    </>;
    
}

const rootElement = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

rootElement.render(<App />)


