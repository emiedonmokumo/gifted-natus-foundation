export const SlideButton = () =>{
    return (
        <div className="flex">
            <button><img src="/Previous button.png" alt="" /></button>
            <button><img src="/Next button.png" alt="" /></button>
        </div>
    )
}

export const NextButton = ({ onClick }: { onClick: any }) =>{
    return (
        <button><img src="/Next button.png" className="w-8" alt="" onClick={onClick}/></button>
    )
}
export const PreviousButton = ({ onClick }: { onClick: any }) =>{
    return (
        <button><img src="/Previous button.png" className="w-8" alt="" onClick={onClick}/></button>
    )
}