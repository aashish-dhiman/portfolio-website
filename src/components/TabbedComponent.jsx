const TabbedComponent = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-white border-b-2 border-b-textPara"
        : "text-[#ADB7BE] ";

    return (
        <button onClick={selectTab}>
            <p
                className={`mr-3 font-semibold text-lg hover:text-white ${buttonClasses}`}
            >
                {children}
            </p>
        </button>
    );
};

export default TabbedComponent;
