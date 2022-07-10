import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Product(props){
    return (
        <>
            <h4>{props.name}</h4>;
            <button onClick={()=>alert(`Produk ini bernama ${props.name}`)}>Detail</button>;
        </>
    )
}
function App(){
    <>
        <Product name="A"/>
        <Product name="B"/>
        <Product name="C"/>
    </>
}

root.render(App());