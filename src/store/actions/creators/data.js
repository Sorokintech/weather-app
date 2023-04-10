import { DATA_PRESENT } from "../types";

export const addData = (boolean) => ({
    type: DATA_PRESENT,
    payload: boolean
})