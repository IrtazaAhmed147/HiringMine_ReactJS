import createContext from ''
import axios from "axios"
import { useEffect } from "react"


const useFetch = (url) => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);



    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {

                const res = await axios.get(url)
                setData(res)
                console.log(res);

            } catch (error) {
                console.log(error);
                setError(error)
            }
            setLoading(false);
        }
        fetchData()


    }, [url])
    const reFetch = async () => {
        setLoading(true);
        try {

            const res = await axios.get(url)
            setData(res)
            console.log(res);

        } catch (error) {
            console.log(error);
            setError(error)
        }
        setLoading(false);
    }
    return { data, error, loading, reFetch }

}

export default useFetch