export class BoxMuller {
    public static two_pi = 2 * Math.PI;

    private returnWithStored = true;

    private z1: number;

    get() {
        this.returnWithStored = !this.returnWithStored;

        if (this.returnWithStored) {
            return this.z1;
        }

        const part1 = Math.sqrt(-2 * Math.log(Math.random()));
        const part2 = BoxMuller.two_pi * Math.random();

        this.z1 = part1 * Math.sin(part2);

        return part1 * Math.cos(part2);
    }
}
