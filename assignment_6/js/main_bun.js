


var glazing='';
var flavor='';
var amount=0;
var finalPrice=0;
var shoppingList=[];
var numShopped=0;
var finalPrice;
var imgSource='';
var foo=0;
var slideNum=0;

function scrollSlides(slideNum) {
  var i;
  var slides = document.getElementsByClassName("card");
  
  // if (slideNum > slides.length) {slideIndex = 1} 
  // if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length-2; i++) {
      slides[i].style.display = "none"; 
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block"; 
  // dots[slideIndex-1].className += " active";
}


function selectProperty(propertyName,category,price){
	if(category=='flavor'){
		flavor=propertyName;
		addNewList();
	} else if (category=="amount"){
		amount=propertyName;
		var amountbuttons=document.getElementsByClassName("amountButton")
		for (i = 0; i < amountbuttons.length; i++) {
			amountbuttons[i].style.backgroundColor = "#CFEBFF";
			amountbuttons[i].style.color="#0095FF"

		}
		document.getElementById(String(propertyName)).style.backgroundColor="#0095FF";
		document.getElementById(String(propertyName)).style.color="#ffffff";
		finalPrice="$"+String(price*amount);
		console.log(price);
		console.log(amount);
		console.log(finalPrice);
		document.getElementById("finalPrice").innerHTML=finalPrice;
	}


	

}

function selectGlazing(propertyName, flavor){
		console.log("SELECTGLAZING");
		glazing=propertyName;



		if (glazing=='Sugar-Milk'&&flavor=='original'){
			document.getElementById("food").src="img/pic8.png";
			imgSource="img/pic8.png"
			
		}else if(glazing=='Vanilla-Milk'&&flavor=='original'){
			document.getElementById("food").src="img/pic7.png";
			imgSource="img/pic7.png"
			
		}else if(glazing=="Double-Chocolate"&&flavor=='original'){
			document.getElementById("food").src="img/pic9.png";
			imgSource="img/pic9.png"
		}else if(glazing=="None"&&flavor=='original'){
			document.getElementById("food").src="img/pic1.png";
			imgSource="img/pic1.png"
		} else if (flavor=="blueberry"){
			document.getElementById("food").src="img/pic2.png";
			imgSource="img/pic2.png";
		} else if (flavor=="walnut"){
			document.getElementById("food").src="img/pic3.png";
			imgSource="img/pic3.png";
		}else if(flavor=="glutenfree"){
			document.getElementById("food").src="img/pic4.png";
			imgSource="img/pic4.png";
		}else if(flavor=="pumpkin"){
			document.getElementById("food").src="img/pic5.png";
			imgSource="img/pic5.png";
		}else if(flavor=="pecam"){
			document.getElementById("food").src="img/pic6.png";
			imgSource="img/pic6.png";
		}



		var glazingbuttons=document.getElementsByClassName("glazingButton")
		for (i = 0; i < glazingbuttons.length; i++) {
			glazingbuttons[i].style.backgroundColor = "#CFEBFF";
			glazingbuttons[i].style.color="#0095FF"

		}
		document.getElementById(propertyName).style.backgroundColor="#0095FF";
		document.getElementById(propertyName).style.color="#ffffff";

	
}

function cartNumber(){
	console.log("cartNUMBER");
	document.getElementById("cartText").innerHTML="Cart " + String(sessionStorage.length);

}
function addNewList(){
	console.log(flavor, amount, glazing);
	if (flavor!=""&& amount!=0 && glazing!=""){
		console.log("ENTER LOOP");
		var item=new shopItem();
		var cartText=document.getElementById("cartText");
		numShopped=String(numShopped);
		var key=String(flavor)+String(amount)+String(glazing);

		sessionStorage.setItem(key, JSON.stringify(item));
 		// sessionStorage.setItem("cart", JSON.stringify(shoppingList));

 		console.log(sessionStorage);
 		flavor="";
		amount=0;
		glazing="";

		document.getElementById("cartText").innerHTML="Cart " + String(sessionStorage.length);

	}
	
	

}

function shopItem(){
	this.flavor=flavor;
	this.glazing=glazing;
	this.amount=amount;
	this.price=finalPrice;
	this.imgSource=imgSource;
	console.log("this.imageSOURCE",this.imgSource);
	
}

function createBlock(cartFlavor,cartGlazing,cartAmount, cartPrice, cartImage){
	var container=document.getElementsByClassName("container")[0];
	var subContainer=document.createElement("div");
	subContainer.classList.add("subContainer");

	// create image
	var image=document.createElement("IMG");
	image.src=cartImage;
	// if (cartFlavor=='Original Cinnamon Roll'){
	// 	image.src="pic1.png";
	// } else if (cartFlavor=="Blueberry Cinnamon Roll"){
	// 	image.src="pic2.png";
	// } else if (cartFlavor=="Walnut Cinnamon Roll"){
	// 	image.src="pic3.png";
	// }else if(cartFlavor=="Original (Gluten Free) Cinnamon Roll"){
	// 	image.src="pic4.png";
	// }else if(cartFlavor=="Pumpkin Spice Cinnamon Roll"){
	// 	image.src="pic5.png";
	// }else if(cartFlavor=="Caramel Pecan Cinnamon Roll"){
	// 	image.src="pic6.png";
	// }
	
	image.classList.add("summary");
	image.classList.add("imageFood");



	// create information summary

	var info=document.createElement('div');
	info.classList.add("summary");
	info.id="info";

	var productTitle=document.createElement('p');
	productTitle.classList.add('producttitle');
	productTitle.innerHTML=String(cartFlavor);

	var glazing=document.createElement('h3');
	glazing.innerHTML="Glazing: "+String(cartGlazing);

	var amount=document.createElement('h3');
	amount.innerHTML="Amount: "+String(cartAmount);

	info.appendChild(productTitle);
	info.appendChild(glazing);
	info.appendChild(amount);

	//create price
	var price=document.createElement('p');
	price.innerHTML=cartPrice;
	price.id="price";
	price.classList.add("summary");

	//create remove button
	var remove=document.createElement('a');
	remove.innerHTML="remove";
	remove.classList.add("remove");
	remove.id=String(cartFlavor)+String(cartAmount)+String(cartGlazing);
	remove.onclick=function(){
		var parent=this.parentElement
		parent.parentElement.removeChild(parent);
		sessionStorage.removeItem(remove.id);
		document.getElementById("cartText").innerHTML="Cart " + String(sessionStorage.length);

	};
	remove.classList.add("summary");

	var line=document.createElement('hr');

	//append those elements into the container
	subContainer.appendChild(image);
	subContainer.appendChild(info);
	subContainer.appendChild(price);
	subContainer.appendChild(remove);
	subContainer.appendChild(line);
	container.appendChild(subContainer);

	console.log("CREATE CART");

	
}

function createCart(){
	document.getElementById("cartText").innerHTML="Cart " + String(sessionStorage.length);

	var shopped =sessionStorage.getItem("cart");
	var shopped=JSON.parse(shopped);
	console.log(typeof(shopped));
	for (var i = 0; i < sessionStorage.length; i++){
		var itemInCart=sessionStorage.getItem(sessionStorage.key(i));
		itemInCart=JSON.parse(itemInCart);
	// sessionStorage.forEach(function(itemInCart){
		cartGlazing=itemInCart.glazing;
		cartFlavor=itemInCart.flavor;
		cartAmount=itemInCart.amount;
		cartPrice=itemInCart.price;
		cartImage=itemInCart.imgSource;
		console.log("CARTIMAGE IN THE STORATE", itemInCart.imgSource);
		createBlock(cartFlavor,cartGlazing,cartAmount, cartPrice,cartImage);

	};
		
}






// function createCart(){
// 	var i=0;
// 	var shopped =sessionStorage.getItem("cart");
// 	var listLength=shopped.length;
// 	console.log("createcart");
// 	console.log(shopped);

// 	for each
	
// 	while(i<listLength){
// 		var itemInCart=shopped[i];
		

// 		cartGlazing=itemInCart.glazing;
// 		cartFlavor=itemInCart.flavor;
// 		cartAmount=itemInCart.amoung;
// 		console.log(cartGlazing,cartFlavor,cartAmount);
// 		createBlock(cartGlazing,cartFlavor,cartAmount);
// 	}



// }



