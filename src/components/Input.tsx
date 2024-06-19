

type InputProps = {
    name: string
    defaultValue: number
    id: string
}

export const Input = ({name, defaultValue, id}: InputProps) => {

    return (
        <div className={'form'}>
            <label htmlFor={name}>{name}: </label>
            <input id={id} type={'number'} name={id} defaultValue={defaultValue} className={'input'}/>
        </div>
    )
}