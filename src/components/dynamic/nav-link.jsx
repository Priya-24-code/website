function NavLink({href="#", text}) {
    return (
        <a
            href={href}
            className={"px-3 py-2 text-sm font-medium rounded-md border-b-2 border-transparent hover:shadow-md hover:border-primary  transition-all ease-in-out duration-300" + " base-theme btn-hover-theme"}
        >
            {text}
        </a>
    );
}

export default NavLink;
