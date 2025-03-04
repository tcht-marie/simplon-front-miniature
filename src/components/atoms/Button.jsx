

const Button = ({ text, type, onClick, className, ariaLabel }) => {
    return (
        <div className="button">
            <button className={className} type={type} onClick={onClick} aria-label={ariaLabel}>
                {text}
            </button>
        </div>
    );
};

export default Button;
