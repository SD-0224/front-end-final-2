import { environment } from "../../../utilities/environment";


export const fetchWishList = async (token) => {
    try {
        const path = `${environment.baseUrl}/wishList/`;
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Include the bearer token in the request headers
        };
        const response = await fetch(path, {
            method: "GET",
            headers: headers,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        throw error;
    }
};


// Function to toggle a wishlist item in the backend API
export const toggleWishlistItem = async (productId, token) => {
    try {
        const response = await fetch(`${environment.baseUrl}/wishList/toggle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                productID: productId
            }),
        });
        if (!response.ok) {
            throw new Error(`Failed to toggle wishlist item. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in toggling wishlist item:', error);
        throw new Error(`Failed to toggle wishlist item: ${error.message}`);
    }
};
