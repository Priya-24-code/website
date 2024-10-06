function BaseMain({children}) {
    return (
        <div className={"w-full flex-1 overflow-y-auto" + " base-theme"}>
            {children}
        </div>
    );
}

export default BaseMain;
