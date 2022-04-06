export type SkillType = {
    name:string,
    proficiency:number,
    url:string
}

export type ProjectType = {
    Code:string,
    Name:string,
    Description:string,
    Type:string,
    Period:Date,
    CoverPhotoLink:string,
    VideoLink:string,
    SourceCodeLink:string,
    DemoLink:string,
    Skills:Array<SkillType>,
    Outcome:string
}