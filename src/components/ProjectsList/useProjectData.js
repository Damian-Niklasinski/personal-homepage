import { useEffect, useState } from "react";

const gitHubAPI = "https://api.github.com/users/Damian-Niklasinski/repos";

const useProjectData = () => {
  const [projectData, setProjectData] = useState({
    status: "pending",
    data: null,
  });

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch(gitHubAPI);

        if (!response.ok) {
          throw new Error();
        }

        const responseParsed = await response.json();

        setProjectData({
          status: "success",
          data: responseParsed,
        });
      } catch (error) {
        setProjectData({ status: "error" });
      }
    }, 2000);
  }, []);

  return { projectData };
};

export default useProjectData;
