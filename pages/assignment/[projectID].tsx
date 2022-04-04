import {NextPage} from "next";
import Layout from "../Layout";
import Project from "../Project";

const AssignmentProject:NextPage = () => {
    return (
        <Layout title={'from next router'}>
            <Project/>
        </Layout>
    )
}

export default AssignmentProject