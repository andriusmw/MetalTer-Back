const Joi = require("joi");
const { generateError } = require("../../helpers/generateError");

const newEntrySchema = Joi.object({
  title: Joi.string()
    .min(4)
    .max(100)
    .required()
    .error(
      generateError(
        "Title is required and must have between 4 and 100 characters",
        400
      )
    ),
    
  description: Joi.string()
    .min(4)
    .max(500)
    .required()
    .error(
      generateError(
        "Description is required and must have between 4 and 500 characters",
        400
      )
    ),
        //No validamos la imagen porque es un campo opcional.

        image: Joi.any()
        .optional()
        .error(
          generateError(
            "image field error",
            400
          )
        ),


        video_url: Joi.any()
        .optional()
        .error(
          generateError(
            "video_url field error",
            400
          )
        ),

        country: Joi.string()
        .min(2)
        .max(100)
        .required()
        .error(
          generateError(
            "country field error",
            400
          )
        ),

        category: Joi.string().valid("News","Concerts","Album","VIDEO")
      
        .error(
          generateError(
            "category field is not valid. it must be one of these: 'News' , 'Concerts', 'Album' or 'VIDEO'",
            400
          )
        ),
        
      


});

module.exports = newEntrySchema;
