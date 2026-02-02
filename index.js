

let hero_image = ['https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2025-11/Slice-7-1_0.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-19.png',
    'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png'
];

let cont1 = document.querySelector('#hero-img');
cont1.innerHTML = '';
hero_image.forEach((data) => {
    const img = document.createElement('img');
    img.src = data;
    img.classList.add('image-grid');
    img.alt = 'item';
    cont1.appendChild(img)

});



const product_cont = [
    {
        name: 'Amul Gold Full Cream Milk',
        ml: "500 ml",
        price: "₹35",
        time: "⏱ 10 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/628c97e0-5ed4-425d-a667-1d3bfa6f0bde.png',
        alt: 'Milk'
    },
    {
        name: 'Mother Dairy Cow Milk',
        ml: "1 ltr",
        price: "₹59",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/445dd501-cb9c-4595-bc6e-341913ccdd32.png',
        alt: 'Milk'
    },
    {
        name: 'Amul Salted Butter',
        ml: "100 mg",
        price: "₹58",
        time: "⏱ 9 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png',
        alt: 'Butter'
    },
    {
        name: 'Amul Masti Pouch Curd',
        ml: "390 g",
        price: "₹35 ",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3af56c86-9a93-4d0c-a8d5-cf38493e4120.png',
        alt: 'Milk'
    },
    {
        name: 'Mother Dairy Classic Pouch Pouch Curd',
        ml: "390 g",
        price: "₹35 ",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2b146201-870b-4bb8-aee7-8ef0377cbe2b.png',
        alt: 'Milk'
    },
    {
        name: 'Mother Dairy Toned Milk',
        ml: "500 ml",
        price: "₹29 ",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a538dae1-f4a3-49c9-aaf0-586b2855f825.png',
        alt: 'Milk'
    },
    {
        name: 'Harvest Gold White Bread',
        ml: "350 g",
        price: "₹30",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9b3e11ab-9a5d-463d-b098-379a04ce5b7e.png',
        alt: 'bread'
    },
    {
        name: 'Mother Dairy Paneer',
        ml: "200 g",
        price: "₹92",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/090f96a3-3d9a-4c73-a129-323c339caaeb.png',
        alt: 'Milk'
    },
    {
        name: 'Amul Cow Milk',
        ml: "1 ltr",
        price: "₹75",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5799b89d-2123-4746-b6e7-916722c37aec.png',
        alt: 'Milk'
    },
    {
        name: 'Amul Lactose Free Milk',
        ml: "250 ml",
        price: "₹25",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/87c1c525-750e-475f-91d1-f155026ddaa1.png',
        alt: 'Milk'
    },
    {
        name: "D'lecta Shredded Mozzarella Shredded Cheese",
        ml: "140 g",
        price: "₹93",
        time: "⏱ 10 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/a9934250-8c84-4c9c-acef-be05b2d5f710.jpg',
        alt: 'cheese'
    },
    {
        name: 'Amul Cheese Slices',
        ml: "200 g",
        price: "₹140",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/c9224a3b-13d1-432d-938e-106370280ca3.jpg',
        alt: 'cheese'
    },
    {
        name: 'Table White White Eggs',
        ml: "10 pcs",
        price: "₹87",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/f4d19b43-da49-4e23-a82c-0684c43799a1.jpg',
        alt: 'bread'
    },
    {
        name: 'Amul Taaza Homogenised Toned Milk',
        ml: "1 ltr",
        price: "₹70",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png',
        alt: 'Milk'
    },
    {
        name: 'Mother Dairy Mishti Doi',
        ml: "80 g",
        price: "₹20",
        time: "⏱ 14 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b881881b-6cdf-4283-b851-b46fd28eaef7.png',
        alt: 'dahi'
    },


]

const pro_cont1 = document.querySelector('#product-container');
pro_cont1.innerHTML = '';
product_cont.forEach((data) => {
    let parent = document.createElement('div');
    parent.classList.add('product-cart');
    // image add
    let img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    img.classList.add('item-image');
    // timing
    let div = document.createElement('div');
    div.setAttribute('class', 'delivery-time poppins-medium');
    div.textContent = data.time;

    let p = document.createElement('p');
    p.setAttribute('class', 'product-name poppins-medium');
    p.textContent = data.name;

    let p2 = document.createElement('p');
    p2.setAttribute('class', 'product-quantity poppins-medium');
    p2.textContent = data.ml;

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'price-btn');

    let span = document.createElement('span');
    span.setAttribute('class', 'product-price poppins-medium');
    span.textContent = data.price;

    let btn = document.createElement('button');
    btn.setAttribute('class', 'product-btn');
    btn.textContent = "ADD";


    div1.appendChild(span);
    div1.appendChild(btn);



    parent.appendChild(img);
    parent.appendChild(div);
    parent.appendChild(p);
    parent.appendChild(p2);
    parent.appendChild(div1);


    pro_cont1.appendChild(parent);



});


const product_cont2 = [
    {
        name: 'Mother Dairy Probiotic Tadka Salted Buttermilk',
        ml: "270 ml",
        price: "₹10",
        time: "⏱ 10 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e142d3d3-99fd-4f7b-a778-91875ae3ff72.png',
        alt: 'Lassi'
    },
    {
        name: 'Coca-Cola Diet Coke Soft Drink',
        ml: "300 ml",
        price: "₹49",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6771100f-3fad-40fb-80ff-4781de705832.png',
        alt: 'Soft-drint'
    },
    {
        name: 'Coca-Cola Soft Drink (750 ml) - Pack of 4',
        ml: "4X 750 ml",
        price: "143",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4345ef56-6124-4bcb-af9e-c9c2286a34fe.png',
        alt: 'Soft-drint'
    },
    {
        name: 'Thums Up Soft Drink (750 ml)',
        ml: "750 ml",
        price: "₹36",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/78afb4b9-c043-4640-ad07-1a38b503eb83.png',
        alt: 'Soft-drint'
    },
    {
        name: 'Bisleri Packaged Water (1 l)',
        ml: "1 ltr",
        price: "₹17",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2faf253a-7e5b-4d53-9774-350add8d50b5.png',
        alt: 'water'
    },
    {
        name: "Limca Lemon 'N' Lime Soft Drink 750 ml",
        ml: "750 ml",
        price: "₹34",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a02ef300-8bd7-481d-b66b-e6693ab8a167.png',
        alt: 'Soft-drint'
    },
    {
        name: 'Amul Unsalted Buttermilk',
        ml: "440 ml",
        price: "₹15",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a8bdf605-84b1-4664-97ac-4a61603b3cac.png',
        alt: 'lassi'
    },
    {
        name: 'Maaza Mango Drink 600 ml',
        ml: "600 ml",
        price: "₹35",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bd4d64b7-7c43-449a-ac11-4a3ddfad644d.png',
        alt: 'mango-juice'
    },
    {
        name: 'Red Bull Energy Drink (250 ml)',
        ml: "250 ml",
        price: "₹125",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6f4bd423-1666-4d23-bf3d-db482be09608.png',
        alt: 'Energy-drint'
    },
    {
        name: 'Appy Fizz Sparkling Drink (Apple Flavoured)',
        ml: "1 ltr",
        price: "₹54",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c7ae2265-be2e-48ed-a160-a785b3d955c3.png',
        alt: 'Soft-drint'
    },
    {
        name: 'Mogu Mogu Lychee Fruit Drink with Nata De Coco',
        ml: "320 ml",
        price: "₹76",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6c2b3d06-125b-4e9b-b71e-8bbfa48d0282.png',
        alt: 'fruit-drint'
    },
    //  {
    //      name:'',
    //     ml: "",
    //     price : "",
    //     time:"⏱ 8 MINS",
    //     src:'',
    //     alt:'Soft-drint'
    // },


]

const pro_cont2 = document.querySelector('#product-container2');
pro_cont2.innerHTML = '';

product_cont2.forEach((data) => {
    let parent = document.createElement('div');
    parent.classList.add('product-cart-1');
    // image add
    let img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    img.classList.add('item-image');
    // timing
    let div = document.createElement('div');
    div.setAttribute('class', 'delivery-time poppins-medium');
    div.textContent = data.time;

    let p = document.createElement('p');
    p.setAttribute('class', 'product-name poppins-medium');
    p.textContent = data.name;

    let p2 = document.createElement('p');
    p2.setAttribute('class', 'product-quantity poppins-medium');
    p2.textContent = data.ml;

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'price-btn');

    let span = document.createElement('span');
    span.setAttribute('class', 'product-price poppins-medium');
    span.textContent = data.price;

    let btn = document.createElement('button');
    btn.setAttribute('class', 'product-btn');
    btn.textContent = "ADD";


    div1.appendChild(span);
    div1.appendChild(btn);



    parent.appendChild(img);
    parent.appendChild(div);
    parent.appendChild(p);
    parent.appendChild(p2);
    parent.appendChild(div1);


    pro_cont2.appendChild(parent);



});


const product_cont3 = [

    {
        name: 'Chupa Chups Sour Bites Mixed Fruit Candy',
        ml: "61.6 g",
        price: "₹34",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/54251c20-809a-4e2f-bad0-8a53e48f3f31.jpg',
        alt: 'Condies & gum'
    },
    {
        name: 'Parle Poppins Candy',
        ml: "200 g",
        price: "₹24",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7420f5a7-bd7b-4c2b-929f-d6034bb254a0.png',
        alt: 'Condies & gum'
    },
    {
        name: 'Orbit Mixed Fruit Flavour Chewing Gum (Sugar.. Free)',
        ml: "19.8 g",
        price: "₹45",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/06c51cd5-e8b4-43df-afa4-e5709bb5edbb.png',
        alt: 'Condies'
    },
    {
        name: 'Happydent Sugar Free Wave Fruit Flavour Chewing Gum',
        ml: "29 mg",
        price: "₹47",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/ae644472-f6cc-47b6-bd58-c823defcccf1.png',
        alt: 'Condies'
    },
    {
        name: 'Alpenliebe Juzt Jelly - Strawberry Flavour Jelly Candy',
        ml: "140 g",
        price: "₹57",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/84af17fc-39fd-44f8-ab89-69cc2bd6c2a6.png',
        alt: 'Condies'
    },
    {
        name: 'Alpenliebe Grande with Choco Delight Eclair',
        ml: "120 g",
        price: "₹47",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/ced86243-43f2-4939-8af9-98f8dd7be6ca.png',
        alt: 'Condies'
    },
    {
        name: 'Pulse Kachcha Aam / Mango Candy',
        ml: "190 g",
        price: "₹56",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/50e316ae-2ac9-46ed-8967-89ada49b06fd.png',
        alt: 'Condies'
    },
    {
        name: 'Parle Kismi Assorted Candy',
        ml: "245.5 g",
        price: "₹43",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/3d8d0008-e9d4-45bf-958c-5719949e4c3b.jpg',
        alt: 'Condies'
    },
    {
        name: 'Pulse Litchi with Tangy Twist Candy',
        ml: "190 g",
        price: "₹53",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/360e7721-87be-48e7-9942-15f2148ec567.jpg',
        alt: 'Condies'
    },
    {
        name: 'Kopiko Cappuccino Candy - Family Pack',
        ml: "140 g",
        price: "₹43",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/d2f05df2-23c9-4433-9732-37c2ab4b489c.jpg',
        alt: 'Condies'
    },
    {
        name: 'Dobra Strawberry Blast Cotton Candy',
        ml: "13.5 g",
        price: "₹42",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/2ba3e97f-2278-48fd-b920-2f2f9f5ebb83.jpg',
        alt: 'Condies'
    },
    {
        name: 'Chupa Chups Strawberry And Watermelon Soft Candy',
        ml: "80 g",
        price: "₹48",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6bd71e49-328a-4171-99fc-db3f59443d49.png',
        alt: 'Condies'
    },
    {
        name: 'Alpenliebe Mango with Chilli Salt Candy',
        ml: "26 g",
        price: "₹99",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/9ff5a075-1452-4326-97bd-87c4649e5234.jpg',
        alt: 'Condies'
    },
    {
        name: 'Chandan Aam Papad',
        ml: "200 g",
        price: "₹162",
        time: "⏱ 8 MINS",
        src: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/60278b46-9269-470f-bb35-a81678f707ba.jpg',
        alt: 'Condies'
    }

    //  {
    //      name:'',
    //     ml: "",
    //     price : "",
    //     time:"⏱ 8 MINS",
    //     src:'',
    //     alt:'Condies'
    // },
];

const pro_cont3 = document.querySelector('#product-container3');
pro_cont3.innerHTML = '';

product_cont3.forEach((data) => {
    let parent = document.createElement('div');
    parent.classList.add('product-cart-2');
    // image add
    let img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    img.classList.add('item-image');
    // timing
    let div = document.createElement('div');
    div.setAttribute('class', 'delivery-time poppins-medium');
    div.textContent = data.time;

    let p = document.createElement('p');
    p.setAttribute('class', 'product-name poppins-medium');
    p.textContent = data.name;

    let p2 = document.createElement('p');
    p2.setAttribute('class', 'product-quantity poppins-medium');
    p2.textContent = data.ml;

    let div1 = document.createElement('div');
    div1.setAttribute('class', 'price-btn');

    let span = document.createElement('span');
    span.setAttribute('class', 'product-price poppins-medium');
    span.textContent = data.price;

    let btn = document.createElement('button');
    btn.setAttribute('class', 'product-btn');
    btn.textContent = "ADD";


    div1.appendChild(span);
    div1.appendChild(btn);



    parent.appendChild(img);
    parent.appendChild(div);
    parent.appendChild(p);
    parent.appendChild(p2);
    parent.appendChild(div1);


    pro_cont3.appendChild(parent);



});

function glow() {
    const cards = document.querySelectorAll('.product-cart');
    cards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            // hovered card grow
            gsap.to(card, {
                scale: 1.01,
                filter: 'Blur(0px)',
                cursor: 'pointer',
                boxShadow: "0 8px 20px rgba(0,0,0,0.20)",
                duration: 0.2
            });

            // other cards shrink
            cards.forEach(other => {
                if (other !== card) {
                    gsap.to(other, {
                        scale: 0.9,
                        filter: 'Blur(1.5px)',
                        cursor: 'none',
                        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                        duration: 0.2,
                    });
                }
            });

        });

        card.addEventListener('mouseleave', () => {

            // reset all
            gsap.to(cards, {
                scale: 1,
                cursor: 'none',
                filter: 'Blur(0px)',
                boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
                duration: 0.2
            });

        });

    });
};
glow()
function glow1() {
    const cards = document.querySelectorAll('.product-cart-1');
    cards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            // hovered card grow
            gsap.to(card, {
                scale: 1.01,
                filter: 'Blur(0px)',
                cursor: 'pointer',
                boxShadow: "0 8px 20px rgba(0,0,0,0.20)",
                duration: 0.2
            });

            // other cards shrink
            cards.forEach(other => {
                if (other !== card) {
                    gsap.to(other, {
                        scale: 0.9,
                        filter: 'Blur(1.5px)',
                        cursor: 'none',
                        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                        duration: 0.2,
                    });
                }
            });

        });

        card.addEventListener('mouseleave', () => {

            // reset all
            gsap.to(cards, {
                scale: 1,
                cursor: 'none',
                filter: 'Blur(0px)',
                boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
                duration: 0.2
            });

        });

    });
};
glow1();


function glow2() {
    const cards = document.querySelectorAll('.product-cart-2');
    cards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            // hovered card grow
            gsap.to(card, {
                scale: 1.01,
                filter: 'Blur(0px)',
                cursor: 'pointer',
                boxShadow: "0 8px 20px rgba(0,0,0,0.20)",
                duration: 0.2
            });

            // other cards shrink
            cards.forEach(other => {
                if (other !== card) {
                    gsap.to(other, {
                        scale: 0.9,
                        filter: 'Blur(1.5px)',
                        cursor: 'none',
                        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                        duration: 0.2,
                    });
                }
            });

        });

        card.addEventListener('mouseleave', () => {

            // reset all
            gsap.to(cards, {
                scale: 1,
                cursor: 'none',
                filter: 'Blur(0px)',
                boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
                duration: 0.2
            });

        });

    });
};
glow2();

function glow3() {
    const cards = document.querySelectorAll('.image-grid');
    cards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            // hovered card grow
            gsap.to(card, {
                scale: 1,
                filter: 'Blur(0px)',
                cursor: 'pointer',
                borderRadius:"15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.20)",
                duration: 0.2
            });

            // other cards shrink
            cards.forEach(other => {
                if (other !== card) {
                    gsap.to(other, {
                        scale: 0.9,
                        filter: 'Blur(1.5px)',
                          borderRadius:"0px",
                        cursor: 'none',
                        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                        duration: 0.2,
                    });
                }
            });

        });

        card.addEventListener('mouseleave', () => {

            // reset all
            gsap.to(cards, {
                scale: 1,
                cursor: 'none',
                borderRadius:"0px",
                filter: 'Blur(0px)',
                boxShadow: "0 8px 20px rgba(0,0,0,0)",
                duration: 0.2
            });

        });

    });
};
glow3()







