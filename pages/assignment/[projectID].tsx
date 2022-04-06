import {NextPage} from "next";
import Layout from "../Layout";
import ProjectPage from "../ProjectPage";
import {getProjectByID} from "../../notion";
import {ProjectType} from "../../types";

type Props = {
    project:ProjectType
}


const AssignmentProject:NextPage<Props> = ({project}) => {
    return (
        <Layout title={project.Name}>
            <ProjectPage/>
        </Layout>
    )
}

export async function getServerSideProps(context: { params: { projectID: any; }; }){
    let project = await getProjectByID(context.params.projectID)
    return {props:{project:project}}
}

export default AssignmentProject