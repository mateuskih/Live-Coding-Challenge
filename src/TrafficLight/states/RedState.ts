import { TrafficLight } from "../TrafficLight";
import { LightMessage } from "../enums/LightMessage";
import { LightState } from "../interfaces/LightState";

export class RedState implements LightState {
    constructor(private context: TrafficLight) {}

    handle(): void {
        console.log(LightMessage.RED);
        setTimeout(() => {
            this.context.changeState();
        }, this.context.redTime);
    }
}