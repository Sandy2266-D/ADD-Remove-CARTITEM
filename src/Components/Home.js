import {CartState} from "../Context/Context";
import SingleProduct from "./SingleProduct";
import Filters  from "./Filters";
import "./Styles.css";
const Home = () => {
    const {state : {products}} = CartState()
    console.log(products);
    return (
<div class="home">
    <Filters />
<div class="productContainer">
{products.map((prod)=>
{
return <SingleProduct prod={prod} key={prod.id}/>
})}
</div>
</div>)
}

export default Home;
