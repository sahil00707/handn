export interface UserDataType {
    name:string,
    email:string,
    number:number,
    age:number,
    gender:string,
    file:string,
    votes:number

}

export interface userDataTypeBig{
    id:number,
    userData:UserDataType
}