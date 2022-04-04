import {NextPage} from "next";
import Layout from "../Layout";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const Assignment:NextPage = () => {
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
                <Grid item md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Project 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid consequuntur dicta dolore, dolores doloribus earum esse facilis modi, nesciunt perferendis placeat possimus qui repellat repellendus rerum velit, voluptate voluptatem?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Details</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Project 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid consequuntur dicta dolore, dolores doloribus earum esse facilis modi, nesciunt perferendis placeat possimus qui repellat repellendus rerum velit, voluptate voluptatem?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Details</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xl={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Project 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid consequuntur dicta dolore, dolores doloribus earum esse facilis modi, nesciunt perferendis placeat possimus qui repellat repellendus rerum velit, voluptate voluptatem?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>


        </Layout>
    )
}

export default Assignment