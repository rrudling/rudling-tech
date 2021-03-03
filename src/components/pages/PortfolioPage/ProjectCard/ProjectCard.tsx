import React, { useState } from 'react';
import classes from './projectCard.module.scss';

import LinkIcon from '../../../common/icons/VisitIcon';

import firebaseIcon from '../../../../resources/icons/firebase.svg';
import cssIcon from '../../../../resources/icons/css3.svg';
import htmlIcon from '../../../../resources/icons/html5.svg';
import javascriptIcon from '../../../../resources/icons/javascript.svg';
import typescriptIcon from '../../../../resources/icons/typescript.svg';
import sassIcon from '../../../../resources/icons/sass.svg';
import reactIcon from '../../../../resources/icons/react.svg';
import javaIcon from '../../../../resources/icons/java.svg';
import pythonIcon from '../../../../resources/icons/python.svg';

interface Props {
    name: string,
    text: string,
    mainLink: string,
    demoLink?: string,
    gitHubLink?: string,
    image: string,
    technologies: Array<string>
}

interface ObjectLiteral {
    [key: string]: any;
}

const ProjectCard: React.FC<Props> = ({
    name,
    text,
    mainLink,
    demoLink,
    gitHubLink,
    image,
    technologies
}) => {
    const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);

    const technologiesInfo : ObjectLiteral = {
        "firebase": {
            "icon": firebaseIcon,
            "tooltipText": "Learn more about firebase",
            "tooltipLink": "https://en.wikipedia.org/wiki/Firebase"
        },
        "css": {
            "icon": cssIcon,
            "tooltipText": "Learn more about CSS",
            "tooltipLink": "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
        },
        "html": {
            "icon": htmlIcon,
            "tooltipText": "Learn more about HTML",
            "tooltipLink": "https://en.wikipedia.org/wiki/HTML"
        },
        "js": {
            "icon": javascriptIcon,
            "tooltipText": "Learn more about Javascript",
            "tooltipLink": "https://en.wikipedia.org/wiki/Javascript"
            },
        "ts": {
            "icon": typescriptIcon,
            "tooltipText": "Learn more about Typescript",
            "tooltipLink": "https://en.wikipedia.org/wiki/TypeScript"
        },
        "sass": {
            "icon": sassIcon,
            "tooltipText": "Learn more about Sass",
            "tooltipLink": "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
        },
        "react": {
            "icon": reactIcon,
            "tooltipText": "Learn more about React",
            "tooltipLink": "https://en.wikipedia.org/wiki/React_(JavaScript_library)"
        },
        "java": {
            "icon": javaIcon,
            "tooltipText": "Learn more about Java",
            "tooltipLink": "https://en.wikipedia.org/wiki/Java_(programming_language)"
        },
        "python": {
            "icon": pythonIcon,
            "tooltipText": "Learn more about Python",
            "tooltipLink": "https://en.wikipedia.org/wiki/Python_(programming_language)"
        }
    }

    return (
        <div
            className={classes.projectCardContainer}
            onMouseEnter = {() => setShowProjectDetails(true)}
            onMouseLeave = {() => setShowProjectDetails(false)}
        >
            <div
                className={showProjectDetails
                    ? [classes.ProjectCard, classes.activateBlur].join(" ")
                    : classes.ProjectCard
                }
                style = {{
                    "backgroundImage": `url(${image})`
                }}
            >
                <div
                    className = {showProjectDetails
                        ? classes.detailsContainer
                        : [classes.detailsContainer, classes.hideDetails].join(" ")
                    }
                />
            </div>



            <div className={showProjectDetails
                ? classes.technologiesContainer
                : [classes.technologiesContainer, classes.hideBadges].join(" ")
            }>
                {
                    technologies.map(technology => (
                        <div
                            className = {classes.technologyBadge}
                            onClick = {() => {
                                window.open(technologiesInfo[technology].tooltipLink, '_blank');
                            }}
                        >
                            <img src={technologiesInfo[technology].icon} alt="" />
                            {/* TODO: Make sure that the left most tooltip doesn't get hidden by parent */}
                            <span className={classes.tooltiptext}>{technologiesInfo[technology].tooltipText}</span>
                        </div>
                    ))
                }
            </div>



            <div
                className={classes.mainLinkButton}
                onClick = {() => {
                    window.open(mainLink, '_blank');
                }}
            >
                <LinkIcon
                    iconColor= "#fff"
                    iconWidth= "30px"
                />
            </div>
        </div>
    )
}

export default ProjectCard;