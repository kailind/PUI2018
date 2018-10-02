function addNewList() {
    alert('hello world!');
}

function addListItem() {
	var list = document.getElementById("grocery-list");
	var itemInput = document.getElementById("new-list-item");
	var newItem = document.createElement("li");
	newItem.appendChild(document.createTextNode(itemInput.value));
	list.appendChild(newItem);




    
}

function deleteListItem(item) {
	    // remove li element (item) from ol element (item.parentNode)
 	    item.parentNode.removeChild(item);
}

// function completeListItem(item) {
//     if (item.checked) { // true if the input checkbox is checked
//         item.parentNode.style.textDecoration = "line-through";
//         // in css, this would be: "text-decoration: line-through"
//     } else {
//         item.parentNode.style.textDecoration = "none";
//         // in css, this would be: "text-decoration: none"
//     }
// }

$(document).on("click",".complete-item", function(){
    console.log('click complete');
    var box=$(this);
    console.log(box);
    if (box.prop('checked')){
        console.log('box is checked')
        $(this).parent().css("text-decoration",'line-through');
        console.log('linethrough');
    }
    else{
        $(this).parent().css("text-decoration","none");
    }
});

// $(document).ready(function(){
//     $("#add-item").click(function() { // bind handler for click event
//         var list = $("#grocery-list"); // get the ol list by id
//         var itemInput = $("#new-list-item"); // get the new item input
//       // append the input value within an li element
//         list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>") 
//         console.log('list');
//         newnewlist=document.getElementById("grocery-list");
//         console.log('newnewlist');
//         console.log(newnewlist);

//     });

//     $(".delete-item").click(function() {

//         console.log('delete item');
//         $(this).parent().remove();
//     });
// });


$(document).on("click", ".delete-item", function() {//works for any dynamically created code
    $(this).parent().remove();
});

$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");
    list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
});






