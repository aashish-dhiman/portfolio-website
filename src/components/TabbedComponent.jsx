const TabbedComponent = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-white border-b-2 border-b-textPara"
        : "text-[#ADB7BE] hover:-translate-y-[1px] transition-all duration-500 ease-in-out";

    return (
        <button
            onClick={selectTab}
        >
            <p
                className={`mr-3 font-semibold text-lg hover:text-white ${buttonClasses}`}
            >
                {children}
            </p>
        </button>
    );
};

export default TabbedComponent;
