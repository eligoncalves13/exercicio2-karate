function setup() {
    var ambiente = karate.env;
    var config = {
        baseUrl: "https://petstore.swagger.io/v2"
    }
    
    if(ambiente === "dev"){
        karate.configure('logPrettyRequest', true); 
        karate.configure('logPrettyResponse', true); 
    }

    karate.configure("headers", {
        operador: "Élida",
        framework: "Karate"
    });

    //karate.configure('connectTimeout', 40000);
    karate.configure('readTimeout', 40000); 

    return config;
}