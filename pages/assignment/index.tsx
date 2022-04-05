import {NextPage} from "next";
import Layout from "../Layout";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {getSchoolProjects} from "../notion";
import { Project } from "../types";



type Props = {
    projects:Array<Project>
}

const Assignment:NextPage<Props> = ({projects}) => {

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
                                    <Button size="small">Details</Button>
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
                <Typography variant={'h6'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut commodi consequatur deleniti dolorem dolorum facere id nam obcaecati odit perferendis perspiciatis possimus praesentium quae quia, quibusdam reprehenderit, repudiandae rerum.</Typography>
            </Box>
            <Grid container spacing={3}>
                {projectCards("2020-05-01", "2021-05-01", "Degree Year 1")}
                {projectCards("2021-05-01", "2022-05-01", "Degree Year 2")}
                {projectCards("2022-05-01", "2023-05-01", "Degree Year 3")}

            </Grid>
        </Layout>
    )
}

export async function getStaticProps(){
    let projects = await getSchoolProjects()
    return ({props: {projects}})
}

export default Assignment