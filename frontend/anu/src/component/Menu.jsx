import React from 'react';
import MenuItem from './MenuItem';

function Menu() {
  const items = [
    { name: 'Pizza', price: 200, image: 'https://www.google.com/imgres?q=PIZZA%20IMAGE%20JPG&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fpepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-30402134.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fstock-images-pepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-image30402134&docid=EaPKVpBiJnds4M&tbnid=Axb8eFnfsrgVCM&vet=12ahUKEwjEvIyHksuQAxXszjgGHfApABIQM3oECHYQAA..i&w=800&h=785&hcb=2&ved=2ahUKEwjEvIyHksuQAxXszjgGHfApABIQM3oECHYQAAhttps://www.bing.com/images/search?view=detailV2&ccid=ivIc0cBQ&id=0201E6CC78C77FE12F58BBBBF0DC2D100942582F&thid=OIP.ivIc0cBQgaG8cdfiVptZsAHaE8&mediaurl=https%3a%2f%2fstatic.vecteezy.com%2fsystem%2fresources%2fpreviews%2f016%2f117%2f081%2fnon_2x%2fpepperoni-pizza-with-a-slice-taken-out-with-cheese-pull-photo.jpg&exph=980&expw=1470&q=PIZZA+IMG+JPG&FORM=IRPRST&ck=54F04C14CD24F1215705774E61F76171&selectedIndex=0&itb=0' },
    { name: 'Burger', price: 120, image: 'https://via.placeholder.com/80' },
    { name: 'Cold Drink', price: 60, image: 'https://via.placeholder.com/80' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px' }}>
      {items.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} image={item.image} />
      ))}
    </div>
  );
}

export default Menu;
