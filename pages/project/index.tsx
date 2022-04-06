import {ProjectType as Proj} from "../../types";
import {useRouter} from "next/router";
import {useState} from "react";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, Grid, Typography} from "@mui/material";
import Layout from "../Layout";
import ProjectPage from "../ProjectPage";
import {NextPage} from "next";
import {getPersonalProjects} from "../../notion";

type Props = {
    projects:Array<Proj>
}

const Project:NextPage<Props> = ({projects}) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const closeDialog = () => {
        setOpen(false)
        router.push("/project")
    }
    const projectDetails = (code:string) =>(
        router.push(`/project/?code=${code}`, `/project/${code}`)
    )


    return(
        <Layout title={"Projects"}>
            <Box sx={{
                textAlign:'center',
                my:'5rem'
            }}>
                <Typography variant={'h2'}>Personal Projects</Typography>
                <Typography variant={'h6'}>
                    These are my personal hobby projects that I had done / am doing in my free time. These projects mainly serve as a starting ground to learn a particular technology, or to solve the problems that I had / am facing daily.
                </Typography>
            </Box>
            <Grid container spacing={3}>
                {projects.map((project) => {
                    return (
                        <Grid item key={project.Code} md={4} xs={12}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.CoverPhotoLink}
                                    alt={project.Name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.Name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.Description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={()=>{
                                        projectDetails(project.Code)
                                        setOpen(true)
                                    }
                                    }>Details</Button>
                                </CardActions>
                            </Card>
                        </Grid>);
                })}

            </Grid>

            <Dialog open={open} onClose={closeDialog} maxWidth={"xl"}>
                <Box sx={{px: {xs:'1rem',md:'5rem'}}}>
                    <ProjectPage project={projects.find((project) => project.Code === router.query.code)}/>
                </Box>
            </Dialog>
        </Layout>
    )
}

export async function getStaticProps(){
    let projects = await getPersonalProjects()
    return ({props: {projects}, revalidate:10})
}

export default Project