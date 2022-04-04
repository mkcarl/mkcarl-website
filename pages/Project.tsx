import {Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Star} from "@mui/icons-material";

const Project = () => {
    return (
        <Grid container spacing={3} sx={{my:'2rem'}}>
            <Grid item md={8} xs={12}>
                <Typography variant={'h3'}>Project Name</Typography>
                <Typography variant={'body1'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex laborum laudantium magnam obcaecati quod repellat similique vitae. Deserunt ea eius eum fugit ipsa molestiae odit quia quo soluta voluptatem.</Typography>
            </Grid>

            <Grid item md={4} xs={12}>
                <p>media goes here</p>
            </Grid>

            <Grid item md={5} xs={12}>
                <Typography variant={'h4'}>Skills</Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Star/>
                        </ListItemIcon>
                        <ListItemText>Skill 1</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Star/>
                        </ListItemIcon>
                        <ListItemText>Skill 2</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Star/>
                        </ListItemIcon>
                        <ListItemText>Skill 3</ListItemText>
                    </ListItem>
                </List>
            </Grid>

            <Grid item md={7} xs={12}>
                <Typography variant={'h4'}>Project Outcome</Typography>
                <Typography variant={'body1'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius eum ex facilis fuga harum incidunt ipsam laudantium magni nemo nesciunt quia reiciendis repellat reprehenderit sunt suscipit tempore vel, voluptatibus.</Typography>
                <Box sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-around'
                }}>
                    <Button variant={'outlined'}>Source Code</Button>
                    <Button variant={'outlined'}>Demo</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Project