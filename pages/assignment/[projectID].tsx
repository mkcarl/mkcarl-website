import {NextPage} from "next";
import Layout from "../Layout";
import ProjectPage from "../ProjectPage";
import {getProjectByID, getSchoolProjects} from "../../notion";
import {ProjectType} from "../../types";

type Props = {
    project:ProjectType
}


const AssignmentProject:NextPage<Props> = ({project}) => {
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
    const projects = await getSchoolProjects()
    const paths = projects.map((proj)=>({
        params:{project:proj},
    }))

    return {paths, fallback:false}
}

export default AssignmentProject