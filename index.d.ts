declare module "\*.svg" 
{ 
    const type : string;

    export default type;
}

declare module "\*.jpg" {
    const value: any;
    export default value;
}