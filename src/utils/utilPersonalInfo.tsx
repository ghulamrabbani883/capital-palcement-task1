import { updateData } from "../app/appSlice";
import { AppDispatch } from "../app/store";

export const handlePersonalInfoToggle = (type: string, data:any, dispatch:AppDispatch )=>{
    if (type === "phoneNumber") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  phoneNumber: {
                    ...data.data.attributes.personalInformation.phoneNumber,
                    show: !data.data.attributes.personalInformation.phoneNumber.show,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "nationality") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  nationality: {
                    ...data.data.attributes.personalInformation.nationality,
                    show: !data.data.attributes.personalInformation.nationality.show,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "currentResidence") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  currentResidence: {
                    ...data.data.attributes.personalInformation.currentResidence,
                    show: !data.data.attributes.personalInformation.currentResidence.show,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "idNumber") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  idNumber: {
                    ...data.data.attributes.personalInformation.idNumber,
                    show: !data.data.attributes.personalInformation.idNumber.show,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "dateOfBirth") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  dateOfBirth: {
                    ...data.data.attributes.personalInformation.dateOfBirth,
                    show: !data.data.attributes.personalInformation.dateOfBirth.show,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "gender") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  gender: {
                    ...data.data.attributes.personalInformation.gender,
                    show: !data.data.attributes.personalInformation.gender.show,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
}

export const handlePersonalInfoCheck = (type: string, data:any, dispatch:AppDispatch )=>{
    if (type === "phoneNumber") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  phoneNumber: {
                    ...data.data.attributes.personalInformation.phoneNumber,
                    internalUse: !data.data.attributes.personalInformation.phoneNumber.internalUse,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "nationality") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  nationality: {
                    ...data.data.attributes.personalInformation.nationality,
                    internalUse: !data.data.attributes.personalInformation.nationality.internalUse,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "currentResidence") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  currentResidence: {
                    ...data.data.attributes.personalInformation.currentResidence,
                    internalUse: !data.data.attributes.personalInformation.currentResidence.internalUse,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "idNumber") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  idNumber: {
                    ...data.data.attributes.personalInformation.idNumber,
                    internalUse: !data.data.attributes.personalInformation.idNumber.internalUse,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "dateOfBirth") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  dateOfBirth: {
                    ...data.data.attributes.personalInformation.dateOfBirth,
                    internalUse: !data.data.attributes.personalInformation.dateOfBirth.internalUse,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
    if (type === "gender") {
        const newData = {
            ...data,
            data: {
              ...data.data,
              attributes: {
                ...data.data.attributes,
                personalInformation: {
                  ...data.data.attributes.personalInformation,
                  gender: {
                    ...data.data.attributes.personalInformation.gender,
                    internalUse: !data.data.attributes.personalInformation.gender.internalUse,
                  },
                },
              },
            },
          };
          // console.log(newData);
          dispatch(updateData(newData));
    }
}