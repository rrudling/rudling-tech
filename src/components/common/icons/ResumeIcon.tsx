import React from 'react';

interface Props {
    iconColor: string,
    iconWidth: string
}

const ResumeIcon : React.FC<Props> = ({iconColor, iconWidth}) => {
    return (
        <svg 
            version="1.1" 
            x="0px" 
            y="0px"
            viewBox="0 0 390.2 512" 
            style = {{
                "fill": iconColor,
                "width": iconWidth
            }}
        >
            <path d="M134.2,394.3v101.2c0,14.7-17.8,22.1-28.2,11.7L4.9,406c-10.5-10.6-2.8-28.2,11.7-28.2h101.2
            C126.8,377.8,134.2,385.2,134.2,394.3z M390.2,49.5v412.9c0,27.4-22.2,49.5-49.5,49.5h-176c-9.1,0-16.5-7.4-16.5-16.6
            c0.1-15.2,0-46.3,0-111.6c0-11-8.9-20-20-20c-65.3,0-96.4-0.1-111.6,0c-9.2,0-16.6-7.4-16.6-16.5V49.5C0,22.2,22.2,0,49.6,0h291.1
            C368,0,390.2,22.2,390.2,49.5z M134.7,132.9l33.6,33.6c6.4,6.5,16.9,6.4,23.4,0l81-81c6.5-6.4,6.5-16.9,0-23.4
            c-6.4-6.5-16.9-6.5-23.4,0l-69.4,69.4L158,109.6c-6.4-6.4-16.9-6.4-23.4,0C128.2,116,128.2,126.5,134.7,132.9z M304.5,400.5
            c0-9.1-7.4-16.5-16.5-16.5h-96c-9.1,0-16.5,7.4-16.5,16.5c0,9.1,7.4,16.5,16.5,16.5h96C297.2,417,304.5,409.6,304.5,400.5z
            M304.5,315.9c0-9.1-7.4-16.5-16.5-16.5H101.2c-9.1,0-16.5,7.4-16.5,16.5s7.4,16.5,16.5,16.5H288C297.2,332.4,304.5,325,304.5,315.9
            z M304.5,231.2c0-9.1-7.4-16.5-16.5-16.5H101.2c-9.1,0-16.5,7.4-16.5,16.5c0,9.1,7.4,16.5,16.5,16.5H288
            C297.2,247.7,304.5,240.3,304.5,231.2z"/>
        </svg>
    )
}

export default ResumeIcon;