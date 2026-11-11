




const deliveryAreas = ["Bole", "Gerji", "Kasanchis", "Megenagna"] as const;

export type Area = typeof deliveryAreas[number];




export type orderStatus = "Pending" | "Prepared" | "Cancelled" | "Delivered" | "Preparing" | "Rejected";



export type Dish = {
    name: string;
    price: number;
}



export type Order = {
    readonly id: number;
    customerName: string;
    area: Area;
    status: orderStatus;
    dishes: Dish[];
    teleBirrPhone?: string;
    total: number;


}




export function deliveryFee(order: Order): number {

   if(order.total > 500){
    return 0;
   }
   else if( order.area === "Bole"){
    return 40;
   }

    else{
        return 60;
    }

}

export function statusMessage(status: orderStatus): string{

    switch(status){
        case  "Pending":
          return "Your Order is Pending";
        
    case "Preparing":
        return "Started Preparing";
    
        case "Prepared":
            return "Ready to delivery";

         case "Delivered":
            return "Your order is being delivered";
        
            case 'Cancelled':
                return "sorry! your order is cancelled"

            case "Rejected":

               return "unfortunetly Rejected";


        default: {
            const unexpectedStatus: never = status;
            return unexpectedStatus;
        }


    }

}


const formatETB = (amountInBirr: number): string => {

    return new Intl.NumberFormat("en-ET", {

        style: "currency",
        currency: "ETB",


    }).format(amountInBirr);
};

export function receipt(order: Order): string {

    const delivery = deliveryFee(order);

    return `

    ============Addis Eats===========
    orderId: ${order.id}
    customerName: ${order.customerName}
    area: ${order.area}
    status: ${statusMessage(order.status)}

    ==============Dishes==================

    ${order.dishes.map(dish => {
        `${dish.name} - ${formatETB(dish.price)}`
    }).join("\n")};

    ===============Total===============

    subTotal: ${formatETB(order.total)}
    deliveryFee: ${formatETB(delivery)}
    Total: ${formatETB(order.total + delivery)}

    ====================================

    Thank You For Ordering and Keep Choosing Us!
    
    `
}