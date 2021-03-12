import React, {useState} from 'react';
import classes from './portfolioPage.module.scss';
import { projects, technologiesInfo, Project } from "./portfolioUtilities";

// === COMPONENTS ===
import ThreeDimButton from "../../common/Buttons/ThreeDimButton/ThreeDimButton";
import ProjectCard from "./ProjectCard/ProjectCard";
import MultipleChoiceButtonPrimary from "../../common/Buttons/MultipleChoiceButtonPrimary/MultipleChoiceButtonPrimary";
import MultipleChoiceButtonSecondary from "../../common/Buttons/MultipleChoiceButtonSecondary/MultipleChoiceButtonSecondary";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
// ==================

interface typesDict {
    [key: string]: any;
}

const PortfolioPage: React.FC = () => {
    // TODO: Update project texts

    const changeProjectType = (newProjectType : string) => {
        if (selectedProjectType !== newProjectType) {
            setHideMobileProjectsMenu(true);
        }

        let tempProjectTypes = [...projectTypes];

        tempProjectTypes.forEach(option => {
            option.isSelected = option.type === newProjectType;
        })

        setProjectTypes(tempProjectTypes);
        setSelectedProjectType(newProjectType);

        let newProjectsToShow = getNewProjectsToShow("", newProjectType,true);
        setProjectsToShow(newProjectsToShow);

        setTimeout(() => setHideMobileProjectsMenu(false), 200);
    }

    const changeCurrentProject = (newCurrentProject : string) => {
        setProjectsToShow(getNewProjectsToShow(newCurrentProject));
        setSelectedProject(projects[newCurrentProject]);
    }

    const getNewProjectsToShow = (newCurrentProject : string, _selectedProjectType=selectedProjectType, setWithIdx=false) => {
        let tempProjectsToShow : Array<typesDict> = [],
            projectIdx = 0;

        Object.keys(projects).forEach(projectKey => {
            let project = projects[projectKey]
            if (project.type === _selectedProjectType) {
                let optionObject : typesDict = {};
                optionObject["type"] = project.name;
                if (setWithIdx) {
                    if (projectIdx === 0) {
                        setSelectedProject(project);
                        optionObject["isSelected"] = true;
                    } else {
                        optionObject["isSelected"] = false;
                    }

                } else {
                    optionObject["isSelected"] = project.name === newCurrentProject;
                }

                tempProjectsToShow.push(optionObject);
                projectIdx++;
            }
        })
        return tempProjectsToShow;
    }

    const [showAllDetails, setShowAllDetails] = useState<boolean>(window.innerWidth < 535);
    const [projectTypes, setProjectTypes] = useState<Array<typesDict>>([
        {
            "type": "Personal",
            "isSelected": true
        },
        {
            "type": "Professional",
            "isSelected": false
        },
        {
            "type": "School",
            "isSelected": false
        }
    ]);
    const [selectedProjectType, setSelectedProjectType] = useState<string>("Personal");
    const [selectedProject, setSelectedProject] = useState<Project>(projects["Learn AI"]);
    const [projectsToShow, setProjectsToShow] = useState<Array<typesDict>>(getNewProjectsToShow("Learn AI"));
    const [hideMobileProjectsMenu, setHideMobileProjectsMenu] = useState<boolean>(false);

    window.addEventListener("resize", () => {
        setShowAllDetails(window.innerWidth < 535);
    })

    return (
        <div className={classes.PortfolioPage}>
            <p>
                On this page you will find a selection
                of projects that I have been working
                on during my years as a developer.
            </p>
            <div className={classes.projectsContainer}>
                {
                    Object.keys(projects).map(projectKey => {
                        let project = projects[projectKey];
                        return (
                            <ProjectCard
                                name={project.name}
                                text={project.text}
                                demoLink={project.demoLink}
                                gitHubLink={project.gitHubLink}
                                mainLink={project.mainLink}
                                image={project.images[0].original}
                                technologies={project.technologies}
                                showAllDetails={showAllDetails}
                                technologiesInfo = {technologiesInfo}
                            />
                        )
                    })
                }
            </div>

            <div className={classes.mobileProjectsContainer}>
                <MultipleChoiceButtonPrimary
                    options = {projectTypes}
                    changeOption = {changeProjectType}
                    extraClass = {classes.projectTypes}
                />

                <div className={
                    hideMobileProjectsMenu
                        ? classes.hideMobileProjectsMenu
                        : classes.mobileProjectsMenu
                }>
                    <MultipleChoiceButtonSecondary
                        options = {projectsToShow}
                        changeOption = {changeCurrentProject}
                        extraClass = {classes.projectTypes}
                    />
                </div>

                <div className={classes.projectInfoContainer}>
                    <p
                        className={classes.longText}
                        dangerouslySetInnerHTML={{__html: selectedProject.textLong}}
                    />
                    <ul>
                        {selectedProject.bullets.map(bullet => (
                            <li dangerouslySetInnerHTML={{__html: bullet}} />
                        ))}
                    </ul>

                    <div style={{"fontWeight":"bolder"}}>Technologies that I used:</div>

                    <div className={classes.technologiesUsedContainer}>
                        {selectedProject.technologies.map(technology => (
                            <div className={classes.technology}>
                                <div className={classes.imageContainer}>
                                    <img src={technologiesInfo[technology].icon} alt={""} />
                                </div>

                                <div>{technology}</div>
                            </div>
                        ))}
                    </div>

                    <ImageCarousel images={selectedProject.images} extraClasses={[classes.imageCarousel]} />

                    <div className={classes.blueButtonsContainer}>
                        {
                            selectedProject.gitHubLink !== undefined ?
                                <ThreeDimButton
                                    text="GitHub"
                                    onClickHandler={() => window.open(selectedProject.gitHubLink, '_blank')}
                                    extraClasses={[classes.gitHubButton]}
                                /> : null
                        }

                        {
                            selectedProject.demoLink !== undefined ?
                                <ThreeDimButton
                                    text="Demo"
                                    onClickHandler={() => window.open(selectedProject.demoLink, '_blank')}
                                    extraClasses={[classes.demoButton]}
                                /> : null
                        }
                    </div>

                    {/*<div className={classes.learnMoreButtonContainer}>*/}
                    {/*    <ThreeDimButton*/}
                    {/*        text="Learn more"*/}
                    {/*        onClickHandler={() => history.push("/")}*/}
                    {/*        color = "gray"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;