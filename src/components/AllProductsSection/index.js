import {Component} from "react"
import Cookies from "js-cookie";

import { ClipLoader } from "react-spinners";

import ProductCard from "../ProductCard";
import "./index.css"
import ProductsHeader from "../ProductsHeader"

const sortByOptions=[
    {
        optionId:"PRICE_HIGH",
        displayText:"Price (High-Low)",
    },
    {
        optionId:"PRICE_LOW",
        displayText: "Price (Low-High)",
    }

]



class AllProductsSection extends Component{
    state={
        productsList:[],
        isLoading:false,
        activeOptionId: sortByOptions[0].optionId,
    };

    componentDidMount(){
        this.getProducts();
    }

    getProducts=async()=>{

        this.setState({
            isLoading:true,
        })
        
        const {activeOptionId}=this.state;
        const apiUrl=`https://apis.ccbp.in/products?sort_by=${activeOptionId}`;
        const jwtToken=Cookies.get("jwt_token");
        const options={
            headers:{
                Authorization:`Bearer ${jwtToken}`,
            },
            method:"GET",
        };
        const response=await fetch(apiUrl,options);
        if(response.ok===true){
            const fetchedData=await response.json();
            const updatedData=fetchedData.products.map((product)=>({
                title: product.title,
                brand: product.brand,
                price: product.price,
                id: product.id,
                imageUrl: product.image_url,
                rating: product.rating,
            }));
            this.setState({
                productsList:updatedData,
                isLoading:false,
            });
        }
    };

    updateActiveOptionId=activeOptionId=>{
        this.setState({activeOptionId},this.getProducts)
    }

    renderProductsList=()=>{
        const {productsList,activeOptionId}=this.state;
        return(
            // <div>
            //     <h1 className="products-list-heading"> All Products</h1>
            //     <ul className="products-list">
            //         {productsList.map((product)=>(
            //             <ProductCard productData={product} key={product.id} />
            //         ))}
            //     </ul>
            // </div>
            <>
                <ProductsHeader 
                    activeOptionId={activeOptionId}
                    sortByOptions={sortByOptions}
                    updateActiveOptionId={this.updateActiveOptionId}
                />
                <ul className="products-list">
                    {productsList.map(product=>(
                        <ProductCard productData={product} key={product.id}/>
                    ))}
                </ul>
            </>
        )
    };

    renderLoader = () => (
        <div className="products-loader-container" data-testid="loader">
          <ClipLoader color="#0b69ff" loading={true} size={50} />
        </div>
      );      

    render(){
        const {isLoading} =this.state
        return isLoading? this.renderLoader() : this.renderProductsList();
    }
}

export default AllProductsSection;