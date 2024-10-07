import { CodeIcon, SwatchBookIcon, Users2Icon } from "lucide-react";
import React from "react";
import Typed from "typed.js";

const Home = () => {
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Emulation Club"],
			typeSpeed: 100,
			backSpeed: 10,
			smartBackspace: true,
			loop: true,
		});
		return () => {
			typed.destroy();
		};
	}, []);
	return (
		<div className=" bg-[url(/pic.png)] sm:bg-[url(/backgroundImg.png)] bg-cover bg-center bg-fixed">
			<section className="bg-white/85 dark:bg-tertiary/65 py-56 px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-3xl sm:text-5xl md:text-6xl font-bold  mb-8">
					Welcome to <span className="text-primary bg-white rounded-xl px-2" ref={el} />
				</h1>
				<p className="text-xl mb-8 max-w-2xl mx-auto font-semibold">
					Unleash your coding potential and build amazing projects with our vibrant community of developers.
				</p>
				<button
					className={
						"mt-4 font-bold p-6 py-4 rounded-lg transition duration-300 border bg-primary/35 hover:bg-primary hover:text-white" +
						" btn-hover-theme"
					}
				>
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSddmkA485zSTuB5ihh3e-Tg755NNrjntyWGkxzhmCeci5l1Lg/viewform">
						Join Our Club
					</a>
				</button>
			</section>

			{/* Features Section */}
			<section className={"py-16 px-4 sm:px-6 lg:px-8" + " base-theme"}>
				<h2 className="text-4xl font-bold text-center  mb-12 text-primary dark:text-white">
					Why Join Emulation Club ?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					<div className="bg-stone-100 dark:bg-tertiary p-6 rounded-lg shadow-lg">
						<div className="flex items-center mb-4">
							<CodeIcon className="size-5 mr-2" />
							<h3 className="text-xl font-semibold">Learn Together</h3>
						</div>
						<p className="text-sm">
							Collaborate on exciting projects and learn from experienced developers in our supportive
							community.
						</p>
					</div>
					<div className="bg-stone-100 dark:bg-tertiary p-6 rounded-lg shadow-lg">
						<div className="flex items-center mb-4">
							<SwatchBookIcon className="size-5 mr-2" />
							<h3 className="text-xl font-semibold">Skill Building</h3>
						</div>
						<p className="text-sm">
							Enhance your coding skills through workshops, hackathons, and hands-on projects across
							various technologies.
						</p>
					</div>
					<div className="bg-stone-100 dark:bg-tertiary p-6 rounded-lg shadow-lg">
						<div className="flex items-center mb-4">
							<Users2Icon className="size-5 mr-2" />
							<h3 className="text-xl font-semibold">Networking</h3>
						</div>
						<p className="text-sm">
							Connect with like-minded individuals, industry professionals, and potential employers in the
							tech world.
						</p>
					</div>
				</div>
			</section>
      {/* sign up section */}
      <section
          className={
              "py-16 flex flex-col items-center justify-center text-center px-2 md:px-4" +
              " base-theme"
          }
      >
          <h2 className="text-2xl sm:text-4xl max-w-md font-bold mb-4">
              Ready to Start Your Coding Journey?
          </h2>
          <p className="text-base font-semibold w-9/12 max-w-md text-center">
              Join Emulation Club today and take the first step towards
              becoming a skilled developer in our supportive community.
          </p>
      </section>
        </div>
    );
};

export default Home;
