import { ShieldIcon, UsersRoundIcon, WashingMachineIcon } from "lucide-react";
import InnerTeamMembers from "../data/inner-team-members.json";

const AboutUs = () => {
    return (
        <main className={"p-6 sm:p-10 relative w-full max-w-screen-2xl mx-auto" + " base-theme"}>
            {/* Mission Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold  mb-4">
                    Our Mission
                </h2>
                <p className="text-lg mb-6">
                    At Emulation Club, we strive to create a vibrant community
                    of passionate developers who are dedicated to pushing the
                    boundaries of software emulation. Our mission is to preserve
                    digital history, enhance gaming experiences, and foster
                    innovation in the field of emulation technology.
                </p>
                <div className="bg-stone-100 dark:bg-tertiary p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-3">
                        We are committed to:
                    </h3>
                    <ul className="list-disc list-inside  space-y-2">
                        <li>Advancing emulation techniques and technologies</li>
                        <li>
                            Preserving and providing access to classic software
                            and games
                        </li>
                        <li>
                            Educating members about the technical and legal
                            aspects of emulation
                        </li>
                        <li>Collaborating on open-source emulation projects</li>
                        <li>
                            Organizing workshops, hackathons, and conferences
                            focused on emulation
                        </li>
                    </ul>
                </div>
            </section>

            {/* Values Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">
                    Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-stone-100 dark:bg-tertiary p-6 rounded-lg shadow-lg">
                       <ShieldIcon className="size-16" />
                        <h3 className="text-xl font-semibold mb-2">
                            Integrity
                        </h3>
                        <p className="text-sm">
                            We uphold the highest ethical standards in our
                            emulation practices and respect intellectual
                            property rights.
                        </p>
                    </div>
                    <div className="bg-stone-100 dark:bg-tertiary p-6 rounded-lg shadow-lg">
                        <UsersRoundIcon className="size-16" />
                        <h3 className="text-xl font-semibold mb-2">
                            Community
                        </h3>
                        <p className="text-sm">
                            We foster a supportive and inclusive environment
                            where members can learn, share, and grow together.
                        </p>
                    </div>
                    <div className="bg-stone-100 dark:bg-tertiary p-6 rounded-lg shadow-lg">
                        <WashingMachineIcon className="size-16" />
                        <h3 className="text-xl font-semibold mb-2">
                            Innovation
                        </h3>
                        <p className="text-sm">
                            We encourage creative problem-solving and push the
                            boundaries of what&apos;s possible in emulation
                            technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section>
                <h2 className="text-3xl font-bold mb-4">
                    Our Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {InnerTeamMembers.map((member, index) => (
                        <div
                            key={"TeamMemberCards__" + String(index)}
                            className="bg-stone-100 dark:bg-tertiary p-6 rounded-lg shadow-lg text-center"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className={"w-32 h-32 rounded-full mx-auto mb-4 border" + " border-theme"}
                            />
                            <h3 className="text-xl font-semibold">
                                {member.name}
                            </h3>
                            <p className="text-sm font-semibold mt-2 opacity-85">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
