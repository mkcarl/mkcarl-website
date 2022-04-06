import Layout from "./Layout";
import {Box, Link, Typography} from "@mui/material";
import {getHomePageDescription} from "../notion";
import {NextPage} from "next";
import {useRouter} from "next/router";


const Home : NextPage = () => {
    const router = useRouter()
    const gotoProfilePage = () => {
        router.push('/profile')
    }

    return(
        <Layout title={"Home"}>
            <Box
            sx={{
                minHeight:'90vh',
                display:'flex',
                flexDirection:'column',
                textAlign:'center',
                justifyContent:'center',
                alignItems:'center',
            }}
            mx={'2rem'}
            my={'2rem'}
            >
                <Typography variant={'h1'} noWrap>Carl Yan</Typography>
                <Typography variant={'h5'}>
                    Hi there, I&apos;m Carl from Malaysia. Currently pursuing my bachelor&apos;s degree in the field of Computer Science (Artificial Intelligence). Welcome to my website where I showcase my past programming projects for my university work, as well as my personal hobby projects. Hope you get to understand more about my projects. Feel free to contact me through the contacts available in my <Link onClick={gotoProfilePage}>profile</Link> page.
                </Typography>

            </Box>
        </Layout>
    )
}

export default Home