import request from 'supertest';
import User from '../requests/User.js';
import config from '../resources/config.js';
import UserResponseValidator from '../validators/UserResponseValidator.js'

describe('POST /users', function () {

    it('should create an User data  ', async function () {
        const userPayload= new User().setName("catalyst").setJob("contributor");
        const response = await request(config.base_url).post('/users').send(userPayload);
        const userResponseValidator= new UserResponseValidator(response);
        userResponseValidator.responseShouldHaveStatusCodeAs(201);
        userResponseValidator.responseShouldHaveNameAs("catalyst");
        userResponseValidator.responseShouldHaveJobAs("contributor");
    })
})