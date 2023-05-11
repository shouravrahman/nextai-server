// import { Configuration, OpenAIApi } from "openai";

// openai config
const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

//initialize openai to use

const openai = new OpenAIApi(config);

export const getImage = async (req, res, next) => {
	try {
		const { prompt } = req.body;
		const response = await openai.createImage({
			prompt,
			n: 1,
			size: "1024x1024",
			rsponse_format: "b64_json",
		});

		const image = response.data.data[0].b64_json;

		res.status(200).json({ photo: image });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "Failure is the pillar of success" });
	}
};
