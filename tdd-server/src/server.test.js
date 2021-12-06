import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import db, { getUserByUsername } from './db';
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

    it('sends the correct response when there is an error', async() => {
        const fakeError = {
            message: 'Something went wrong!'
        }

        const stub = sinon.stub(db, 'getUserByUsername')
            .throws(fakeError);

        await request(app).get('/users/abc')
            .expect(500)
            .expect('Content-Type', /json/)
            .expect(fakeError);

        stub.restore();
    });
});