const products = [
  {
    id: "1",
    name: "Totoro",
    price: 20000,
    stock: 500,
    img: "https://ghibli-merch.com/wp-content/uploads/2021/12/my-neighbor-totoro-hold-the-umbrella-pvc-figure-1-800x800.jpg",
    description: "figure ",
  },

  {
    id: "2",
    name: "Levi A.",
    price: 30000,
    stock: 100,
    img: "https://http2.mlstatic.com/D_NQ_NP_707561-CBT54211582137_032023-O.jpg",
    description: "figure ",
  },
  {
    id: "3",
    name: "Chainsawman",
    price: 20000,
    stock: 300,
    img: "https://cdn11.bigcommerce.com/s-e37hk/images/stencil/1280x1280/products/6307/163448/h__51184.1660883128.jpg?c=2",
    description: "figure ",
  },
  {
    id: "4",
    name: "Death Note",
    price: 40000,
    stock: 370,
    img: "https://ae01.alicdn.com/kf/Hafa34463f9454d4fae60d60dfdc0739bK/7-11cm-5pcs-set-Death-Note-Yagami-Light-Killer-MisaMisa-L-Ryuuku-Rem-PVC-Action-Figure.jpg_Q90.jpg_.webp",
    description: "figure ",
  },
  {
    id: "5",
    name: "Yuyu Hakusho",
    price: 80000,
    stock: 570,
    img: "https://bbts1.azureedge.net/images/p/full/2022/01/e4858a9e-0baf-440b-9f2a-010f649ad015.jpg",
    description: "figure ",
  },
  {
    id: "6",
    name: "Inuyasha",
    price: 1000000,
    stock: 400,
    img: "https://www.m.derivefigurine.com/93697/kagome-higurashi-inuyasha-figure-pop-up-parade.jpg",
    description: "figure ",
  },
  {
    id: "7",
    name: "Inuyasha",
    price: 40000,
    stock: 400,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/InuYasha1.jpg/220px-InuYasha1.jpg",
    description: "Manga",
  },
  {
    id: "8",
    name: "Yuyu Hakusho",
    price: 50000,
    stock: 400,
    img: "https://m.media-amazon.com/images/I/81-vkNy0H8L._AC_UF1000,1000_QL80_.jpg",
    description: "Manga ",
  },
  {
    id: "9",
    name: "Death Note",
    price: 40000,
    stock: 400,
    img: "https://images.cdn1.buscalibre.com/fit-in/360x360/7b/e0/7be0824af062ba372364545078562afd.jpg",
    description: "Manga",
  },
  {
    id: "10",
    name: "Chainsawman",
    price: 60000,
    stock: 400,
    img: "https://http2.mlstatic.com/D_NQ_NP_639316-MCO49788363006_042022-O.jpg",
    description: "figure ",
  },
  {
    id: "11",
    name: "Given",
    price: 50000,
    stock: 400,
    img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Given_Vol_1.png",
    description: "Manga",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 1000);
  });
};

export default products;
