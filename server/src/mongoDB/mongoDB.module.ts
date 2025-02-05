import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose"
import mongoose, { connection } from "mongoose"
import { ConfigModule } from "@nestjs/config"

mongoose.set('debug', true)


@Module({
    
    imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: '.env'
    }),
    MongooseModule.forRootAsync({
        useFactory: async () => ({
            uri: process.env.DB_URI
        })
    })
    ]
})

export class MongoDBModule {}