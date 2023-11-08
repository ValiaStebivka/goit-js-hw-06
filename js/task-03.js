const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galery = document.querySelector(".gallery");
const markup = images
	.map(
		({ url, alt, width = "100%" }) =>
			`<li class="galery__item"><img class = "galery__img" src="${url}" alt="${alt}" width="${width}" ></img></li>`,
	)
	.join("");
console.log(markup);
galery.insertAdjacentHTML("afterbegin", markup);
console.log(galery);
galery.style.listStyle = "none";
galery.style.display = "flex";
galery.style.flexWrap = "wrap";
galery.style.justifyContent = "space-around";
galery.style.gap = "20px";