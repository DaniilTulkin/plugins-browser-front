import { EventsEnum } from "../enums/events.enum";

export interface Message {
    event: EventsEnum;
    payload: object;
}