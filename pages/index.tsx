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
    <Layout title={"Hello world test"}>
        <h1>Hello world</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus at atque commodi corporis dicta eius eligendi eum in velit. Aliquid architecto dicta dolor eos, eveniet quaerat quas rerum tempora.
        </p>
    </Layout>
  )
}

export default Home
