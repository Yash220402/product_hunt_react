import React from "react";
import "./styles/Product.css"

function Product(props) {

	function handleUpVote() {
		props.onVote(props.id);
	}

	return (
		<div className="product">
			<div className="product-img">
				<img className="image" src={props.productImageUrl} alt=""/>
			</div>

			<div className="content">
				<div className="header">
					<a onClick={handleUpVote} href="#">▲</a> {props.votes}
					&nbsp; &nbsp;
					<a href={props.url}>{props.title}</a>
				</div>
				<br/>
				<div className="description">
					<p>{props.description}</p>
				</div>
				<div className="extra">
					<span>Submitted By:</span>
					<img 
						className="avatar image"
						src={props.submitterAvatarUrl}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Product;