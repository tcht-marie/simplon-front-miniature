import "./input.scss";

const Input = ({type, name, placeholder, className, value, onChange, checked, useValueAsLabel}) => {
    return (
        <div className="inputForm">
            <label htmlFor={name}>{useValueAsLabel ? value : name}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={className}
                value={value}
                onChange={onChange}
                checked={checked}
            />
        </div>
    );
};

export default Input;