import { useEffect, useState } from "react";

export const getSkills = async () => {
    const response = await fetch("/personal-homepage/skills.json");

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json();
};

export const useSkills = () => {
    const [skills, setSkills] = useState({learnedSkills: [], iWantToLearnSkills: []});

    useEffect(() => {
        getSkills()
        .then(data => setSkills(data))
    }, []);

    return skills;
};

export default useSkills;