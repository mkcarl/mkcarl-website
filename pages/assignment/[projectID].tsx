import {NextPage} from "next";
import Layout from "../Layout";
import ProjectPage from "../ProjectPage";

const AssignmentProject:NextPage = () => {
    return (
        <Layout title={'from next router'}>
            <ProjectPage/>
        </Layout>
    )
}

export default AssignmentProject