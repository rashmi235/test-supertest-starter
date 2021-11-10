import request from 'supertest';
import config from '../resources/config.js';
import UserResponseValidator from '../validators/UserResponseValidator.js'


describe('GET /users', function () {

    it('should return all Users data for page 1 with pageSize 6 ', async function () {
        const response = await request(config.base_url).get('/users');
        const userResponseValidator= new UserResponseValidator(response);
        userResponseValidator.responseShouldHaveStatusCodeAs(200);
        userResponseValidator.responseShouldHavePageAs(1);
        userResponseValidator.responseShouldHavePerPageAs(6);
    })
})