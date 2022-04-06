import {
    Avatar,
    Box,
    Button,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import {ProjectType} from "../types";
import { FC } from "react";

type Props = {
    project?:ProjectType
}

const ProjectPage:FC<Props> = ({project}) => {
    if (typeof project === "undefined") return null
    return (
        <Grid container spacing={3} sx={{my:'2rem'}}>
            <Grid item md={8} xs={12}>
                <Typography variant={'h3'}>{project.Name}</Typography>
                <Typography variant={'body1'}>{project.Description}</Typography>
            </Grid>

            <Grid item md={4} xs={12}>
                {project.VideoLink !== null ?
                    <Box
                        component={'iframe'}
                        src={project.VideoLink}
                        allowFullScreen={true}
                        frameBorder={0}
                    /> :
                    <Box
                        component={'img'}
                        src={project.CoverPhotoLink}
                        maxWidth={'100%'}
                    />
                }
            </Grid>

            <Grid item md={5} xs={12}>
                <Typography variant={'h4'}>Skills</Typography>
                <List>
                        {project.Skills.map((skill)=>{
                            return <ListItem key={skill.name}>
                                <ListItemAvatar>
                                    <Avatar variant={'rounded'} src={skill.url}/>
                                </ListItemAvatar>
                                <ListItemText>{skill.name}</ListItemText>
                            </ListItem>
                        })}
                </List>
            </Grid>

            <Grid item md={7} xs={12}>
                <Typography variant={'h4'}>Project Outcome</Typography>
                <Typography variant={'body1'}>{project.Outcome}</Typography>
                <Box sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-around'
                }}>
                    <Button variant={'outlined'} href={project.SourceCodeLink} target={'_blank'} disabled={project.SourceCodeLink === null}>Source Code</Button>
                    <Button variant={'outlined'} href={project.DemoLink} target={'_blank'} disabled={project.DemoLink === null}>Demo</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProjectPage