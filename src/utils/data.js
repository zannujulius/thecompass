import axios from axios;


const Data = () => {

    const api = axios.create({
        baseUrl: "http://localhost:5000/blogs"
    })

    return (
        <>
        </>
    );
}

export default Data;