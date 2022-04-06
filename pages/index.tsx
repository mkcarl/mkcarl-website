import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Layout from "./Layout";
import {useEffect} from "react";

const Home: NextPage = () => {
    const router = useRouter()

    useEffect(()=>{
        const {pathname} = router
        if (pathname == '/')
            router.push('/home')
    }, [])

  return (
    null
  )
}

export default Home
