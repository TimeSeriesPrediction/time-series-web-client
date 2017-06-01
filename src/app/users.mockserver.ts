import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 
export function userMockServerFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

    let users = [
    { id: 1, username: 'Claudio', password: 'Pass' },
    { id: 2, username: 'Murray', password: 'Pass' },
    { id: 3, username: 'Dedre', password: 'Pass' },
    { id: 3, username: 'Merrisa', password: 'Pass' },
    ];

    backend.connections.subscribe((connection: MockConnection) => {

        setTimeout(() => {
 
            if (connection.request.url.endsWith('/account/token') && connection.request.method === RequestMethod.Post) {

                let params = JSON.parse(connection.request.getBody());
 
                let filteredUsers = users.filter(user => {
                    return user.username === params.username && user.password === params.password;
                });
 
                if (filteredUsers.length) {

                    let user = filteredUsers[0];
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            authToken: 'mockauthtoken'
                        }
                    })));
                } else {
                    connection.mockError(new Error('Username or password is incorrect!'));
                }
 
                return;
            }
 
        }, 500);
 
    });
 
    return new Http(backend, options);
};
 
export let UserMockServerProvider = {
    provide: Http,
    useFactory: userMockServerFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};