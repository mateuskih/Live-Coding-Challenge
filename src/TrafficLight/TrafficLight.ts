import { LightState } from "./interfaces/LightState";
import { GreenState } from "./states/GreenState";
import { RedState } from "./states/RedState";
import { YellowState } from "./states/YellowState";

export class TrafficLight {
    private currentState: LightState;
    redTime: number = 15000;
    greenTime: number = 10000;
    yellowTime: number = 5000;

    constructor() {
        this.currentState = new RedState(this);
    }

    setState(state: LightState) {
        this.currentState = state;
    }

    start() {
        this.currentState.handle();
    }

    changeState() {
        if (this.currentState instanceof RedState) {
            this.setState(new GreenState(this));
        } else if (this.currentState instanceof GreenState) {
            this.setState(new YellowState(this));
        } else if (this.currentState instanceof YellowState) {
            this.setState(new RedState(this));
        }

        this.start();
    }
}
