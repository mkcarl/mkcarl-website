import Layout from "./Layout";
import {Avatar, Box, Button, Grid, LinearProgress, LinearProgressProps, Typography} from "@mui/material";
import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import {NextPage} from "next";
// @ts-ignore
import {getSkills} from "./notion";
import {Skill} from "./types";



type Props = {
    skills:Array<Skill>
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{Math.round(props.value)}/100</Typography>
            </Box>
        </Box>
    );
}

const Profile : NextPage<Props> = ({skills}) => {

    return(
        <Layout title={"Profile"}>
            <Grid container>
                <Grid item md={12} sx={{margin:'1rem'}}/>
                <Grid item md={3} xs={12}/>
                <Grid item md={2} xs={12} sx={{my:'auto', alignItems:{xs:'center'}, mx:{md:0,xs:'5rem'}}}>
                    <Box
                        component={'img'}
                        src={"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4ea53a8b-bcfd-4065-b588-ca099c542bcd/profile_pic_2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220329T144347Z&X-Amz-Expires=86400&X-Amz-Signature=708cb68118dfe8c4a06c0d3fba4d009655b59b40bdb4eaa90b5ce9e73466d561&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22profile_pic_2.jpg%22&x-id=GetObject"}
                        alt={"Profile Picture"}
                        sx={{
                            width:"100%",
                            height:"auto",
                        }}
                    />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Box
                        sx={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems: {md:'flex-start',xs:'center'},
                            padding:'2rem'
                        }}
                    >
                        <Typography variant={'h2'}>Carl Yan</Typography>
                        <Button startIcon={<Email/>} href={"mailto:munkye29@gmail.com"}>Email</Button>
                        <Button startIcon={<GitHub/>} href={"https://github.com/mkcarl/"} target={"_blank"}>Github</Button>
                        <Button startIcon={<LinkedIn/>} href={"https://www.linkedin.com/in/carl-yan/"} target={"_blank"}>Linkedin</Button>
                    </Box>
                </Grid>
                <Grid item md={3} xs={12}/>
                <Grid item md={12} xs={12} sx={{margin:'1rem'}}/>

                <Grid item md={2} xs={1}/>
                <Grid item md={8} xs={10}>
                    <Typography variant={'h3'}>Skills</Typography>
                </Grid>
                <Grid item md={2} xs={1}/>

                <Grid item md={2} xs={1}/>

                <Grid item md={8} xs={10}>
                    <Grid container spacing={10} justifyContent={'space-evenly'}>
                        {skills.map( (skill, index) => (
                            <Grid item md={3} xs={6} key={index}>
                                <Avatar
                                    variant={'rounded'}
                                    sx={{width:'100%', height:'auto', mb:'20px'}}
                                    src={skill.url}
                                />
                                <Typography variant={'h6'} textAlign={'center'}>{skill.name}</Typography>
                                <LinearProgressWithLabel value={skill.proficiency}/>

                            </Grid>
                        ))}



                    </Grid>
                </Grid>
                <Grid item md={2} xs={1}/>


            </Grid>
        </Layout>
    )

}

export async function getStaticProps(){
    let skills : Array<Skill> = await getSkills()
    return {props:{skills}}
}

export default Profile