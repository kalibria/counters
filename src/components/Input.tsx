type InputProps = {
    name: string
    value: number
}

export const Input = ({name, value}: InputProps) => {
    return (
        <form className={'form'}>
            <label htmlFor={name}>{name}: </label>
            <input id={name} type={'number'} value={value} className={'input'}/>
        </form>
    )
}