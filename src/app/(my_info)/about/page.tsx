'use client';

import Nav from "@/components/nav/nav";

export default function ContactPage() {
    return (
        <main>
            <section className=" sticky top-0 z-50 bg-white">
                <Nav />
            </section>
            <section className=" flex items-center justify-center bg-gray-100 py-10">
                <div className="">
                    <div className="responsive-box">
                        <div className="">
                            <h1 className=" text-center text-3xl font-semibold">About Me</h1>
                            <p className="mt-5 leading-7">
                                Hi, I'm Hirock Dutta, a passionate Full-Stack Web Developer specializing in the MERN stack. My journey in web development began with a curiosity for solving problems through code. Over time, I made countless mistakes, but each one became a stepping stone to mastering my craft.
                                I thrive on challenges and love creating efficient, scalable, and user-friendly web applications. Whether it's frontend design, backend logic, or database management, I enjoy bringing ideas to life through clean and optimized code.
                                With expertise in React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and more, I build modern, dynamic, and high-performance web applications. My goal is to continue improving, learning, and pushing the boundaries of web development.
                                If you're looking for someone who turns problems into solutions, let's connect!
                            </p>
                        </div>
                        <div className=" mt-10">
                            <h1 className=" text-center text-3xl font-semibold">
                                My Journey into Programming: From Mistakes to Mastery
                            </h1>
                            <p className="mt-5 leading-7">
                                Since childhood, I was always curious about how things worked. Whether it was taking apart gadgets or solving puzzles, I loved challenges. But I never imagined that my passion for problem-solving would lead me to the world of programming.
                                When I first started coding, I had no idea what I was doing. I made countless mistakes—syntax errors, logic errors, even breaking entire projects. At times, I felt frustrated, wondering if I was even capable of becoming a developer. But every mistake was a lesson, every failure a step forward.
                                I came into programming because I loved solving problems. The more I coded, the more I realized that programming is not just about writing code—it's about thinking logically, structuring ideas, and building solutions. Debugging, which once seemed like a nightmare, became one of my favorite parts of coding. Every bug I fixed gave me a sense of achievement, like solving a complex puzzle.
                                Over time, I mastered HTML, CSS, JavaScript, and eventually the MERN stack—MongoDB, Express.js, React, and Node.js. I started building projects, from small web apps to full-stack applications. Each project helped me grow, not just as a developer but as a problem solver.
                                Now, as a Full-Stack Web Developer, I specialize in Next.js, TypeScript, Redux, Mongoose, Tailwind CSS, and other modern web technologies. I enjoy creating scalable, efficient, and user-friendly applications. But the journey never stops—I keep learning, improving, and embracing new challenges.
                                Looking back, I realize that mistakes didn't stop me; they shaped me. Every obstacle I faced made me a stronger developer. My passion for solving problems brought me here, and I’m excited to see where it takes me next.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
