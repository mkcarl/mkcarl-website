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