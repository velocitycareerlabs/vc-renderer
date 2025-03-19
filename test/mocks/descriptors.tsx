import { DisplayDescriptors } from '../../src/types';

export const DESCRIPTORS: DisplayDescriptors = {
  'AssessmentV1.1': {
    title: {
      path: ['$.authority.name', '$.credentialSubject.authority.name'],
      schema: {},
      fallback: '-',
    },
    subtitle: {
      path: ['$.name', '$.credentialSubject.name'],
      schema: {},
      fallback: '-',
    },
    summary_detail: {
      path: ['$.assessmentDate', '$.credentialSubject.assessmentDate'],
      schema: {},
      fallback: '-',
    },
    description: {
      fallback: '-',
      text: 'Assessment',
    },
    logo: {
      path: ['$.authority.image', '$.credentialSubject.authority.image'],
      schema: {
        format: 'uri',
      },
      fallback: '-',
    },
    properties: [
      {
        label: 'Assessment description',
        path: ['$.description', '$.credentialSubject.description'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'What was assessed',
        path: ['$.assesses', '$.credentialSubject.assesses'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Score',
        path: ['$.score.scoreValue', '$.credentialSubject.score.scoreValue'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Result',
        path: ['$.score.result', '$.credentialSubject.score.result'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Pass or fail',
        path: ['$.score.passFail', '$.credentialSubject.score.passFail'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Score Description',
        path: ['$.score.scoreDescription', '$.credentialSubject.score.scoreDescription'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Score method',
        path: [
          '$.score.scoreMethod.scoreMethodType',
          '$.credentialSubject.score.scoreMethod.scoreMethodType',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Score method details',
        path: [
          '$.score.scoreMethod.scoreMethodDescription',
          '$.credentialSubject.score.scoreMethod.scoreMethodDescription',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Passing score',
        path: [
          '$.score.scoreMethod.passingScore',
          '$.credentialSubject.score.scoreMethod.passingScore',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Assessment level',
        path: ['$.assessmentLevel', '$.credentialSubject.assessmentLevel'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Assessment method',
        path: ['$.assessmentMethod', '$.credentialSubject.assessmentMethod'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Dimension',
        path: [
          '$.assessmentDimensions[*].name',
          '$.credentialSubject.assessmentDimensions[*].name',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Description',
        path: [
          '$.assessmentDimensions[*].description',
          '$.credentialSubject.assessmentDimensions[*].description',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'What was assessed',
        path: [
          '$.assessmentDimensions[*].assesses',
          '$.credentialSubject.assessmentDimensions[*].assesses',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Score',
        path: [
          '$.assessmentDimensions[*].score.scoreValue',
          '$.credentialSubject.assessmentDimensions[*].score.scoreValue',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Result',
        path: [
          '$.assessmentDimensions[*].score.result',
          '$.credentialSubject.assessmentDimensions[*].score.result',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Pass or fail',
        path: [
          '$.assessmentDimensions[*].score.passFail',
          '$.credentialSubject.assessmentDimensions[*].score.passFail',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Score method',
        path: [
          '$.assessmentDimensions[*].score.scoreMethod.scoreMethodType',
          '$.credentialSubject.assessmentDimensions[*].score.scoreMethod.scoreMethodType',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Score method details',
        path: [
          '$.assessmentDimensions[*].score.scoreMethod.scoreMethodDescription',
          '$.credentialSubject.assessmentDimensions[*].score.scoreMethod.scoreMethodDescription',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Passing score',
        path: [
          '$.assessmentDimensions[*].score.scoreMethod.passingScore',
          '$.credentialSubject.assessmentDimensions[*].score.scoreMethod.passingScore',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'First name',
        path: ['$.recipient.givenName', '$.credentialSubject.recipient.givenName'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Middle name',
        path: ['$.recipient.middleName', '$.credentialSubject.recipient.middleName'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Last name',
        path: ['$.recipient.familyName', '$.credentialSubject.recipient.familyName'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Name prefix',
        path: ['$.recipient.namePrefix', '$.credentialSubject.recipient.namePrefix'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Name suffix',
        path: ['$.recipient.nameSuffix', '$.credentialSubject.recipient.nameSuffix'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Learn more about the credential',
        path: ['$.alignment[0].targetUrl', '$.credentialSubject.alignment[0].targetUrl'],
        schema: {
          format: 'uri',
        },
        fallback: '-',
      },
    ],
  },
  'EmailV1.0': {
    title: {
      fallback: '-',
      text: 'Email',
    },
    subtitle: {
      path: ['$.email', '$.credentialSubject.email'],
      schema: {
        format: 'email',
      },
      fallback: '-',
    },
    description: {
      fallback: '-',
      text: 'Email',
    },
  },
  OpenBadgeCredential: {
    title: {
      path: ['$.source.name', '$.credentialSubject.source.name'],
      schema: { type: 'string' },
      fallback: 'Badge',
    },
    subtitle: { text: 'Open Badge' },
    summary_detail: {
      path: ['$.achievement.name', '$.credentialSubject.achievement.name'],
      schema: { type: 'string' },
      fallback: '-',
    },
    description: { text: 'Open Badge' },
    logo: {
      path: ['$.achievement.image.id', '$.credentialSubject.achievement.image.id'],
      schema: { type: 'string', format: 'uri' },
    },
    properties: [
      {
        label: '',
        path: [
          '$.achievement.image.id',
          '$.credentialSubject.achievement.image.id',
          '$.image.id',
          '$.credentialSubject.image.id',
        ],
        schema: { type: 'string' },
      },
      {
        label: 'Name or identifier',
        path: ['$.identifier.identityHash', '$.credentialSubject.identifier.identityHash'],
        schema: { type: 'string' },
      },
      {
        label: 'Achievement type',
        path: [
          '$.achievement.achievementType',
          '$.credentialSubject.achievement.achievementType',
          '$.achievement.type',
          '$.credentialSubject.achievement.type',
        ],
        schema: { type: 'string' },
      },
      {
        label: 'Description',
        path: ['$.achievement.description', '$.credentialSubject.achievement.description'],
        schema: { type: 'string' },
      },
      {
        label: 'Start',
        path: ['$.activityStartDate', '$.credentialSubject.activityStartDate'],
        schema: { type: 'string', format: 'date-time' },
      },
      {
        label: 'End',
        path: ['$.activityEndDate', '$.credentialSubject.activityEndDate'],
        schema: { type: 'string', format: 'date-time' },
      },
      {
        label: 'License number',
        path: ['$.licenseNumber', '$.credentialSubject.licenseNumber'],
        schema: { type: 'string' },
      },
      { label: 'Role', path: ['$.role', '$.credentialSubject.role'], schema: { type: 'string' } },
      { label: 'Term', path: ['$.term', '$.credentialSubject.term'], schema: { type: 'string' } },
      {
        label: 'Status',
        path: ['$.result[0].status', '$.credentialSubject.result[0].status'],
        schema: { type: 'string' },
      },
      {
        label: 'Credits available',
        path: [
          '$.achievement.creditsAvailable',
          '$.credentialSubject.achievement.creditsAvailable',
        ],
        schema: { type: 'number' },
      },
      {
        label: 'Credits earned',
        path: ['$.creditsEarned', '$.credentialSubject.creditsEarned'],
        schema: { type: 'number' },
      },
      {
        label: 'Result',
        path: ['$.result[0].value', '$.credentialSubject.result[0].value'],
        schema: { type: 'string' },
      },
      {
        label: 'Achieved level',
        path: ['$.result[0].achievedLevel', '$.credentialSubject.result[0].achievedLevel'],
        schema: { type: 'string' },
      },
      {
        label: 'Result description',
        path: [
          '$.result[0].resultDescription',
          '$.credentialSubject.result[0].resultDescription',
          '$.achievement.resultDescription',
          '$.credentialSubject.achievement.resultDescription',
        ],
        schema: { type: 'string' },
      },
      {
        label: 'Field',
        path: ['$.achievement.fieldOfStudy', '$.credentialSubject.achievement.fieldOfStudy'],
        schema: { type: 'string' },
      },
      {
        label: 'Code',
        path: ['$.achievement.humanCode', '$.credentialSubject.achievement.humanCode'],
        schema: { type: 'string' },
      },
      {
        label: 'Specialization',
        path: ['$.achievement.specialization', '$.credentialSubject.achievement.specialization'],
        schema: { type: 'string' },
      },
      {
        label: 'Version',
        path: ['$.achievement.version', '$.credentialSubject.achievement.version'],
        schema: { type: 'string' },
      },
      {
        label: 'Achievement criteria',
        path: [
          '$.achievement.criteria.narrative',
          '$.credentialSubject.achievement.criteria.narrative',
        ],
        schema: { type: 'string' },
      },
      {
        label: 'Learn more',
        path: [
          '$.achievement.alignment[0].targetUrl',
          '$.credentialSubject.achievement.alignment[0].targetUrl',
        ],
        schema: { type: 'string', format: 'uri' },
      },
    ],
  },
  'EmploymentPastV1.1': {
    title: {
      path: ['$.legalEmployer.name', '$.credentialSubject.legalEmployer.name'],
      schema: {},
      fallback: '-',
    },
    subtitle: {
      path: ['$.role', '$.credentialSubject.role'],
      schema: {},
      fallback: '-',
    },
    summary_detail: {
      path: ['$.place.name', '$.credentialSubject.place.name'],
      schema: {},
      fallback: 'place.addressLocality',
    },
    description: {
      fallback: '-',
      text: 'Past employment position',
    },
    logo: {
      path: ['$.legalEmployer.image', '$.credentialSubject.legalEmployer.image'],
      schema: {
        format: 'uri',
      },
      fallback: '-',
    },
    properties: [
      {
        label: 'Role',
        path: ['$.role', '$.credentialSubject.role'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Role description',
        path: ['$.description', '$.credentialSubject.description'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Start date',
        path: ['$.startDate', '$.credentialSubject.startDate'],
        schema: {
          format: 'date',
        },
        fallback: '-',
      },
      {
        label: 'End date',
        path: ['$.endDate', '$.credentialSubject.endDate'],
        schema: {
          format: 'date',
        },
        fallback: '-',
      },
      {
        label: 'Place of work',
        path: ['$.place.name', '$.credentialSubject.place.name'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'City of work',
        path: ['$.place.addressLocality', '$.credentialSubject.place.addressLocality'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'State or region of work',
        path: ['$.place.addressRegion', '$.credentialSubject.place.addressRegion'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Country of work',
        path: ['$.place.addressCountry', '$.credentialSubject.place.addressCountry'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Employment type',
        path: ['$.employmentType[*]', '$.credentialSubject.employmentType[*]'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'First name',
        path: ['$.recipient.givenName', '$.credentialSubject.recipient.givenName'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Middle name',
        path: ['$.recipient.middleName', '$.credentialSubject.recipient.middleName'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Last name',
        path: ['$.recipient.familyName', '$.credentialSubject.recipient.familyName'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Name prefix',
        path: ['$.recipient.namePrefix', '$.credentialSubject.recipient.namePrefix'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Name suffix',
        path: ['$.recipient.nameSuffix', '$.credentialSubject.recipient.nameSuffix'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Learn more about the credential',
        path: ['$.alignment[0].targetUrl', '$.credentialSubject.alignment[0].targetUrl'],
        schema: {
          format: 'uri',
        },
        fallback: '-',
      },
    ],
  },
  'DriversLicenseV1.0': {
    title: {
      path: ['$.name', '$.credentialSubject.name'],
      schema: {},
      fallback: "Driver's License",
    },
    subtitle: {
      path: ['$.authority.name', '$.credentialSubject.authority.name'],
      schema: {},
      fallback: '-',
    },
    summary_detail: {
      path: ['$.identifier', '$.credentialSubject.identifier'],
      schema: {},
      fallback: '-',
    },
    description: {
      fallback: '-',
      text: "Driver's license",
    },
    logo: {
      path: ['$.authority.image', '$.credentialSubject.authority.image'],
      schema: {
        format: 'uri',
      },
      fallback: '-',
    },
    properties: [
      {
        label: 'License number',
        path: ['$.identifier', '$.credentialSubject.identifier'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Country of issuing authority',
        path: [
          '$.authority.place.addressCountry',
          '$.credentialSubject.authority.place.addressCountry',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Region or state of issuing authority',
        path: [
          '$.authority.place.addressRegion',
          '$.credentialSubject.authority.place.addressRegion',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Date issued',
        path: ['$.validity.firstValidFrom', '$.credentialSubject.validity.firstValidFrom'],
        schema: {
          format: 'date',
        },
        fallback: '-',
      },
      {
        label: 'Date renewed',
        path: ['$.validity.validFrom', '$.credentialSubject.validity.validFrom'],
        schema: {
          format: 'date',
        },
        fallback: '-',
      },
      {
        label: 'Valid until',
        path: ['$.validity.validUntil', '$.credentialSubject.validity.validUntil'],
        schema: {
          format: 'date',
        },
        fallback: '-',
      },
      {
        label: 'First name',
        path: ['$.person.givenName', '$.credentialSubject.person.givenName'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Middle name',
        path: ['$.person.additionalName', '$.credentialSubject.person.additionalName'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Last name',
        path: ['$.person.familyName', '$.credentialSubject.person.familyName'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Name prefix',
        path: ['$.person.namePrefix', '$.credentialSubject.person.namePrefix'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Name suffix',
        path: ['$.person.nameSuffix', '$.credentialSubject.person.nameSuffix'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Date of birth',
        path: ['$.person.birthDate', '$.credentialSubject.person.birthDate'],
        schema: {
          format: 'date',
        },
        fallback: '-',
      },
      {
        label: 'Country of birth',
        path: [
          '$.person.birthPlace.addressCountry',
          '$.credentialSubject.person.birthPlace.addressCountry',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Region or state of birth',
        path: [
          '$.person.birthPlace.addressRegion',
          '$.credentialSubject.person.birthPlace.addressRegion',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Place of birth',
        path: [
          '$.person.birthPlace.addressLocality',
          '$.credentialSubject.person.birthPlace.addressLocality',
        ],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Gender',
        path: ['$.person.gender', '$.credentialSubject.person.gender'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Street address',
        path: ['$.streetAddress', '$.credentialSubject.streetAddress'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Address locality',
        path: ['$.addressLocality', '$.credentialSubject.addressLocality'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Region or state',
        path: ['$.addressRegion', '$.credentialSubject.addressRegion'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Postal code',
        path: ['$.postCode', '$.credentialSubject.postCode'],
        schema: {},
        fallback: '-',
      },
      {
        label: 'Country',
        path: ['$.addressCountry', '$.credentialSubject.addressCountry'],
        schema: {},
        fallback: '-',
      },
    ],
  },
  'PhoneV1.0': {
    title: {
      fallback: '-',
      text: 'Phone number',
    },
    subtitle: {
      path: ['$.phone', '$.credentialSubject.phone'],
      schema: {},
      fallback: '-',
    },
    description: {
      fallback: '-',
      text: 'Phone',
    },
  },
};
