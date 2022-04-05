import {Client} from "@notionhq/client";

const notion = new Client({
    auth : process.env.NOTION_API_KEY
});

export async function getHomePageDescription(){
    const blockId = '7a929f53a4e54f15b374e3f01bd406c1';
    const response = await notion.blocks.retrieve({
        block_id: blockId,
    });
    let {paragraph} = response
    return (paragraph.rich_text[0].plain_text);
}

export async function getSkills(){
    const database_id = '8bc0b74156aa427586d2fe19a37a7565';
    const response = await notion.databases.query({
        database_id: database_id,
        sorts:[
            {property:'Proficiency', direction:'descending'}
        ]
    });
    let skills = []
    let entry = {}
    response.results.forEach( (skill) => {
            entry = {}
            entry.name = skill.properties.Name.title[0].plain_text
            entry.proficiency = skill.properties.Proficiency.number
            entry.url = skill.properties.ImageURL.url
            skills.push(entry)
        }
    )
    return (skills)
}

export async function getSchoolProjects(){
    const databaseId = '16d6253933c541e8b56fc6f9fc6da536';
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: 'Type',
            select:{
                equals:"School"
            },

        },
        sorts: [
            {
                property: 'Period',
                direction: 'ascending',
            },
        ],
    });
    let projects
    projects = await Promise.all(response.results.map(async (project)=>{
        let     entry = {}
        entry.Code=project.properties.Code.title[0].plain_text
        entry.Name=project.properties.Name.rich_text[0].plain_text
        entry.Description=project.properties.Description.rich_text[0].plain_text
        entry.Type=project.properties.Type.select.name
        entry.Period=project.properties.Period.date.start
        entry.CoverPhotoLink=project.properties.CoverPhotoLink.url
        entry.VideoLink=project.properties.VideoLink.url
        entry.SourceCodeLink=project.properties.SourceCodeLink.url
        entry.DemoLink=project.properties.DemoLink.url
        entry.Skills = await Promise.all(project.properties.Skills.relation.map(async ({id}) => {
            return await getSkillFromNotionID(id)
        }))
        return entry
    }))
    return projects
}

async function getSkillFromNotionID(notion_page_id){
    const pageId = notion_page_id;
    const response = await notion.pages.retrieve({ page_id: pageId });
    let entry = {}
    entry.name = response.properties.Name.title[0].plain_text
    entry.proficiency = response.properties.Proficiency.number
    entry.url = response.properties.ImageURL.url
    return entry
}