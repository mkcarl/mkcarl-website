import {NextPage} from "next";
import Layout from "../Layout";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {getSchoolProjects} from "../notion";
import { Project } from "../types";



type Props = {
    projects:Array<Project>
}

const Assignment:NextPage<Props> = ({projects}) => {
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
                <Grid item md={12}>
                    <Typography variant={'h3'}>Degree Year 1</Typography>
                </Grid>
                {projects.map((project) =>{
                    return new Date(project.Period) < new Date("2020-05-01") || new Date(project.Period) > new Date("2021-05-01") ? null : (
                        <Grid item key={project.Code} md={4}>
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

                <Grid item md={12}>
                    <Typography variant={'h3'}>Degree Year 2</Typography>
                </Grid>
                {projects.map((project) =>{
                    return new Date(project.Period) < new Date("2021-05-01") || new Date(project.Period) > new Date("2022-05-01") ? null : (
                        <Grid item key={project.Code} md={4}>
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


                <Grid item md={12}>
                    <Typography variant={'h3'}>Degree Year 3</Typography>
                </Grid>
                {projects.map((project) =>{
                    return new Date(project.Period) < new Date("2022-05-01") || new Date(project.Period) > new Date("2023-05-01") ? null : (
                        <Grid item key={project.Code} md={4}>
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

            </Grid>
        </Layout>
    )
}

export async function getStaticProps(){
    let projects = await getSchoolProjects()
    return ({props: {projects}})
}

export default Assignment