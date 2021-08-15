import { expect } from 'chai';
import { getUserByUsername } from './db';
import { getDatabaseData, resetDatabase, setDataBaseData } from './test-helpers';

describe('getUserByUsername', () => {
    afterEach('reset the database', async() => {
        await resetDatabase();
    });

    it('should get the correct user from the database given a username', async () => {
        // tests
        const fakeData = [{
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        }, {
            id: '124',
            username: 'wrong',
            email: 'wrong@wrong.com',
        }];

        await setDataBaseData('users', fakeData);
        
        const actual = await getUserByUsername('abc');
        const finalDbState = await getDatabaseData('users');
        const expected = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        };

        expect(actual).excludingEvery('_id').to.deep.equal(expected);
        expect(finalDbState).excludingEvery('_id').to.deep.equal(fakeData);
    });
});