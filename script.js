
$(function(){
var nav=$(".nav"); 
var win=$(window); 
var sc=$(document);
win.scroll(function(){
  if(sc.scrollTop()>=100){
    nav.addClass("fixednav"); 
  }else{
   nav.removeClass("fixednav");
  }
})  
})

  
  function toggleMenu() {
    const menu = document.querySelector(".menu-icon-wrapper");
    const nav = document.getElementById("myNav");
  
    // Toggle menu visibility
    menu.classList.toggle("open");
    menu.classList.toggle("close");
    nav.classList.toggle("open");
  }

 /* window.addEventListener("scroll",setScrollVar)
window.addEventListener("resize",setScrollVar)



setScrollVar()
  
  function setScrollVar(){
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled =htmlElement.scrollTop/
    htmlElement.clientHeight
    htmlElement.style.setProperty("--scroll",Math.min
      (percentOfScreenHeightScrolled *100,100))

    }
  var speed = 50; 
var lastScrollPos = 0;
var scrollContainer = document.getElementById("scroll-container");
var scrollText = document.getElementById("scroll-text");


function scroll() {
  var currentScrollPos = scrollContainer.scrollLeft;
  if (currentScrollPos == lastScrollPos) {
    
    scrollContainer.scrollLeft = scrollText.offsetWidth;
  } else {
    lastScrollPos = currentScrollPos;
  }
  scrollContainer.scrollLeft -= 1;
}


setInterval(scroll, speed);




//for blog page


//
const countButton = document.getElementById('countButton');
const countDisplay = document.getElementById('countDisplay');

let count = 0;


countButton.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
});

*/

function funcpop1() {
  var popup = document.getElementById("popup1");
  popup.classList.toggle("show");
}
function funcpop2() {
  var popup = document.getElementById("popup2");
  popup.classList.toggle("show");
}
function funcpop3() {
  var popup = document.getElementById("popup3");
  popup.classList.toggle("show");
}
function funcpop4() {
  var popup = document.getElementById("popup4");
  popup.classList.toggle("show");
}

function closePopup(popupId) {
  document.getElementById(popupId).classList.toggle("hid");
}

  let cartQuantity = 0;
  let addquantity = 1; 
  
function like1() {
  
  document.getElementById("likeforblog1")
    console.log(`Cart Quantity: ${cartQuantity}`);
    console.log(addquantity);

  
    cartQuantity += addquantity;

    console.log(`Cart Quantity: ${cartQuantity}`);
    alert(`You just hit like`);

    document.getElementById("lable1").innerHTML = "Add another " + addquantity + " to cart.";
  };


function addComment() {
    var commentText = document.getElementById('user-comment').value;
    if (commentText.trim() === '') {
        alert('请先输入评论内容！');
        return;
    }

    // 创建新的评论元素
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment-item');
    commentElement.textContent = commentText;

    // 添加到评论区域的开头
    var commentsSection = document.getElementById('comments-section');
    commentsSection.insertBefore(commentElement, commentsSection.firstChild);

    // 清空输入框内容
    document.getElementById('user-comment').value = '';
}




  function addComment() {
    // Get the textarea element and its value
    let textarea = document.querySelector('.user-comment');
    let comment = textarea.value.trim(); // Trim to remove leading/trailing whitespace

    // Check if the comment is not empty
    if (comment !== '') {
      // Add comment to the array
      comments.push(comment);

      // Clear the textarea
      textarea.value = '';

      // Update comments display
      updateComments();
    }
  }

  function updateComments() {
    // Get the comments container element
    let commentsContainer = document.getElementById('comments');

    // Clear previous comments
    commentsContainer.innerHTML = '';

    // Loop through the comments array and display each comment
    comments.forEach(function(comment, index) {
      let commentElement = document.createElement('div');
      commentElement.textContent = `Comment ${index + 1}: ${comment}`;
      commentsContainer.appendChild(commentElement);
    });
  }