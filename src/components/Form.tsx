import Input from "./Input";

export default function Form({ addClock } : { addClock: React.FormEventHandler<HTMLFormElement> }) {
    return (
        <form onSubmit={addClock} className="form">
            <Input name={'title'} label={'Название'} />
            <Input name={'offset'} label={'Временная зона'} />
            <button type="submit" className="button">Добавить</button>
        </form>
    )
}