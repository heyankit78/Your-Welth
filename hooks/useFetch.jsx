import { toast } from "sonner"

const { set } = require("date-fns")
const { useState } = require("react")

const useFetch =  (cb) => {
  const [data,setData] = useState(undefined)
  const [loading,setLoading] = useState(null)
  const [error,setError] = useState(null)


  const fn = async(...args)=>{
    setLoading(true);
    setError(null);
    try{
        const response = await cb(...args);
        setData(response);
        setLoading(false);
        setError(null);

    }catch(err){
        setError(err);
        toast.error(err.message);
    }

  }

  return {data,loading,error,fn,setData}
}

export default useFetch;