const request = require('supertest');
const server = require('./server.js');

describe('server', function() {
    it('runs the test', function() {
        expect(true).toBe(true);
    });
    describe('GET /', function() {
        it('should return 200 OK', function() {
            return request(server) 
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
        it('should return JSON', function() {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });
        it('should return message in JSON', function() {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.body.message).toEqual(`API up and running on port 5000`);
                });
        });
    });
    describe('POST api/register', function() {
        it('should register a new user', function() {
            return request(server)
                .post('/api/register')
                .send({"username": "liz",
                "password": "123456",
                "department": "sales"
                })
                .then(res => {
                    expect(res.status).toBe(201);
                });
        }); 
        it('should return JSON', function() {
            return request(server)
            .post('/api/register')
            .send({"username": "amy",
            "password": "123456",
            "department": "testing"
            })
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });
        it('should return JSON with user with username property', function() {
            return request(server)
            .post('/api/register')
            .send({"username": "dave",
            "password": "123456",
            "department": "coaching"
            })
            .then(res => {
                expect(res.body.user).toHaveProperty('username');
            });
        }); 
        it('should return JSON with user with password property', function() {
            return request(server)
            .post('/api/register')
            .send({"username": "brian",
            "password": "123456",
            "department": "lumber"
            })
            .then(res => {
                expect(res.body.user).toHaveProperty('password');
            });
        });
        it('should return JSON with token', function() {
            return request(server)
            .post('/api/register')
            .send({"username": "jeff",
            "password": "123456",
            "department": "religion"
            })
            .then(res => {
                expect(res.body.token).toBeDefined();
            });
        });                
    });
    describe('POST api/login', function() {
        it('should login an existing user', function() {
            return request(server)
                .post('/api/register')
                .send({"username": "aaron",
                "password": "123456",
                "department": "GPS training"
                })
                .then(res => {
                    return request(server)
                        .post('/api/login')
                        .send({"username": "aaron",
                        "password": "123456"})
                        .then(response => {
                            expect(response.status).toBe(200);                          
                        });
                });   
        });
        it('should return a token after successful login', function() {
            return request(server)
            .post('/api/login')
            .send({"username": "aaron",
            "password": "123456"})
            .then(response => {
                expect(response.body.token).toBeDefined();                          
            });
        });
    });
});

