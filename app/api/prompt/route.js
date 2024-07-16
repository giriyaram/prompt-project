import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        debugger;
        console.log("Connecting to DB...");
        await connectToDB();
        console.log("Connected to DB");

        const prompts = await Prompt.find({}).populate('creator');
        
        // console.log("Fetched prompts:", prompts);

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("Failed to fetch all prompts:", error);
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};
