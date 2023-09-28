import { updateData } from "../app/appSlice";
import { AppDispatch } from "../app/store";

export const handleProfileToggle = (type: string, data:any, dispatch:AppDispatch )=>{
    if (type === "education") {
        const newData = {
          ...data,
          data: {
            ...data.data,
            attributes: {
              ...data.data.attributes,
              profile: {
                ...data.data.attributes.profile,
                education: {
                  ...data.data.attributes.profile.education,
                  show: !data.data.attributes.profile.education.show,
                },
              },
            },
          },
        };
        // console.log(newData);
        dispatch(updateData(newData));
      }
      if (type === "resume") {
        const newData = {
          ...data,
          data: {
            ...data.data,
            attributes: {
              ...data.data.attributes,
              profile: {
                ...data.data.attributes.profile,
                resume: {
                  ...data.data.attributes.profile.resume,
                  show: !data.data.attributes.profile.resume.show,
                },
              },
            },
          },
        };
        // console.log(newData);
        dispatch(updateData(newData));
      }
      if (type === "experience") {
        const newData = {
          ...data,
          data: {
            ...data.data,
            attributes: {
              ...data.data.attributes,
              profile: {
                ...data.data.attributes.profile,
                experience: {
                  ...data.data.attributes.profile.experience,
                  show: !data.data.attributes.profile.experience.show,
                },
              },
            },
          },
        };
        // console.log(newData);
        dispatch(updateData(newData));
      }
}

export const handleProfileCheck = (type:string, data:any, dispatch:AppDispatch)=>{
  if (type === "education") {
    const newData = {
      ...data,
      data: {
        ...data.data,
        attributes: {
          ...data.data.attributes,
          profile: {
            ...data.data.attributes.profile,
            education: {
              ...data.data.attributes.profile.education,
              mandatory: !data.data.attributes.profile.education.mandatory,
            },
          },
        },
      },
    };
    // console.log(newData);
    dispatch(updateData(newData));
  }
  if (type === "resume") {
    const newData = {
      ...data,
      data: {
        ...data.data,
        attributes: {
          ...data.data.attributes,
          profile: {
            ...data.data.attributes.profile,
            resume: {
              ...data.data.attributes.profile.resume,
              mandatory: !data.data.attributes.profile.resume.mandatory,
            },
          },
        },
      },
    };
    // console.log(newData);
    dispatch(updateData(newData));
  }
  if (type === "experience") {
    const newData = {
      ...data,
      data: {
        ...data.data,
        attributes: {
          ...data.data.attributes,
          profile: {
            ...data.data.attributes.profile,
            experience: {
              ...data.data.attributes.profile.experience,
              mandatory: !data.data.attributes.profile.experience.mandatory,
            },
          },
        },
      },
    };
    // console.log(newData);
    dispatch(updateData(newData));
  }
}
