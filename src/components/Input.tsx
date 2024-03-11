export default function Input({ name, label }) {
    return (
        <>
            <div className="input-box_wrapper">
                <label htmlFor={name} className="label_item">{label}</label>
                <div className="input_wrapper">
                    <input
                        name={name}
                        type="text"
                        className="input"
                    />
                </div>
            </div>
        </>
    )
}