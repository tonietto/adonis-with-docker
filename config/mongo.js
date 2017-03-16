'use strict'

const Env = use('Env')

module.exports = {
  host: Env.get('MONGO_HOST', 'mongo'),
  port: Env.get('MONGO_PORT', '27017'),
  user: Env.get('MONGO_USER', ''),
  pass: Env.get('MONGO_PASS', ''),
  db: Env.get('MONGO_DATABASE', 'mongo')
}
