import Link from "next/link"


const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
   <section className="w-full mb-16 max-w-full flex-start flex-col">
    <h1 className="head_text text-left">
     <span className="blue_gradient"> {type} Post</span>
    </h1>
    <p className="desc text-left max-w-md">
      {type} and share amazing prompts with world, and let your imagination run wild with any AI-powered platform
    </p>

    <form 
      onSubmit={handleSubmit}
      className="mt-10 w-full flex flex-col gap-7 max-w-2xl glassmorphism"
    >
      <label>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          Your AI Prompt
        </span>

        <textarea 
          value={post.prompt}
          onChange={(e) => {setPost({...post, 
          prompt: e.target.value})}}
          placeholder="Write your prompt here..."
          required
          className="form_textarea"></textarea>
      </label>

      <label>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          Tag
        </span>

        <input 
          value={post.tag}
          onChange={(e) => {setPost({...post, 
          tag: e.target.value})}}
          placeholder="#product, #webdevelopment, #seo"
          required
          className="form_input"></input>
      </label>

      <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500">
            Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="px-5 pt-1.5 pb-2.5 text-sm bg-primary-orange rounded-full text-white"
            >
              {submitting ? `${type}...` :type}
            </button>
      </div>
    </form>
   </section>
  )
}

export default Form