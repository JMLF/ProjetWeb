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
