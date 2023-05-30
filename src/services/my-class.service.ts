import axios from "../lib/axios";
import "../../__mock__/my-class";
import { MyClass } from "../models/my-class.module";

export const fetchMyClasses = async (): Promise<MyClass[]> => {
    const response = await axios.get("/my-classes");
    return response.data;
}