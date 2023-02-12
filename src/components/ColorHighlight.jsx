const ColorHighlight = ({ bgColor, shift, active }) => {
    const classNames = ['react-calendar__month-view__days__day']
    return (
        <div style={{
            opacity: '0'
        }} className={active ? 'highlightsDisplayNone' : ''} >
            <span
                style={{
                    width: '42%',
                    height: '50%',
                    position: 'absolute',
                    zIndex: '0',
                    backgroundColor: `${bgColor}`,
                    display: 'inline-block',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                }}
            ></span >
            {/* {classNames.some(className => document.body.classList.contains(className)) && (
                <span style={{
                    width: '100%',
                    height: '10%',
                    position: 'absolute',
                    zIndex: '0',
                    backgroundColor: `${bgColor}`,
                    display: 'inline-block',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                }} className='react-calendar__month-view__days__day'
                >
                    {shift}
                </span>
            )} */}

            <span style={{
                width: '100%',
                height: '10%',
                position: 'absolute',
                zIndex: '0',
                display: 'inline-block',
                bottom: '12%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#ffffffae'
            }} 
            >
                {shift}
            </span>

        </div>
    )
}

export default ColorHighlight
