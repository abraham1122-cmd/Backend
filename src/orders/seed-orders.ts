import { Order } from "./order.type.js";



export const seedOrders: Order[] = [
    {
        id: 1,
        customerName: "abel",
        area: "Bole",
        status: "Pending",
        dishes: [
            {
                name: "Doro wot",
                price: 2000
            }
        ],
        total: 2000
    },


     {
        id: 2,
        customerName: "kal",
        area: "Gerji",
        status: "Pending",
        dishes: [
            {
                name: "shiro",
                price: 200
            }
        ],
        total: 200
    },


 {
        id: 3,
        customerName: "abel",
        area: "Bole",
        status: "Delivered",
        dishes: [
            {
                name: "kitfo",
                price: 5000
            }
        ],
        total: 5000,
        teleBirrPhone: "0953425263"
    },

 {
        id: 4,
        customerName: "semira",
        area: "Bole",
        status: "Preparing",
        dishes: [
            {
                name: "Doro wot",
                price: 2000
            }
        ],
        total: 2000
    },



 {
        id: 5,
        customerName: "sami",
        area: "Megenagna",
        status: "Cancelled",
        dishes: [
            {
                name: "aynet",
                price: 200
            }
        ],
        total: 200
    },


 {
        id: 6,
        customerName: "mahilet",
        area: "Bole",
        status: "Rejected",
        dishes: [
            {
                name: "chechebsa",
                price: 1000
            }
        ],
        total: 1000,
        teleBirrPhone: "0909745534"
    },


     {
        id: 7,
        customerName: "suleman",
        area: "Kasanchis",
        status: "Pending",
        dishes: [
            {
                name: "Burger",
                price: 800
            }
        ],
        total: 800
    },

     {
        id: 8,
        customerName: "feysal",
        area: "Megenagna",
        status: "Pending",
        dishes: [
            {
                name: "pizza",
                price: 900
            }
        ],
        total: 900,
        teleBirrPhone: "09433242516"
    },

     {
        id: 9,
        customerName: "yeabkal",
        area: "Gerji",
        status: "Delivered",
        dishes: [
            {
                name: "kikil",
                price: 1000
            }
        ],
        total: 1000
    },

     {
        id: 10,
        customerName: "yared",
        area: "Gerji",
        status: "Cancelled",
        dishes: [
            {
                name: "Key wot",
                price: 600
            }
        ],
        total: 600,
        teleBirrPhone: "0934262463"
    },

     {
        id: 11,
        customerName: "temesgen",
        area: "Kasanchis",
        status: "Pending",
        dishes: [
            {
                name: "chuko",
                price: 3000
            }
        ],
        total: 3000,
        teleBirrPhone: "0908763425"
    },


     {
        id: 12,
        customerName: "Helen",
        area: "Bole",
        status: "Preparing",
        dishes: [
            {
                name: "Noodle",
                price: 1800
            }
        ],
        total: 1800,
        teleBirrPhone: "0987654232"
    }
]