 // toggle class active untuk hamburger menu
 const navbarNav = document.querySelector('.navbar');
 // ketika hamburger manu diklik
 document.querySelector('#menu-bars').onclick = (e) =>
 {
     navbarNav.classList.toggle('active');
      e.preventDefault();
 };
 // toggle class activer untuk search form end
    // toggle shoping cart
    const shoppingCart = document.querySelector('.shopping-cart');
    document.querySelector('#shopping-cart-button').onclick = (e) => 
    {
        shoppingCart.classList.toggle('active');
        e.preventDefault();

    }
        // toggle shopping cart end
 // klik diluar elemen sidebar untuk menghilangkan nav 
 const hm = document.querySelector('#menu-bars');
 const sc = document.querySelector('#shopping-cart-button');
 // navbar klik diluar elemen
 document.addEventListener('click',function(e){
 if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
     navbarNav.classList.remove('active');
 };
 if(!sc.contains(e.target) && !shoppingCart.contains(e.target)){
  shoppingCart.classList.remove('active');
  };
 });

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}


// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut;
