import { TrafficLight } from "../TrafficLight";
import { LightMessage } from "../enums/LightMessage";
import { LightState } from "../interfaces/LightState";

export class GreenState implements LightState {
    constructor(private context: TrafficLight) {}

    handle(): void {
        console.log(LightMessage.GREEN);
        setTimeout(() => {
            this.context.changeState();
        }, this.context.greenTime);
    }
}