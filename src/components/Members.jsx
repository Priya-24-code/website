import MemberCard from "./ui/member-card";
import membersData from "../data/members.json";

const Members = () => {
    return (
        <div className="p-6 sm:p-10 relative w-full max-w-screen-2xl mx-auto">
            <h1 className="w-fit text-center text-3xl font-semibold italic mb-10 border-b-2">
                Members
            </h1>
            <div className="flex flex-row flex-wrap items-center justify-center gap-8">
                {Object.values(membersData).map((item, index) => (
                    <MemberCard
                        key={"MemberCard__" + String(index)}
                        img={item.img}
                        name={item.name}
                        about={item.about}
                        portfolio={item.portfolio}
                        githubProfile={item.githubProfile}
                        linkedinProfile={item.linkedinProfile}
                        courseYear={item.courseYear}
                    />
                ))}
            </div>
        </div>
    );
};

export default Members;
