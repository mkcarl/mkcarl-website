import Layout from "./Layout";
import {Box, Typography} from "@mui/material";

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
                <Typography variant={'h1'} >Carl Yan</Typography>
                <Typography variant={'h5'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias dignissimos ex ipsam, modi ullam velit. Ab eligendi incidunt inventore mollitia quos voluptatum! Accusamus aspernatur consequuntur dicta, illum modi voluptate.
                </Typography>

            </Box>
        </Layout>
    )
}

export default Home