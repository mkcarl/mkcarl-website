import {NextPage} from "next";
import Layout from "../Layout";
import ProjectPage from "../ProjectPage";
import {ProjectType} from "../../types";
import {getPersonalProjects, getProjectByID, getSchoolProjects} from "../../notion";

type Props = {
    project:ProjectType
}

const PersonalProject:NextPage<Props> = ({project}) => {
    return (
        <Layout title={project.Name}>
            <ProjectPage project={project}/>
        </Layout>
    )
}

export async function getStaticProps(context: { params: { projectID: any; }; }){
    let project = await getProjectByID(context.params.projectID)
    return {props:{project:project}, revalidate:10}
}

export async function getStaticPaths(){
    const projects = await getPersonalProjects()
    const paths = projects.map((proj)=>({
        params:{project:proj},
    }))

    return {paths, fallback:false}
}

export default PersonalProject