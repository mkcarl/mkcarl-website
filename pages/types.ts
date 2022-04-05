export type Skill = {
    name:string,
    proficiency:number,
    url:string
}

export type Project = {
    Code:string,
    Name:string,
    Description:string,
    Type:string,
    Period:Date,
    CoverPhotoLink:string,
    VideoLink:string,
    SourceCodeLink:string,
    DemoLink:string,
    Skills:Array<Skill>
}