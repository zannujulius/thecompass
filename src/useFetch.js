import { useEffect, useState } from "react";

const useFetch = (url) => {
    // initial state of our data
    const [data , setData] = useState(null);
    // all value should be null wu=hile fecthing data
    const [isPending, setIsPending] = useState(true);
    // check for error
    const [error, setError] = useState(null);

    useEffect(() => {
        //the abort controller is used to abort the fetch when the request unmounted
        //and whenever the request is aborted it throws an error
        // when the error is thrown the state is updated
        const abortCont = new AbortController();
        //using the fetch function to fetch the url
        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if (!res.ok) {
                throw Error('cannot fetch data');
            }
            // converting the data received to json format
            return res.json();
        })
        .then(data => {
            // update the state of the data when the has been parsed succesfully
            setData(data);
            // to remove loading text in the DOM
            // remove the preloader from the DOM
            setIsPending(false);
            // error should be null
            setError(null);
        })
        .catch(err => {
            if (err.name === "AbortError") {
                console.log('fetch aborted')
            } else {
                setIsPending(false);
                setError(err.message);
            }
        })
        return () => abortCont.abort();
    }, [url])

    return {data, isPending, error}
}
export default useFetch;