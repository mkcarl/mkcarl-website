import Layout from "./Layout";
import {Box} from "@mui/material";

const Home = () => {
    return(
        <Layout title={"Home"}>
            <Box
            sx={{
                height:'90vh',
                display:'flex',
                flexDirection:'column',
                textAlign:'center',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
                <h1>Carl Yan</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum cupiditate deleniti dolore eius magni nemo vitae? A blanditiis eaque expedita, in labore magni odit optio rerum saepe soluta, veritatis!</p>

            </Box>
        </Layout>
    )
}

export default Home