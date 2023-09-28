export interface appInterface {
  id: string;
  type: string;
  attributes: {
    coverImage: string;
    personalInformation: {
      firstName: {
        internalUse: boolean;
        show: boolean;
      };
      lastName: {
        internalUse: boolean;
        show: boolean;
      };
      emailId: {
        internalUse: boolean;
        show: boolean;
      };
      phoneNumber: {
        internalUse: boolean;
        show: boolean;
      };
      nationality: {
        internalUse: boolean;
        show: boolean;
      };
      currentResidence: {
        internalUse: boolean;
        show: boolean;
      };
      idNumber: {
        internalUse: boolean;
        show: boolean;
      };
      dateOfBirth: {
        internalUse: boolean;
        show: boolean;
      };
      gender: {
        internalUse: boolean;
        show: boolean;
      };
      personalQuestions: [
        {
          id: string;
          type: "Paragraph";
          question: "string";
          choices: [string];
          maxChoice: number;
          disqualify: boolean;
          other: boolean;
        }
      ];
    };
    profile: {
      education: {
        mandatory: boolean;
        show: boolean;
      };
      experience: {
        mandatory: boolean;
        show: boolean;
      };
      resume: {
        mandatory: boolean;
        show: boolean;
      };
      profileQuestions: [
        {
          id: string;
          type: "Paragraph";
          question: string;
          choices: [string];
          maxChoice: number;
          disqualify: boolean;
          other: boolean;
        }
      ];
    };
    customisedQuestions: [
      {
        id: string;
        type: "Paragraph";
        question: string;
        choices: [string];
        maxChoice: 0;
        disqualify: boolean;
        other: boolean;
      }
    ];
  };
}

export const initialState: appInterface = {
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "applicationForm",
    attributes: {
      coverImage: "http://rabbani.com",
      personalInformation: {
        firstName: {
          internalUse: false,
          show: true,
        },
        lastName: {
          internalUse: false,
          show: true,
        },
        emailId: {
          internalUse: false,
          show: true,
        },
        phoneNumber: {
          internalUse: false,
          show: true,
        },
        nationality: {
          internalUse: false,
          show: true,
        },
        currentResidence: {
          internalUse: false,
          show: true,
        },
        idNumber: {
          internalUse: false,
          show: true,
        },
        dateOfBirth: {
          internalUse: false,
          show: true,
        },
        gender: {
          internalUse: false,
          show: true,
        },
        personalQuestions: [
          {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
      },
      profile: {
        education: {
          mandatory: true,
          show: false,
        },
        experience: {
          mandatory: true,
          show: true,
        },
        resume: {
          mandatory: true,
          show: true,
        },
        profileQuestions: [
          {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
      },
      customisedQuestions: [
        {
          id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
      ],
    },
}

