import Product from "./product.model";

const addProducts = async (payload:any) => {
    return await Product.create(payload);
};
const getAllProducts = async () => {
    return await Product.find();
};

const getProductById = async (id: string) => {
    return await Product.findById(id);
};




export const productsService = {
    getAllProducts,
    getProductById,
    addProducts
}
