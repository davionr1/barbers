import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport'
import { mongoDBStore } from 'connect-mongodb-session'
import MongoDBStore from 'connect-mongodb-session';
import * as session from 'express-session';
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config()
const session_secret = process.env.session_secret

async function bootstrap() {
  const port = 3000
  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 },
    store: new MongoDBStore({
      collectionName: 'sessions',
      ttl: 3600,
      autoRemove: 'native',
      uri:process.env.DB_URI,
    })
  })) 


  app.use(passport.initialize())
  app.use(passport.session())

  // passport.serializeUser(function(user,cb){
  //   process.nextTick(function(){
  //     return cb(null, {
  //       id:user.id,
  //       name:user.name
  //     })
  //   })
  // })
  // passport.deserializeUser(function(user,cb){
  //   process.nextTick(function(){
  //     return cb(null,user)
  //   })
  // })
  await app.listen(port, () => {
    console.log(`port is up on ${port}`);

  })
  
}
bootstrap();
