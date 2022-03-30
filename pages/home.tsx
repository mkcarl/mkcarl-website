import Layout from "./Layout";
import {Box, Typography} from "@mui/material";
import {Client} from "@notionhq/client"
import {getHomePageDescription} from "./notion";
import {GetStaticProps, NextPage} from "next";

type Prop = {
    desc:string
}

const Home : NextPage<Prop> = ({desc}) => {
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
                    {desc}
                </Typography>

            </Box>
        </Layout>
    )
}

export async function getStaticProps() {
    let desc = await getHomePageDescription()
    return {props:{desc}}

}

export default Home