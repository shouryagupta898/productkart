import axios from "axios";

export function getProductData(id){
    return axios.get("https://myeasykart.codeyogi.io/product/"+ id).then(function(response){
        return response.data;
    })
}

export function getProductsByIds(ids){
    const commaSeparatedIds=ids.join()
   return axios.get("https://myeasykart.codeyogi.io/products/bulk",{
    params:{
   ids:commaSeparatedIds,
},
})
.then(function(response){
    return response.data;
});
}


export function getProductList(sortBy,query,page,sortType){

    let params={};
    if(sortBy){
        params.sortBy=sortBy;
    }
    if(sortType){
        params.sortType=sortType
    }
    if(query){
        params.search=query;
    }
    if(page){
        params.page=page;
    }


    return axios.get("https://myeasykart.codeyogi.io/products",{
       params
    }).then(function(response){
        return response.data;
    });
}