import {NextPage} from "next";
import Layout from "../Layout";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, Grid, Typography} from "@mui/material";
import {getSchoolProjects} from "../../notion";
import { ProjectType as Proj }  from "../../types";
import {useRouter} from "next/router";
import ProjectPage from "../ProjectPage";
import {useState} from "react";



type Props = {
    projects:Array<Proj>
}

const Assignment:NextPage<Props> = ({projects}) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const closeDialog = () => {
        setOpen(false)
        router.push("/assignment")
    }
    const projectDetails = (code:string) =>(
        router.push(`/assignment/?code=${code}`, `/assignment/${code}`)
    )

    const projectCards = (startDate:string, endDate:string, title:string) => {
        return (
            <>
                <Grid item md={12}>
                    <Typography variant={'h3'}>{title}</Typography>
                </Grid>
                {projects.map((project) => {
                    return new Date(project.Period) < new Date(startDate) || new Date(project.Period) > new Date(endDate) ? null : (
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
                <Grid item xs={12} my={'1rem'}/>
            </>
        )


    }

    return(
        <Layout title={"Assignment"}>
            <Box sx={{
                textAlign:'center',
                my:'5rem'
            }}>
                <Typography variant={'h2'}>University Assignments</Typography>
                <Typography variant={'h6'}>
                    These are the projects or assignments that was done in accordance to my syllabus in my Degree in Computer Science. The projects are done according to the requirements provided.
                </Typography>
            </Box>
            <Grid container spacing={3}>
                {projectCards("2020-05-01", "2021-05-01", "Degree Year 1")}
                {projectCards("2021-05-01", "2022-05-01", "Degree Year 2")}
                {projectCards("2022-05-01", "2023-05-01", "Degree Year 3")}

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
    let projects = await getSchoolProjects()
    return ({props: {projects}, revalidate:10})
}

export default Assignment