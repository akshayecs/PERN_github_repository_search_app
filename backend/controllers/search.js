const Joi = require("joi")
const {handleGetGithubRepositoryByUsername     } = require("../services/search")
const getGithubRepositoryByUsername = async (req, res) => {
    try {
        req.body.username = req.query.username;

        const validateSchema = Joi.object({
            username: Joi.string().required()
        });

        const validate = validateSchema.validate(req.body);

        if (validate.error) {
            return res.status(400).send({ message: 'Invalid Argument' });
        }

        const args = {
            data: {
                username: req.body.username
            },
            role:req.userInfo.role,
            dbClient: req.dbClient
        }
        const response = await handleGetGithubRepositoryByUsername(args);
        return res.send({ status: response.status, message: response.message, data: response.data });
    } catch (error) {
        return res.status(400).send({ message: "Internal Server Error" })
    }
}

module.exports = {
    getGithubRepositoryByUsername
}