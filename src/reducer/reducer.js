const iState = {
    itemCount: 1,
    collections: [
        {
            imageLink: process.env.PUBLIC_URL + `/images/collection1.jpg`,
            name: "Shoes",
            id: "1",
            description: "This Collection is not available"
        },
        {
            imageLink: process.env.PUBLIC_URL + `/images/collection2.png`,
            name: "Clothes",
            id: "2",
            description: "This Collection is not available"
        },
        {
            imageLink: process.env.PUBLIC_URL + `/images/collection3.jpg`,
            name: "Grocary",
            id: "3",
            description: "This Collection is not available"
        },
        {
            imageLink: process.env.PUBLIC_URL + `/images/collection1.jpg`,
            name: "Jewellery",
            id: "4",
            description: "This Collection is not available"
        }

    ],
    products: [

        {
            collectionId: 2,
            imageLink: process.env.PUBLIC_URL + `/images/product1.png`,
            id: 1,
            title: 'Drinking Chocolate Powder',
            priceNew: 1250,
            priceOld: 2560,
            description: " Cadbury Drinking Chocolate Powder - 250 gm  Cadbury cocoa powder 125gm Premium quality. Great taste"
        },
        {
            collectionId: 1,
            imageLink: process.env.PUBLIC_URL + `/images/product2.jpg`,
            id: 2,
            title: 'Dermacos Dermapure Harmless Facial Blond',
            priceNew: 350,
            priceOld: 560,
            description: "PRODUCT DESCRIPTIONManufactured by Dermacos Laboratories International, Dermacos is a UK manufacturer and distributor of high quality professional skincare products. Specializing in quality skin care products and all sorts of cosmetics to make you more beautiful.Facial Blond Brightener Powder works extra-fast lightening, extra moisturizing formula. Lets you create highlights and special effects in no time at all. Takes blondes to paler-than-pale...reveals up brightens-up . Dust free, denser powder minimizes ruff & fly-away to makes your applications neater and cleanser. Contain a moisture sealing humectants to start every application with easy mixing and a creamy-smooth consistency that stays."
        },
        {
            collectionId: 3,
            imageLink: process.env.PUBLIC_URL + `/images/product3.jpg`,
            id: 3,
            title: 'Lux Whitening Body Wash',
            priceNew: 403,
            priceOld: 600,
            description: "Lux Whitening Body Wash Camellia White 220mlCamellia White"
        },
        {
            collectionId: 4,
            imageLink: process.env.PUBLIC_URL + `/images/product4.jpg`,
            id: 4,
            title: 'Ocean plus hand & foot Polisher',
            priceNew: 725,
            priceOld: 1000,
            description: "Danbys is an international brand from UK manufactured by Danybys Herbal Skin Care International. Danbys is known for its top quality products. Its products range includes from skin care products to hair treatments and various sorts of cosmetics."
        }

    ],
    blogs: [
        {
            blogId: 1,
            title: "Learning React",
            description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded",
            ImageLink: process.env.PUBLIC_URL + `/images/blog1.jpg`,
            likes: 2,
            isLiked: false,
            comments: [
                "Well Done",
                "Great Article"


            ]
        },
        {
            blogId: 2,
            title: "Learning Asp.net",
            description: "ASP.NET is an open-source server-side web application framework designed for web development to produce dynamic web pages developed by Microsoft to allow programmers to build dynamic web sites, applications and services. ",
            ImageLink: process.env.PUBLIC_URL + `/images/blog2.jpg`,
            likes: 4,
            isLiked: false,
            comments: [
                "A Nice Effort. Very Halpful!",
                "Oh Great. Get my problem solved by reading your article. Thanks"

 
            ]
        },
        {
            blogId: 3,
            title: "Learning Javascript ES6",
            description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded",
            ImageLink: process.env.PUBLIC_URL + `/images/blog3.jpg`,
            likes: 5,
            isLiked: false,
            comments: [
                "Nice Blog. I really liked it. Much appreciated",
                "Thanks For Posting. Very Helpful"
            ]
        },
        {
            blogId: 4,
            title: "Learning Asp.net Core",
            description: "ASP.NET is an open-source server-side web application framework designed for web development to produce dynamic web pages developed by Microsoft to allow programmers to build dynamic web sites, applications and services. ",
            ImageLink: process.env.PUBLIC_URL + `/images/blog4.jpg`,
            likes: 2,
            isLiked: false,
            comments: [

                "Well, A nice Effort on puting light on Great Technology!",
                "Great Article. Thanks"


            ]
        }

    ],
    cart: [
        {
            cartItemId: 1,
            itemCount: 4,
            product:{
                collectionId: 2,
                imageLink: process.env.PUBLIC_URL + `/images/product1.png`,
                id: 1,
                title: 'Drinking Chocolate Powder',
                priceNew: 1250,
                priceOld: 2560,
                description: " Cadbury Drinking Chocolate Powder - 250 gm  Cadbury cocoa powder 125gm Premium quality. Great taste"
            }
        },
        {
            cartItemId: 2,
            itemCount: 15,
            product:   {
                collectionId: 1,
                imageLink: process.env.PUBLIC_URL + `/images/product2.jpg`,
                id: 2,
                title: 'Dermacos Dermapure Harmless Facial Blond',
                priceNew: 350,
                priceOld: 560,
                description: "PRODUCT DESCRIPTIONManufactured by Dermacos Laboratories International, Dermacos is a UK manufacturer and distributor of high quality professional skincare products. Specializing in quality skin care products and all sorts of cosmetics to make you more beautiful.Facial Blond Brightener Powder works extra-fast lightening, extra moisturizing formula. Lets you create highlights and special effects in no time at all. Takes blondes to paler-than-pale...reveals up brightens-up . Dust free, denser powder minimizes ruff & fly-away to makes your applications neater and cleanser. Contain a moisture sealing humectants to start every application with easy mixing and a creamy-smooth consistency that stays."
            }
        }

    ],
    orders: [
    
    ]
}
const reducer = (state = iState, action) => {
    const BlogsArray = state.blogs.filter(b => b.blogId == action.index);
    if (action.type === 'HANDLE_LIKE') {
        BlogsArray.map(b => b.isLiked === false ? (b.likes = b.likes + 1, b.isLiked = true) : (b.likes = b.likes - 1, b.isLiked = false))
        const blogs = state.blogs
        return {
            ...state,
            blogs: [...blogs]
        }
    }
    if (action.type === 'CHANGE_CARTVALUE') {
        return {
            ...state,
            cartValue: state.cartValue + parseInt(action.payload)
        }
    }

    if (action.type === 'HANDLE_CART') {

        const { product, itemsCount: itemCount } = action.payload;
        const cartItem = state.cart.map(c=>c)
  const getCopiedItem =  cartItem.filter(cf=>cf.product.id == product.id)

        if(getCopiedItem.map(p=>p.product.id === product.id)[0]){
      getCopiedItem.map(i=>i.itemCount = itemCount + i.itemCount)
      const updatedCart = [...state.cart]
return {
    
    ...state,
cart: updatedCart
}
    }
        
    else{
        const cartItemId = Math.random();
        const newcartItem = { cartItemId, itemCount, product }
        const updatedCart = [...state.cart, newcartItem]
        return {
            ...state,
            cart: updatedCart
        }
    }
      
    }

    if (action.type === 'HANDLE_CHECKOUT') {
        const { orderItems, orderPrice } = action.payload;
        const orderId = Math.random();
       
        const newOrderItem = {orderId, orderPrice , orderItems}
        const updatedOrder = [...state.orders, newOrderItem]
        state.cart = [];
        return {
            ...state,
            orders: updatedOrder,
            cart:state.cart
        }
        
    }
    
 
    if (action.type === 'HANDLE_CARTITEM_DELETE') {
   const afterDeleteCart =  state.cart.filter(c=>c !== action.payload)
     state.cart = afterDeleteCart;    
    return{
        ...state,
        cart: state.cart
    }
    }


    if (action.type === 'CLEAR_CART') {
   state.cart = [];
   return{
...state,
cart: state.cart
   }
    }

    return state;

}

export default reducer;
