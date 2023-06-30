import passport from 'passport';

import { PassportStrategy } from '../interfaces';

export default class PassportConfig {
    constructor(private strategies: PassportStrategy[]) {
        this.addStrategies();
    }

    private addStrategies(): void {
        this.strategies.forEach((passportStrategy: PassportStrategy) => {
            passport.use(passportStrategy.name, passportStrategy.strategy);
        });
    }
}


