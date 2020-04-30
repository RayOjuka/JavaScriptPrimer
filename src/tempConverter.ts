export class TempConverter {
    static convertFtoC(temp: any): string {
        let value: number;
        if ((temp as number).toPrecision) {
        value = temp;
        } else if ((temp as string).indexOf) {
        value = parseFloat(temp as string);
        } else {
        value = 0;
        }
        return((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }
}
