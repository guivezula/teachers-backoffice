import { MyClass } from "../models/my-class.models";

const getAll = async (): Promise<MyClass[]> => 
    await fetch(`${process.env.REACT_APP_API_URL}/my-classes`).then((response) => response.json());

export const MyClassesService = {
    getAll,
}