import RegistrationLinksData from "../data/registration-links.json";

function RegistrationLinks() {
    return (
        <div className="max-w-screen-2xl mx-auto h-screen flex flex-col items-start p-8">
            <h1 className="text-center text-3xl font-semibold italic mb-10 border-b-2">
                Registration Links
            </h1>
            <ul className="pl-2 sm:pl-4">
                {RegistrationLinksData.map((val, index) => {
                    return (
                        <li key={"RegistrationLink__" + String(index)} className="font-semibold list-disc">
                            <a href={val.href}>Register for {val.text}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default RegistrationLinks;
