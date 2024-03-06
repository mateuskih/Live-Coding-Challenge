// Repetir a impressão a cada 1 segundo:
// 1. Vermelho:
// a. Tempo de permanência no estado: 15s
// b. Imprimir: "ESPERE AÍ"
// 2. Verde:
// a. Tempo de permanência no estado: 10s
// b. Imprimir: "SIMBORA!"
// 3. Amarelo:
// a. Tempo de permanência no estado: 5s
// b. Imprimir: "FICA ESPERTO, QUERIDO"


// Pesquisei qual seria a melhor forma de implementar esse problema seguindo as boas práticas de Orientação a Objetos e encontrei o State pattern, o qual já tinha ouvido falar, mas não tinha implementado até então. Achei bem interessante e estou planejando implementá-lo em outros projetos pessoais.

// Inicialmente, implementei seguindo TDD em uma única classe TrafficLight e os states. Em seguida, quando estava funcional, refatorei e organizei o código.

import { TrafficLight } from "./TrafficLight";

jest.useFakeTimers();

describe('TrafficLight', () => {
    let trafficLight: TrafficLight;
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        trafficLight = new TrafficLight();
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('should print "ESPERE AÍ" initially', () => {
        trafficLight.start();
        expect(consoleSpy).toHaveBeenCalledWith('ESPERE AÍ');
    });

    test('should print "SIMBORA!" after 15s', () => {
        trafficLight.start();
        jest.advanceTimersByTime(15000);
        expect(consoleSpy).toHaveBeenCalledWith('SIMBORA!');
    });

    test('should print "FICA ESPERTO, QUERIDO" after 25s', () => {
        trafficLight.start();
        jest.advanceTimersByTime(25000);
        expect(consoleSpy).toHaveBeenCalledWith('FICA ESPERTO, QUERIDO');
    });

    test('should loop through states', () => {
        trafficLight.start();
        jest.advanceTimersByTime(15000);
        expect(consoleSpy).toHaveBeenCalledWith('SIMBORA!');
        jest.advanceTimersByTime(10000);
        expect(consoleSpy).toHaveBeenCalledWith('FICA ESPERTO, QUERIDO');
        jest.advanceTimersByTime(5000);
        expect(consoleSpy).toHaveBeenCalledWith('ESPERE AÍ');
    });
});
