import { useState } from "react";
import { MenuIcon } from "lucide-react";
import NavLink from "../dynamic/nav-link";
import Button from "../ui/button";
import pageLinks from "../../data/page-links.json";
import ThemeToggle from "../dynamic/theme-toggle";

function BaseHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={
                "z-50 sticky top-0 w-full h-14 flex items-center justify-center p-1 border-b shadow-md" +
                " base-theme border-theme"
            }
        >
            <div className="w-11/12 max-w-screen-xl mx-auto h-full flex flex-row items-center justify-start">
                <h4 className="text-2xl md:text-3xl font-bold">
                    <a href="/" className="text-inherit">
                        Emulation
                    </a>
                </h4>
                <Button
                    className={"flex md:hidden ml-auto"}
                    variant={"icon"}
                    onClick={toggleMenu}
                >
                    <MenuIcon className="size-5" />
                </Button>
                <nav
                    className={
                        "hidden md:flex flex-row items-center justify-end ml-auto w-full gap-2"
                    }
                >
                    {pageLinks.map((value, index) => {
                        return (
                            <NavLink
                                key={"NavigationLinks__" + String(index)}
                                text={value.text}
                                href={"/" + value.href}
                            />
                        );
                    })}
                </nav>
                <div
                    className={
                        `md:hidden absolute w-11/12 top-16 left-[50%] translate-x-[-50%] rounded-lg border shadow-lg ${isOpen ? "block" : "hidden"}` +
                        " base-theme"
                    }
                >
                    <div className="flex flex-col items-start justify-center p-4 gap-2">
                        {pageLinks.map((value, index) => {
                            return (
                                <NavLink
                                    key={"NavigationLinks__" + String(index)}
                                    text={value.text}
                                    href={"/" + value.href}
                                />
                            );
                        })}
                    </div>
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
}

export default BaseHeader;
