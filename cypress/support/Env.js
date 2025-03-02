export class Env {


    getBaseUrl() {
        let envi = Cypress.env('ENV');
        let baseUrl = 'https://platform.rekaz.dev/Account/Login';
        return baseUrl;
    }

    userRole(useradmin) {
        const usercredentials = {};
        if(useradmin === "user") {
            usercredentials["username"] = "modyhussien106@gmail.com";
            usercredentials["password"] = "Mm12345!";
        }
        return usercredentials;
    }

}