'use client'
import { useRouter } from "next/navigation";

type RouterProps = {
    to:string
}


const Button = ({to}:RouterProps) => {
    const router = useRouter();

   return(
    <button type="submit" onClick={() => router.push(to)} className="w-full py-3 px-2 bg-sky-500 shadow-sm hover:bg-sky-600">
    Submit
        </button>
   )

    
}

export default Button;