import { MyClass } from "../models/my-class.module";

export const fetchMyClasses = async (): Promise<MyClass[]> => 
    await fetch(`${process.env.REACT_APP_API_URL}/my-classes`).then((response) => response.json());