
import DesCard from "./desCard"
const About = () => {
    const descriptionsArray = [
        {
            title: "Why did I get into web development:",
            descriptions: "From the beginning, I've always been fascinated by problem-solving. Whether it was puzzles, logic games, or real-world challenges, I enjoyed finding solutions. When I discovered programming, I realized it was the perfect field for me—it allowed me to build, create, and solve problems all at once.I got into web development because I wanted to bring ideas to life through functional, dynamic, and user - friendly applications.The ability to write code and see it turn into something real, interactive, and impactful excited me.But my journey wasn’t always smooth.I made mistakes—many mistakes—but each one taught me something valuable.What keeps me passionate about web development is the constant evolution of technology.There’s always something new to learn, a new challenge to tackle, and a new way to improve.Today, as a Full - Stack Developer specializing in the MERN stack, I build modern, scalable, and high - performance applications using React, Next.js, Node.js, MongoDB, Tailwind CSS, and more. Web development is more than just a career for me—it’s a journey of growth, creativity, and problem - solving.And I'm always excited about what's next. 🚀"
        },
        {
            title: "Some problems I faced in developing:",
            descriptions: "Building my web developer portfolio came with its own set of challenges. One of the main difficulties was achieving a perfect balance between aesthetics and functionality. Designing a visually appealing interface using Tailwind CSS, DaisyUI, and Framer Motion while ensuring a smooth user experience required multiple iterations.Another challenge was optimizing performance and SEO in a Next.js environment. Ensuring fast load times, server-side rendering (SSR), and proper image handling with next/image took careful planning.Managing data efficiently with Mongoose and Next.js API routes also posed challenges. Handling authentication, database queries, and dynamic content updates required in-depth debugging and optimization.Additionally, I faced state management complexities while integrating Redux Toolkit. Ensuring global state updates without unnecessary re-renders took time to refine.Lastly, making the portfolio fully responsive and interactive while keeping animations smooth with GSAP and Framer Motion required fine-tuning breakpoints and animations for different devices.Overcoming these challenges helped me grow as a full-stack web developer, strengthening my problem-solving skills and enhancing my ability to build optimized, scalable applications."
        }
    ]
    return (
        <div className=" pt-10">
            <div className="responsive-box">
                <h1 className=" title-text-lg">About Me</h1>
                <div className="">
                    {
                        descriptionsArray?.map((item, index) => (
                            <DesCard key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About
