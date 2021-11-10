class UserResponseValidator {
    constructor(response) {
        this.response = response;
    }

    responseShouldHaveStatusCodeAs(statusCode) {
        expect(this.response.statusCode).toBe(statusCode);
    }

    responseShouldHaveNameAs(name) {
        expect(this.response.body.name).toBe(name);
    }

    responseShouldHaveJobAs(job) {
        expect(this.response.body.job).toBe(job);
    }

    responseShouldHavePageAs(page) {
        expect(this.response.body.page).toBe(page);
    }

    responseShouldHavePerPageAs(per_page) {
        expect(this.response.body.per_page).toBe(per_page);
    }

}

module.exports = UserResponseValidator;