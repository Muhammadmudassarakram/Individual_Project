const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://desi-recipes.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://desi-recipes.herokuapp.com',
  'process.env.CLIENT_ID': '80uWz1wCPSZt1KZIEQjOPG9Mvn1mdCu8'
}
