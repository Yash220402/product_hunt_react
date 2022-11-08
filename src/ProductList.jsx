import React from "react";
import Product from "./Product";
import products from "./products.js"
import {useState} from "react";

function ProductList() {

	const prods = products.sort(function(a, b) {return b.votes - a.votes});

	const [vote, setVote] = useState(0);

	function handleProductUpVote(productId) {
		prods.forEach(product => {
			if (product.id === productId) {
				setVote(() => {
					return product.votes++;
				});
			}
		})
	}

	const productComponent = prods.map((product) => (
		<Product
			key= {"product-" + product.id}
			id= {product.id}
			title= {product.title}
			description= {product.description}
			url= {product.url}
			votes= {product.votes}
			submitterAvatarUrl= {product.submitterAvatarUrl}
			productImageUrl= {product.productImageUrl}
			onVote= {handleProductUpVote}
		/>
	));
	

	return (
		<div className="items">
			{ productComponent }
		</div>
	);
}

export default ProductList;