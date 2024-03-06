import { TrafficLight } from "../TrafficLight";
import { LightMessage } from "../enums/LightMessage";
import { LightState } from "../interfaces/LightState";

export class YellowState implements LightState {
    constructor(private context: TrafficLight) {}

    handle(): void {
        console.log(LightMessage.YELLOW);
        setTimeout(() => {
            this.context.changeState();
        }, this.context.yellowTime);
    }
}