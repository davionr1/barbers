import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReviewSchema } from "./reviews.entity";
import { Reviews } from "./reviews.entity";
@Module({
    imports: [
        
        MongooseModule.forFeature([
            {
                name: Reviews.name,
                schema: ReviewSchema
            }
        ])
    ]
})

export class ReviewsModule { } 