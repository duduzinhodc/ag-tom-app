export class Calculadora {

    somar(primeiroNumero : number, segundoNumero : number): number {
        return primeiroNumero + segundoNumero;
    }

    sub(num1 : number, num2 : number): number {
        return num1 - num2;
    }

    multiplicar(numero1 : number, numero2 : number): number {
        return numero1 * numero2;
    }

    dividir(divisor1 : number, divisor2 : number): number {
        return divisor1 / divisor2;
    }
}