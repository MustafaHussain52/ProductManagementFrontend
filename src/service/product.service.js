import axios from "axios";
const Api_Url = "http://localhost:8080";

class ProductService{

    saveProduct(product){
        return axios.post(Api_Url + "/saveProduct",product);
    }

    getAllProduct(){
        return axios.get(Api_Url + "/");
    }
    getProductId(id){
        return axios.get(Api_Url + "/" + id);
    }
    deleteProduct(id){
        return axios.delete(Api_Url + "/deleteProduct/" + id);
    }
    editProduct(product){
        return axios.post(Api_Url + "/editProduct/" + product.id,product);
    }
}

export default new ProductService;