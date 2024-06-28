import React, {ReactNode} from "react";


type BoxCounterProps = {
    children: ReactNode;
}

export const BoxCounter = ({children}: BoxCounterProps) => {
    return (
        <div className={'boxCounter'}>
            {children}
        </div>
    )
}