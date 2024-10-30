const url = "https://backend-proyectofinal-rolling.onrender.com/api/productos?limite=5&desde=0";

const getProductos = async () => {

    const respuesta = await fetch(url,{
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem('token')),
        },
    });
    const data = await respuesta.json();
    return data;
};

const getProduct = async (id) => {

    const response = await fetch(url + "/" + id, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset-8",
            "x-token": JSON.parse(localStorage.getItem('token')),
        },
    });
    const data = await response.json();
    return data;
};
    

export {getProductos, getProduct};