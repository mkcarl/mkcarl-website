import type { NextPage } from 'next'
import Layout from "./Layout";

const Home: NextPage = () => {
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
