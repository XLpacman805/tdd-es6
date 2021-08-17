import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import db from './db';
import app from './server';

describe('GET /users/:username', () => {
    // it should send a correct response when a user is found
    it('should send a correct response when a user is found', async () => {
        const fakeData = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        }

        const stub = sinon
            .stub(db, 'getUserByUsername') //stub the db.getUserByUsername method
            .resolves(fakeData);

        await request(app).get('/users/abc')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(fakeData);
            
        //`getUserByUsername` should be called with the username 'abc'
        expect(stub.getCall(0).args[0]).to.equal('abc'); 

        stub.restore(); //restore the stub after the test.
    });
});