import Joi from "joi";

export const postValidator = Joi.object({
    title:Joi.string()
        .pattern(/[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1,100}/)
        .required()
        .messages({"string.required":"This field is required"}),
    body:Joi.string()
        .pattern(/[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1,100}/)
        .required()
        .messages({"string.required":"This field is required"}),
    userId:Joi.number()
        .min(1)
        .max(50)
        .required()
        .messages({
            "number.min":"User ID must be from 1 to 50",
            "number.max":"User ID must be from 1 to 50",
            "number.required":"This field is required"
        })
})