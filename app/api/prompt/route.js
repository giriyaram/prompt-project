import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB, disconnectFromDB } from "@utils/database";

export const GET = async (request) => {
    try {
        console.log("Connecting to DB...");
        await connectToDB();
        console.log("Connected to DB");

        const prompts = await Prompt.find({}).populate('creator');
        await disconnectFromDB();
        console.log("disconnected from db");

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("Failed to fetch all prompts:", error);
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};
