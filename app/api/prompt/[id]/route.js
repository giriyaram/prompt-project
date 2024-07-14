import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        await disconnectFromDB()
        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Prompt", { status: 500 });
    }
};

// export const DELETE = async (request, { params }) => {
//     try {
//         await connectToDB();

//         // Find the prompt by ID and remove it
//         const item = await Prompt.findByIdAndRemove(params.id);
//         if (!item) {
//             return res.status(404).json({ message: 'Item not found' });
//         }
//         console.log('Item deleted successfully');

//         return new Response("Prompt deleted successfully", { status: 200 });
//     } catch (error) {
//         return new Response("Error deleting prompt", { status: 500 });
//     }
// };
// pages/api/prompt/[id].js


export const DELETE = async (request, { params }) => {
    try {
        console.log('Received ID to delete:', params.id); // Log the ID to confirm it's received

        await connectToDB();

        // Find the prompt by ID and remove it
        const item = await Prompt.findByIdAndDelete(params.id);
        if (!item) {
            return new Response(JSON.stringify({ message: 'Item not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: "Prompt deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error('Error deleting prompt:', error);  // Log the error with more detail
        return new Response(JSON.stringify({ message: `Error deleting prompt: ${error.message}` }), { status: 500 });
    }
};
