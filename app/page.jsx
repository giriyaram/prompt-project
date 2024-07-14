import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
        <h1 className="heading-texts z-10 text-center mt-5 text-5xl font-extrabold leading-[1.15] sm:text-6xl">
            Discover and share 
            <br className=" max-md:hidden"/>
            <span className="orange_gradient text-center">
                AI-Powered Prompt
            </span>
        </h1>
        <p className="desc_gray text-center">
            Prompt Advicer is an open-source AI prompt tool for modern world to <span className="text-[#FAFAFA]">discover, create and share creative prompts</span>
        </p>

        <Feed />
    </section>
  )
}

export default Home