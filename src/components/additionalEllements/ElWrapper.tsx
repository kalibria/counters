import React, {ReactNode} from "react";

type InfoPanelProps ={
    flexDirection?: "column" | "row";
    children: ReactNode
}

export const ElWrapper = ({children, flexDirection}: InfoPanelProps) => {
    return <div className={'elWrapper'} style={flexDirection ? {flexDirection} : {}}>
        {children}
    </div>
}