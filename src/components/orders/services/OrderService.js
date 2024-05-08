import axios from "axios";
import { environment } from "../../../utilities/environment";

export class OrderService {
    constructor(token) {
        this.token = token;
        this.axiosInstance = axios.create({
            baseURL: environment.baseUrl,
        });
    }

    /**
     * Creates an order with the specified details.
     * @param {{ firstName: string, lastName: string, email: string, phoneNumber: string, street: string, state: string, city: string, postalCode: string, paymentMethod: string, visaToken: string }} orderRequest - The request object containing order details.
     */
    async createOrder(orderRequest) {
        try {
            const response = await this.axiosInstance.post('/orders/', orderRequest, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }


    async getOrders() {
        try {
            const response = await this.axiosInstance.get('/profile/orders', {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
}


