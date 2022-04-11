import Layout from "./Layout";
import {Avatar, Box, Button, Grid, LinearProgress, LinearProgressProps, Typography} from "@mui/material";
import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import {NextPage} from "next";
// @ts-ignore
import {getSkills} from "../notion";
import {SkillType} from "../types";



type Props = {
    skills:Array<SkillType>
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
                        src={"https://i.imgur.com/MsmeWly.png"}
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
                                <Typography variant={'h6'} textAlign={'center'} sx={{justify:'start'}}>{skill.name}</Typography>
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
    console.log("new update request")
    let skills : Array<SkillType> = await getSkills()
    return {props:{skills},revalidate:5}
}

export default Profile