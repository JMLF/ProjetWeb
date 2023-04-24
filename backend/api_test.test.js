const app = require('./index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

app.get('/test', async (req, res) => {
    res.json({message: 'pass!'})
  })

  describe('Init', () => { 
    test('Should pass or error with jest', async () => {
      const response = await request.get('/test')
    
      expect(response.status).toBe(200)
      expect(response.body.message).toBe('pass!')
    })
  
  test('Should pass or bad index.js', async () => {
      const response = await request.get('/ping')
    
      expect(response.status).toBe(200)
      expect(response.text).toBe('Eheh Hello World!')
    })
  
  });

  // Tests civility
  describe('Crréation civilité', () => { 
    test('Should pass', async () => {
      const response = await request.post('/api/civility').send({ "status" : "neutre1"});
      expect(response.status).toBe(200)
    })
  });
 
  // Tests signup
  describe('Création utilisateur', () => { 

    test('Should throw error, no surname', async () => {
      const data = 
      {
        "name":"testname",
        "surname":""
      }
  
      const response = await request.post('/api/signup').send(data);
      expect(response.status).toBe(500)
      expect(response.body.message).toBe("Erreur : Merci de préciser un prénom")
   
    })

    test('Should throw error, no name', async () => {
      const data = 
      {
        "name":"",
        "surname":"testsurname"
      }
  
      const response = await request.post('/api/signup').send(data);
      expect(response.status).toBe(500)
      expect(response.body.message).toBe("Erreur : Merci de préciser un nom")
   
    })

    test('Should pass and create a new user', async () => {
      const data = 
      {
        "name":"test2name",
        "surname":"test2surname"
      }
      
      const response = await request.post('/api/signup').send(data);
      
      expect(response.status).toBe(200)
      expect(response.body).toStrictEqual({"id":1,"name":"test2name","surname":"test2surname","civilityId":1})
    })

  });

    // Tests signup
    describe('Supression utilisateur', () => { 

      test('Should not pass, no id', async () => {
    
        const response = await request.delete('/api/user');
        expect(response.status).toBe(404)
      })
      
      test('Should pass and delete user in previous test', async () => {
    
        const response = await request.delete('/api/user/1');
        expect(response.status).toBe(200)
      })
  
    });

  
  test('Get all users', async () => {
    const response = await request.get('/api/users')
    expect(response.status).toBe(200)
  })

  // Tests civility
  describe('Crréation civilité', () => { 
    test('Should pass', async () => {
      const response = await request.post('/api/civility').send({ "status" : "neutre1"});
      expect(response.status).toBe(200)
    })
  });