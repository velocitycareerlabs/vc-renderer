/* eslint-disable max-len */
export const CREDENTIALS = [
  {
    id: '6703a5192f771a68797aceb1',
    type: ['AssessmentV1.1', 'VelocityNetworkLayer1Credential', 'VerifiableCredential'],
    did: 'did:velocity:v2:0xf0f92c5eb16d8e112531987d7b5abb1e5cb5ebae:151097453948074:1950',
    auth0UserId: 'auth0|66f40b9cd151bbe59dd8ac9b',
    userDid:
      'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    credentialStatus: {
      type: 'VelocityRevocationListJan2021',
      id: 'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0xF0f92c5eb16d8E112531987D7B5abB1e5cb5eBAE&listId=73687611903191&index=5893',
    },
    issuer: {
      id: 'did:ion:EiBMsw27IKRYIdwUOfDeBd0LnWVeG2fPxxJi9L1fvjM20g',
    },
    contentHash: {
      type: 'VelocityContentHash2020',
      value: '4f8af8d532d0b1fd6798990cf8fe2808310dbd252a6080002c1a2034202a2f10',
    },
    credentialSchema: {
      type: 'JsonSchemaValidator2018',
      id: 'https://devlib.velocitynetwork.foundation/schemas/assessment-v1.1.schema.json',
    },
    vnfProtocolVersion: 2,
    context: [
      'https://www.w3.org/2018/credentials/v1',
      'https://devlib.velocitynetwork.foundation/contexts/credential-extensions-2022.jsonld.json',
    ],
    credentialSubject: {
      type: 'Assessment',
      '@context': ['https://devlib.velocitynetwork.foundation/contexts/layer1-v1.1.jsonld.json'],
      authority: {
        name: 'University of Massachusetts',
        identifier: 'did:ion:EiBMsw27IKRYIdwUOfDeBd0LnWVeG2fPxxJi9L1fvjM20g',
        place: {
          addressLocality: 'Los Angeles',
          addressRegion: 'US-CA',
          addressCountry: 'US',
          type: 'Place',
        },
        type: 'Organization',
      },
      name: 'Leadership',
      assesses: 'Leadership capabilities',
      description:
        "Korn Ferry's leadership assessment takes a contemporary, whole-person view of behavior.",
      score: {
        scoreMethod: {
          scoreMethodType: 'NormReferenced',
          scoreMethodDescription: 'Korn Ferry global norm 2018.',
          passingScore: '80',
          type: 'ScoreMethod',
        },
        scoreValue: '8.9',
        result: 'Normal color vision',
        type: 'Score',
      },
      assessmentLevel: 'Test Level',
      assessmentDate: '2018-01-09',
      assessmentMethod: 'Written',
      assessmentDimensions: [
        {
          name: 'Credibility',
          description: "The degree of consistency between a person's words and actions.",
          assesses: 'Test assesses 1',
          score: {
            scoreMethod: {
              scoreMethodType: 'NormReferenced',
              scoreMethodDescription: 'Korn Ferry global norm 2018. Norm size: 25,000.',
              passingScore: '80',
              type: 'ScoreMethod',
            },
            scoreValue: '7.2',
            result: 'Test result 1',
            type: 'Score',
          },
          assessmentDate: '2011-09-01',
          assessmentMethod: 'Written',
          type: 'AssessmentDimension',
        },
        {
          name: 'Assertiveness',
          description: 'The assertiveness of a person',
          assesses: 'Test assesses 2',
          score: {
            scoreMethod: {
              scoreMethodDescription:
                'Korn Ferry global norm 2018. Norm size: 25,000.  score range 1-10.',
              type: 'ScoreMethod',
            },
            scoreValue: '9.1',
            result: 'Test result 2',
            type: 'Score',
          },
          assessmentDate: '2022-08-31',
          assessmentMethod: 'Read',
          type: 'AssessmentDimension',
        },
        {
          name: 'Dimension 3',
          description: 'The description for dimenstion 3',
          assesses: 'Test assesses 3',
          score: {
            scoreMethod: {
              scoreMethodDescription: 'Korn Ferry global norm 3',
              type: 'ScoreMethod',
            },
            scoreValue: '3',
            result: 'Test result 3',
            type: 'Score',
          },
          assessmentDate: '2022-12-27',
          assessmentMethod: 'Speak',
          type: 'AssessmentDimension',
        },
      ],
      recipient: {
        givenName: 'Adam',
        familyName: 'Smith',
        type: 'PersonName',
      },
      alignment: [
        {
          type: 'Alignment.Type_1',
          targetName: 'targetName_1: Live Online Skin Course',
          targetUrl:
            'https://credentialfinder.org/credential/20923/Live_Online_Skin_and_Wound_Management_Course',
          targetDescription: 'Test description 1',
          targetFramework: 'Credential Engine_1',
        },
        {
          type: 'Alignment.Type_2',
          targetName: 'targetName_2: Live Online Skin Course',
          targetUrl:
            'https://credentialfinder.org/credential/20923/Live_Online_Skin_and_Wound_Management_Course',
          targetDescription: 'Test description 2',
          targetFramework: 'Credential Engine_2',
        },
        {
          type: 'Alignment.Type_3',
          targetName: 'targetName_3: Live Online Skin Course',
          targetUrl:
            'https://credentialfinder.org/credential/20923/Live_Online_Skin_and_Wound_Management_Course',
          targetDescription: 'Test description 3',
          targetFramework: 'Credential Engine_3',
        },
      ],
      id: 'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    },
    jti: 'did:velocity:v2:0xf0f92c5eb16d8e112531987d7b5abb1e5cb5ebae:151097453948074:1950',
    iss: 'did:ion:EiBMsw27IKRYIdwUOfDeBd0LnWVeG2fPxxJi9L1fvjM20g',
    encodedCredential:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6dmVsb2NpdHk6djI6MHhmMGY5MmM1ZWIxNmQ4ZTExMjUzMTk4N2Q3YjVhYmIxZTVjYjVlYmFlOjE1MTA5NzQ1Mzk0ODA3NDoxOTUwI2tleS0xIn0.eyJ2YyI6eyJ0eXBlIjpbIkFzc2Vzc21lbnRWMS4xIiwiVmVsb2NpdHlOZXR3b3JrTGF5ZXIxQ3JlZGVudGlhbCIsIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImlzc3VlciI6eyJpZCI6ImRpZDppb246RWlCTXN3MjdJS1JZSWR3VU9mRGVCZDBMbldWZUcyZlB4eEppOUwxZnZqTTIwZyIsIm5hbWUiOiJUZXN0In0sImNvbnRlbnRIYXNoIjp7InR5cGUiOiJWZWxvY2l0eUNvbnRlbnRIYXNoMjAyMCIsInZhbHVlIjoiNGY4YWY4ZDUzMmQwYjFmZDY3OTg5OTBjZjhmZTI4MDgzMTBkYmQyNTJhNjA4MDAwMmMxYTIwMzQyMDJhMmYxMCJ9LCJsaW5rQ29kZUNvbW1pdG1lbnQiOnsidHlwZSI6IlZlbG9jaXR5Q3JlZGVudGlhbExpbmtDb2RlQ29tbWl0bWVudDIwMjIiLCJ2YWx1ZSI6IkVpQU1DL2RUTUhhZXJQT3FEK3g0OWkwSWhmdFJYNjNtRFVtOVZzSjhUdDNaNXc9PSJ9LCJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vZGV2bGliLnZlbG9jaXR5bmV0d29yay5mb3VuZGF0aW9uL2NvbnRleHRzL2NyZWRlbnRpYWwtZXh0ZW5zaW9ucy0yMDIyLmpzb25sZC5qc29uIl0sImlkIjoiZGlkOnZlbG9jaXR5OnYyOjB4ZjBmOTJjNWViMTZkOGUxMTI1MzE5ODdkN2I1YWJiMWU1Y2I1ZWJhZToxNTEwOTc0NTM5NDgwNzQ6MTk1MCIsImNyZWRlbnRpYWxTY2hlbWEiOnsidHlwZSI6Ikpzb25TY2hlbWFWYWxpZGF0b3IyMDE4IiwiaWQiOiJodHRwczovL2RldmxpYi52ZWxvY2l0eW5ldHdvcmsuZm91bmRhdGlvbi9zY2hlbWFzL2Fzc2Vzc21lbnQtdjEuMS5zY2hlbWEuanNvbiJ9LCJjcmVkZW50aWFsU3RhdHVzIjp7InR5cGUiOiJWZWxvY2l0eVJldm9jYXRpb25MaXN0SmFuMjAyMSIsImlkIjoiZXRoZXJldW06MHhEODkwRjJENjBCNDI5ZjllMjU3RkMwQmM1OEVmMjIzNzc3NkREOTFCL2dldFJldm9rZWRTdGF0dXM_YWRkcmVzcz0weEYwZjkyYzVlYjE2ZDhFMTEyNTMxOTg3RDdCNWFiQjFlNWNiNWVCQUUmbGlzdElkPTczNjg3NjExOTAzMTkxJmluZGV4PTU4OTMifSwicmVmcmVzaFNlcnZpY2UiOnsidHlwZSI6IlZlbG9jaXR5TmV0d29ya1JlZnJlc2hTZXJ2aWNlMjAyNCIsImlkIjoiZGlkOmlvbjpFaUJNc3cyN0lLUllJZHdVT2ZEZUJkMExuV1ZlRzJmUHh4Smk5TDFmdmpNMjBnI3ZsYy1pbnNwZWN0b3Itdi0xLTEifSwidm5mUHJvdG9jb2xWZXJzaW9uIjoyLCJjcmVkZW50aWFsU3ViamVjdCI6eyJ0eXBlIjoiQXNzZXNzbWVudCIsImF1dGhvcml0eSI6eyJuYW1lIjoiVW5pdmVyc2l0eSBvZiBNYXNzYWNodXNldHRzIC0gcmVwbGFjZXIiLCJpZGVudGlmaWVyIjoiZGlkOmlvbjpFaUJNc3cyN0lLUllJZHdVT2ZEZUJkMExuV1ZlRzJmUHh4Smk5TDFmdmpNMjBnIiwicGxhY2UiOnsiYWRkcmVzc0xvY2FsaXR5IjoiTG9zIEFuZ2VsZXMiLCJhZGRyZXNzUmVnaW9uIjoiVVMtQ0EiLCJhZGRyZXNzQ291bnRyeSI6IlVTIiwidHlwZSI6IlBsYWNlIn0sInR5cGUiOiJPcmdhbml6YXRpb24ifSwibmFtZSI6IkxlYWRlcnNoaXAgLSByZXBsYWNlciIsImFzc2Vzc2VzIjoiTGVhZGVyc2hpcCBjYXBhYmlsaXRpZXMiLCJkZXNjcmlwdGlvbiI6Iktvcm4gRmVycnkncyBsZWFkZXJzaGlwIGFzc2Vzc21lbnQgdGFrZXMgYSBjb250ZW1wb3JhcnksIHdob2xlLXBlcnNvbiB2aWV3IG9mIGJlaGF2aW9yLiIsInNjb3JlIjp7InNjb3JlTWV0aG9kIjp7InNjb3JlTWV0aG9kVHlwZSI6Ik5vcm1SZWZlcmVuY2VkIiwic2NvcmVNZXRob2REZXNjcmlwdGlvbiI6Iktvcm4gRmVycnkgZ2xvYmFsIG5vcm0gMjAxOC4iLCJwYXNzaW5nU2NvcmUiOiI4MCIsInR5cGUiOiJTY29yZU1ldGhvZCJ9LCJzY29yZVZhbHVlIjoiOC45IiwicmVzdWx0IjoiTm9ybWFsIGNvbG9yIHZpc2lvbiIsInR5cGUiOiJTY29yZSJ9LCJhc3Nlc3NtZW50TGV2ZWwiOiJUZXN0IExldmVsIiwiYXNzZXNzbWVudERhdGUiOiIyMDE4LTAxLTA5IiwiYXNzZXNzbWVudE1ldGhvZCI6IldyaXR0ZW4iLCJhc3Nlc3NtZW50RGltZW5zaW9ucyI6W3sibmFtZSI6IkNyZWRpYmlsaXR5IiwiZGVzY3JpcHRpb24iOiJUaGUgZGVncmVlIG9mIGNvbnNpc3RlbmN5IGJldHdlZW4gYSBwZXJzb24ncyB3b3JkcyBhbmQgYWN0aW9ucy4iLCJhc3Nlc3NlcyI6IlRlc3QgYXNzZXNzZXMgMSIsInNjb3JlIjp7InNjb3JlTWV0aG9kIjp7InNjb3JlTWV0aG9kVHlwZSI6Ik5vcm1SZWZlcmVuY2VkIiwic2NvcmVNZXRob2REZXNjcmlwdGlvbiI6Iktvcm4gRmVycnkgZ2xvYmFsIG5vcm0gMjAxOC4gTm9ybSBzaXplOiAyNSwwMDAuIiwicGFzc2luZ1Njb3JlIjoiODAiLCJ0eXBlIjoiU2NvcmVNZXRob2QifSwic2NvcmVWYWx1ZSI6IjcuMiIsInJlc3VsdCI6IlRlc3QgcmVzdWx0IDEiLCJ0eXBlIjoiU2NvcmUifSwiYXNzZXNzbWVudERhdGUiOiIyMDExLTA5LTAxIiwiYXNzZXNzbWVudE1ldGhvZCI6IldyaXR0ZW4iLCJ0eXBlIjoiQXNzZXNzbWVudERpbWVuc2lvbiJ9LHsibmFtZSI6IkFzc2VydGl2ZW5lc3MiLCJkZXNjcmlwdGlvbiI6IlRoZSBhc3NlcnRpdmVuZXNzIG9mIGEgcGVyc29uIiwiYXNzZXNzZXMiOiJUZXN0IGFzc2Vzc2VzIDIiLCJzY29yZSI6eyJzY29yZU1ldGhvZCI6eyJzY29yZU1ldGhvZERlc2NyaXB0aW9uIjoiS29ybiBGZXJyeSBnbG9iYWwgbm9ybSAyMDE4LiBOb3JtIHNpemU6IDI1LDAwMC4gIHNjb3JlIHJhbmdlIDEtMTAuIiwidHlwZSI6IlNjb3JlTWV0aG9kIn0sInNjb3JlVmFsdWUiOiI5LjEiLCJyZXN1bHQiOiJUZXN0IHJlc3VsdCAyIiwidHlwZSI6IlNjb3JlIn0sImFzc2Vzc21lbnREYXRlIjoiMjAyMi0wOC0zMSIsImFzc2Vzc21lbnRNZXRob2QiOiJSZWFkIiwidHlwZSI6IkFzc2Vzc21lbnREaW1lbnNpb24ifSx7Im5hbWUiOiJEaW1lbnNpb24gMyIsImRlc2NyaXB0aW9uIjoiVGhlIGRlc2NyaXB0aW9uIGZvciBkaW1lbnN0aW9uIDMiLCJhc3Nlc3NlcyI6IlRlc3QgYXNzZXNzZXMgMyIsInNjb3JlIjp7InNjb3JlTWV0aG9kIjp7InNjb3JlTWV0aG9kRGVzY3JpcHRpb24iOiJLb3JuIEZlcnJ5IGdsb2JhbCBub3JtIDMiLCJ0eXBlIjoiU2NvcmVNZXRob2QifSwic2NvcmVWYWx1ZSI6IjMiLCJyZXN1bHQiOiJUZXN0IHJlc3VsdCAzIiwidHlwZSI6IlNjb3JlIn0sImFzc2Vzc21lbnREYXRlIjoiMjAyMi0xMi0yNyIsImFzc2Vzc21lbnRNZXRob2QiOiJTcGVhayIsInR5cGUiOiJBc3Nlc3NtZW50RGltZW5zaW9uIn1dLCJyZWNpcGllbnQiOnsiZ2l2ZW5OYW1lIjoiQWRhbSIsImZhbWlseU5hbWUiOiJTbWl0aCIsInR5cGUiOiJQZXJzb25OYW1lIn0sImFsaWdubWVudCI6W3sidHlwZSI6IkFsaWdubWVudC5UeXBlXzEiLCJ0YXJnZXROYW1lIjoidGFyZ2V0TmFtZV8xOiBMaXZlIE9ubGluZSBTa2luIENvdXJzZSIsInRhcmdldFVybCI6Imh0dHBzOi8vY3JlZGVudGlhbGZpbmRlci5vcmcvY3JlZGVudGlhbC8yMDkyMy9MaXZlX09ubGluZV9Ta2luX2FuZF9Xb3VuZF9NYW5hZ2VtZW50X0NvdXJzZSIsInRhcmdldERlc2NyaXB0aW9uIjoiVGVzdCBkZXNjcmlwdGlvbiAxIiwidGFyZ2V0RnJhbWV3b3JrIjoiQ3JlZGVudGlhbCBFbmdpbmVfMSJ9LHsidHlwZSI6IkFsaWdubWVudC5UeXBlXzIiLCJ0YXJnZXROYW1lIjoidGFyZ2V0TmFtZV8yOiBMaXZlIE9ubGluZSBTa2luIENvdXJzZSIsInRhcmdldFVybCI6Imh0dHBzOi8vY3JlZGVudGlhbGZpbmRlci5vcmcvY3JlZGVudGlhbC8yMDkyMy9MaXZlX09ubGluZV9Ta2luX2FuZF9Xb3VuZF9NYW5hZ2VtZW50X0NvdXJzZSIsInRhcmdldERlc2NyaXB0aW9uIjoiVGVzdCBkZXNjcmlwdGlvbiAyIiwidGFyZ2V0RnJhbWV3b3JrIjoiQ3JlZGVudGlhbCBFbmdpbmVfMiJ9LHsidHlwZSI6IkFsaWdubWVudC5UeXBlXzMiLCJ0YXJnZXROYW1lIjoidGFyZ2V0TmFtZV8zOiBMaXZlIE9ubGluZSBTa2luIENvdXJzZSIsInRhcmdldFVybCI6Imh0dHBzOi8vY3JlZGVudGlhbGZpbmRlci5vcmcvY3JlZGVudGlhbC8yMDkyMy9MaXZlX09ubGluZV9Ta2luX2FuZF9Xb3VuZF9NYW5hZ2VtZW50X0NvdXJzZSIsInRhcmdldERlc2NyaXB0aW9uIjoiVGVzdCBkZXNjcmlwdGlvbiAzIiwidGFyZ2V0RnJhbWV3b3JrIjoiQ3JlZGVudGlhbCBFbmdpbmVfMyJ9XSwiQGNvbnRleHQiOlsiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vY29udGV4dHMvbGF5ZXIxLXYxLjEuanNvbmxkLmpzb24iXSwiaWQiOiJkaWQ6andrOmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lKQ2JuaEpjVkJCVUZCNVJUTk9WVEpFZWpoYVVuaElRVWhJUVc5YVdtRlVlbTk1UnkxT05XMXZhMnBqSWl3aWVTSTZJbVEzYUVoVU5sTnFiVmRPWWtkcFluaHpWbkkzVVRoRVZVMXNiVk5TWTI0NWJHRnlVRzA0UjNoYVRYTWlmUSJ9fSwibmJmIjoxNzI4MjkyMTE3LCJqdGkiOiJkaWQ6dmVsb2NpdHk6djI6MHhmMGY5MmM1ZWIxNmQ4ZTExMjUzMTk4N2Q3YjVhYmIxZTVjYjVlYmFlOjE1MTA5NzQ1Mzk0ODA3NDoxOTUwIiwiaXNzIjoiZGlkOmlvbjpFaUJNc3cyN0lLUllJZHdVT2ZEZUJkMExuV1ZlRzJmUHh4Smk5TDFmdmpNMjBnIiwic3ViIjoiZGlkOmp3azpleUpqY25ZaU9pSnpaV053TWpVMmF6RWlMQ0pyZEhraU9pSkZReUlzSW5naU9pSkNibmhKY1ZCQlVGQjVSVE5PVlRKRWVqaGFVbmhJUVVoSVFXOWFXbUZVZW05NVJ5MU9OVzF2YTJwaklpd2llU0k2SW1RM2FFaFVObE5xYlZkT1lrZHBZbmh6Vm5JM1VUaEVWVTFzYlZOU1kyNDViR0Z5VUcwNFIzaGFUWE1pZlEiLCJpYXQiOjE3MjgyOTIxMTd9.RsEALoTM26XlJgnSEydIWFkroUVfKBx50wBchYG0RAF-Z9TdWIAY1Z8p_XKXa_zVoHMS9hsBwv1gGnc4_kqUYQ',
    createdAt: '2024-10-07T09:08:41.174Z',
    updatedAt: '2024-10-07T09:08:41.174Z',
    linkCodeCommitment: {
      type: 'VelocityCredentialLinkCodeCommitment2022',
      value: 'EiAMC/dTMHaerPOqD+x49i0IhftRX63mDUm9VsJ8Tt3Z5w==',
    },
  },
  {
    id: '6703a4af2f771a68797aceb0',
    type: ['EmailV1.0', 'VelocityNetworkLayer1Credential', 'VerifiableCredential'],
    did: 'did:velocity:v2:0x6256b18921eabd39351ec23f1c94f880604e70e7:202952670074610:9252',
    auth0UserId: 'auth0|66f40b9cd151bbe59dd8ac9b',
    userDid:
      'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    credentialStatus: {
      type: 'VelocityRevocationListJan2021',
      id: 'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0x6256b18921EaBD39351eC23F1C94f880604e70E7&listId=241246928977797&index=6874',
    },
    issuer: {
      id: 'did:ion:EiAehWmpX5mHBuc93SIhPXF8bsEx68G6mPcdIaLNGbozPA',
    },
    contentHash: {
      type: 'VelocityContentHash2020',
      value: '1847c94db0286eed3ddbc8b51f3e02abb02dff2824ecafa593f427fb9b054985',
    },
    credentialSchema: {
      type: 'JsonSchemaValidator2018',
      id: 'https://devlib.velocitynetwork.foundation/schemas/email-v1.0.schema.json',
    },
    vnfProtocolVersion: 2,
    context: [
      'https://www.w3.org/2018/credentials/v1',
      'https://devlib.velocitynetwork.foundation/contexts/credential-extensions-2022.jsonld.json',
    ],
    credentialSubject: {
      type: 'Email',
      '@context': ['https://devlib.velocitynetwork.foundation/contexts/layer1-v1.0.jsonld.json'],
      email: 'adam.smith@example.com',
      id: 'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    },
    jti: 'did:velocity:v2:0x6256b18921eabd39351ec23f1c94f880604e70e7:202952670074610:9252',
    iss: 'did:ion:EiAehWmpX5mHBuc93SIhPXF8bsEx68G6mPcdIaLNGbozPA',
    encodedCredential:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6dmVsb2NpdHk6djI6MHg2MjU2YjE4OTIxZWFiZDM5MzUxZWMyM2YxYzk0Zjg4MDYwNGU3MGU3OjIwMjk1MjY3MDA3NDYxMDo5MjUyI2tleS0xIn0.eyJ2YyI6eyJ0eXBlIjpbIkVtYWlsVjEuMCIsIlZlbG9jaXR5TmV0d29ya0xheWVyMUNyZWRlbnRpYWwiLCJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJpc3N1ZXIiOnsiaWQiOiJkaWQ6aW9uOkVpQWVoV21wWDVtSEJ1YzkzU0loUFhGOGJzRXg2OEc2bVBjZElhTE5HYm96UEEifSwiY29udGVudEhhc2giOnsidHlwZSI6IlZlbG9jaXR5Q29udGVudEhhc2gyMDIwIiwidmFsdWUiOiIxODQ3Yzk0ZGIwMjg2ZWVkM2RkYmM4YjUxZjNlMDJhYmIwMmRmZjI4MjRlY2FmYTU5M2Y0MjdmYjliMDU0OTg1In0sImxpbmtDb2RlQ29tbWl0bWVudCI6eyJ0eXBlIjoiVmVsb2NpdHlDcmVkZW50aWFsTGlua0NvZGVDb21taXRtZW50MjAyMiIsInZhbHVlIjoiRWlBVUZTVjc1KzVGOExWUC9xalVJSDllYmthUzByL3FyUHdHd2w1MTRacWF5QT09In0sIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vY29udGV4dHMvY3JlZGVudGlhbC1leHRlbnNpb25zLTIwMjIuanNvbmxkLmpzb24iXSwiaWQiOiJkaWQ6dmVsb2NpdHk6djI6MHg2MjU2YjE4OTIxZWFiZDM5MzUxZWMyM2YxYzk0Zjg4MDYwNGU3MGU3OjIwMjk1MjY3MDA3NDYxMDo5MjUyIiwiY3JlZGVudGlhbFNjaGVtYSI6eyJ0eXBlIjoiSnNvblNjaGVtYVZhbGlkYXRvcjIwMTgiLCJpZCI6Imh0dHBzOi8vZGV2bGliLnZlbG9jaXR5bmV0d29yay5mb3VuZGF0aW9uL3NjaGVtYXMvZW1haWwtdjEuMC5zY2hlbWEuanNvbiJ9LCJjcmVkZW50aWFsU3RhdHVzIjp7InR5cGUiOiJWZWxvY2l0eVJldm9jYXRpb25MaXN0SmFuMjAyMSIsImlkIjoiZXRoZXJldW06MHhEODkwRjJENjBCNDI5ZjllMjU3RkMwQmM1OEVmMjIzNzc3NkREOTFCL2dldFJldm9rZWRTdGF0dXM_YWRkcmVzcz0weDYyNTZiMTg5MjFFYUJEMzkzNTFlQzIzRjFDOTRmODgwNjA0ZTcwRTcmbGlzdElkPTI0MTI0NjkyODk3Nzc5NyZpbmRleD02ODc0In0sInJlZnJlc2hTZXJ2aWNlIjp7InR5cGUiOiJWZWxvY2l0eU5ldHdvcmtSZWZyZXNoU2VydmljZTIwMjQiLCJpZCI6ImRpZDppb246RWlBZWhXbXBYNW1IQnVjOTNTSWhQWEY4YnNFeDY4RzZtUGNkSWFMTkdib3pQQSNpZGVudGl0eS1jcmVkZW50aWFscy1pc3N1ZXItMSJ9LCJ2bmZQcm90b2NvbFZlcnNpb24iOjIsImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImVtYWlsIjoibnB5dm92YXJ0c2V2YUBnbWFpbC5jb20iLCJ0eXBlIjoiRW1haWwiLCJAY29udGV4dCI6WyJodHRwczovL2RldmxpYi52ZWxvY2l0eW5ldHdvcmsuZm91bmRhdGlvbi9jb250ZXh0cy9sYXllcjEtdjEuMC5qc29ubGQuanNvbiJdLCJpZCI6ImRpZDpqd2s6ZXlKamNuWWlPaUp6WldOd01qVTJhekVpTENKcmRIa2lPaUpGUXlJc0luZ2lPaUpDYm5oSmNWQkJVRkI1UlROT1ZUSkVlamhhVW5oSVFVaElRVzlhV21GVWVtOTVSeTFPTlcxdmEycGpJaXdpZVNJNkltUTNhRWhVTmxOcWJWZE9Za2RwWW5oelZuSTNVVGhFVlUxc2JWTlNZMjQ1YkdGeVVHMDRSM2hhVFhNaWZRIn19LCJuYmYiOjE3MjgyOTIwMTAsImp0aSI6ImRpZDp2ZWxvY2l0eTp2MjoweDYyNTZiMTg5MjFlYWJkMzkzNTFlYzIzZjFjOTRmODgwNjA0ZTcwZTc6MjAyOTUyNjcwMDc0NjEwOjkyNTIiLCJpc3MiOiJkaWQ6aW9uOkVpQWVoV21wWDVtSEJ1YzkzU0loUFhGOGJzRXg2OEc2bVBjZElhTE5HYm96UEEiLCJzdWIiOiJkaWQ6andrOmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lKQ2JuaEpjVkJCVUZCNVJUTk9WVEpFZWpoYVVuaElRVWhJUVc5YVdtRlVlbTk1UnkxT05XMXZhMnBqSWl3aWVTSTZJbVEzYUVoVU5sTnFiVmRPWWtkcFluaHpWbkkzVVRoRVZVMXNiVk5TWTI0NWJHRnlVRzA0UjNoYVRYTWlmUSIsImlhdCI6MTcyODI5MjAxMH0.6CCMtlRxYAtFMe_m1PcEhOMOa9Lf5CrzEEBJhtC6v_ufkufKCKG2YpCmxjjm77YOBQ18QLdYy0k5JdJVza78xg',
    createdAt: '2024-10-07T09:06:55.706Z',
    updatedAt: '2024-10-07T09:06:55.706Z',
    linkCodeCommitment: {
      type: 'VelocityCredentialLinkCodeCommitment2022',
      value: 'EiAUFSV75+5F8LVP/qjUIH9ebkaS0r/qrPwGwl514ZqayA==',
    },
  },
  {
    id: '66fa996429ae2f0cca02ea36',
    type: ['OpenBadgeCredential', 'VelocityNetworkLayer1Credential', 'VerifiableCredential'],
    did: 'did:velocity:v2:0xf0f92c5eb16d8e112531987d7b5abb1e5cb5ebae:151097453948074:2701',
    auth0UserId: 'auth0|66f40b9cd151bbe59dd8ac9b',
    userDid:
      'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    credentialStatus: {
      type: 'VelocityRevocationListJan2021',
      id: 'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0xF0f92c5eb16d8E112531987D7B5abB1e5cb5eBAE&listId=73687611903191&index=1104',
    },
    issuer: {
      id: 'did:ion:EiBMsw27IKRYIdwUOfDeBd0LnWVeG2fPxxJi9L1fvjM20g',
    },
    contentHash: {
      type: 'VelocityContentHash2020',
      value: '53b69c786d4e61d621f3562cc46e593eb192fe25e935129c74af3b6f0f9dd5ba',
    },
    credentialSchema: {
      type: 'JsonSchemaValidator2018',
      id: 'https://devlib.velocitynetwork.foundation/schemas/open-badge-credential.schema.json',
    },
    vnfProtocolVersion: 2,
    context: [
      'https://www.w3.org/2018/credentials/v1',
      'https://devlib.velocitynetwork.foundation/contexts/credential-extensions-2022.jsonld.json',
    ],
    credentialSubject: {
      type: 'AchievementSubject',
      '@context': ['https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json'],
      identifier: [
        {
          type: 'IdentityObject',
          hashed: 'false',
          identityHash: 'Have Name',
          identityType: 'userName',
        },
      ],
      achievement: {
        id: 'ACSD002',
        type: 'Achievement',
        name: 'Residential Electricity',
        achievementType: 'Badge',
        description:
          'A program that prepares individuals to apply technical knowledge and skills to install, operate, maintain, and repair electric apparatus and systems such as residential commercial, and industrial electric-power wiring; and DC and AC motors, controls, and electrical distribution panels.  Includes instruction in the principles of electronics and electrical systems, wiring, power transmission, safety, industrial and household appliances, job estimation, electrical testing and inspection, and applicable codes and standards.',
        criteria: {
          narrative:
            'This credential requires completion of the following courses: 1. Financial Literacy - This course includes the following modules: Creating a Personal or Family Budget Banking Services; Borrowing Basics. 2. NCCER Core: Introduction to Basic Construction Skills - Core: Introduction to Basic Construction Skills prepares individuals for entry-level positions on project sites by providing the basics in safety, hand and power tools, construction math, materials handling, construction drawings, rigging and employability skills. This course includes the following modules: Basic Safety (Basic Site Safety Orientation); Introduction to Construction Math; Introduction to Hand Tools; Introduction to Power Tools; Introduction to Construction Drawings; Basic Communication Skills; Basic Employability Skills; Introduction to Materials Handling. 3. NCCER Craft: Electrical Level 1 - This comprehensive Electrical curriculum prepares learners for a career as skilled professionals in the electrical field. It places strong emphasis on safework practices, while covering applied electrical theory and residential, commercial, and industrial electrical knowledge and skills. This course includes the following modules: Occupational Overview: The Electrical Industry; Safety for Electricians; Introduction to Electrical Circuits; Electrical Theory; Introduction to the National Electrical Code; Device Boxes; Hand Bending; Wireways, Raceways, and Fittings; Conductors and Cables; Basic Electrical Construction Documents; Residential Wiring; Electrical Test Equipment. 4. Residential Electricity Practicum - This course includes the following modules: Planning and Preparing a Residential Wiring Job; Residential Service Entrances and Equipment; Residential Electrical System- Rough-in; Residential Electrical System - Trim-out; Maintaining and Troubleshooting a Residential Electrical Wiring System; Alternative Energy Systems. 5. Workplace Human Relations - The course includes the following modules: Formulas for Career Success; Employability Skills; Workplace Issues; Employee Compensation Components.',
        },
        image: {
          id: 'https://www.velocitynetwork.foundation/wp-content/uploads/2024/08/Residential-Electricity-Badge.jpg',
          type: 'Image',
        },
        alignment: [
          {
            targetName:
              'Arkansas Correctional School District Completion Certificate - Residential Electricity',
            targetUrl:
              'https://credentialfinder.org/credential/88090/Residential_Electricity_Certificate',
            targetDescription: 'Additional information powered by the Credential Registry.',
            targetCode: 'ce-ff4f532b-d2c7-49fe-b07d-cb51e98cb4a2',
            targetFramework: 'Credential Transparency Description Language',
            type: 'Alignment',
          },
        ],
      },
      result: [
        {
          type: 'result',
          resultDescription:
            'This is an entry-level program that prepares participants for employment in the electrical field. Participants learn the basic skills needed to be successful in a modern workplace.',
        },
      ],
      role: 'Member',
      id: 'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    },
    jti: 'did:velocity:v2:0xf0f92c5eb16d8e112531987d7b5abb1e5cb5ebae:151097453948074:2701',
    iss: 'did:ion:EiBMsw27IKRYIdwUOfDeBd0LnWVeG2fPxxJi9L1fvjM20g',
    encodedCredential:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6dmVsb2NpdHk6djI6MHhmMGY5MmM1ZWIxNmQ4ZTExMjUzMTk4N2Q3YjVhYmIxZTVjYjVlYmFlOjE1MTA5NzQ1Mzk0ODA3NDoyNzAxI2tleS0xIn0.eyJ2YyI6eyJ0eXBlIjpbIk9wZW5CYWRnZUNyZWRlbnRpYWwiLCJWZWxvY2l0eU5ldHdvcmtMYXllcjFDcmVkZW50aWFsIiwiVmVyaWZpYWJsZUNyZWRlbnRpYWwiXSwiaXNzdWVyIjp7ImlkIjoiZGlkOmlvbjpFaUJNc3cyN0lLUllJZHdVT2ZEZUJkMExuV1ZlRzJmUHh4Smk5TDFmdmpNMjBnIn0sInJlbGF0ZWRSZXNvdXJjZSI6W3siaWQiOiJodHRwczovL2V0aGVyZXVtLmdpdGh1Yi5pby95ZWxsb3dwYXBlci9wYXBlci5wZGYiLCJuYW1lIjoibXlQREZhdHRhY2giLCJtZWRpYVR5cGUiOiJhcHBsaWNhdGlvbi9wZGYifSx7ImlkIjoiaHR0cHM6Ly9pbWcubG92ZXBpay5jb20vcG5nLzIwMjMwOTI5L3JlZC1nZW9tZXRyaWMtYmFja2dyb3VuZC1jcmVkZW50aWFscy1kZWNvcmF0aW9uLWNlcnRpZmljYXRpb24tYXdhcmRfMjcyODdfd2gxMjAwLnBuZyIsIm1lZGlhVHlwZSI6ImltYWdlL3BuZyJ9LHsiaWQiOiJodHRwczovL2Nkbi53b3JsZHZlY3RvcmxvZ28uY29tL2xvZ29zL2NyZWRlbnRpYWwtZ3JvdXAuc3ZnIiwibWVkaWFUeXBlIjoiaW1hZ2Uvc3ZnK3htbCJ9LHsiaWQiOiJodHRwczovL2V0aGVyZXVtLmdpdGh1Yi5pby95ZWxsb3dwYXBlci8xMjM0NTY3ODkwIiwibWVkaWFUeXBlIjoiYXBwbGljYXRpb24vcGRmIn0seyJpZCI6Imh0dHBzOi8vZXRoZXJldW0uZ2l0aHViLmlvL3llbGxvd3BhcGVyL2ltYWdlLmdpZiIsIm1lZGlhVHlwZSI6ImltYWdlL2dpZiJ9LHsiaWQiOiJodHRwczovL2V0aGVyZXVtLmdpdGh1Yi5pby95ZWxsb3dwYXBlci9jZXJ0aWZpY2F0ZS5qcGciLCJtZWRpYVR5cGUiOiJpbWFnZS9qcGVnIn1dLCJjb250ZW50SGFzaCI6eyJ0eXBlIjoiVmVsb2NpdHlDb250ZW50SGFzaDIwMjAiLCJ2YWx1ZSI6IjUzYjY5Yzc4NmQ0ZTYxZDYyMWYzNTYyY2M0NmU1OTNlYjE5MmZlMjVlOTM1MTI5Yzc0YWYzYjZmMGY5ZGQ1YmEifSwibGlua0NvZGVDb21taXRtZW50Ijp7InR5cGUiOiJWZWxvY2l0eUNyZWRlbnRpYWxMaW5rQ29kZUNvbW1pdG1lbnQyMDIyIiwidmFsdWUiOiJFaUFHc3N2TGxORUtXVFZJVGZ1eFY0VC9xT0VydFZ5eTh3YmN2Tk83ekNYZ1h3PT0ifSwiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczovL2RldmxpYi52ZWxvY2l0eW5ldHdvcmsuZm91bmRhdGlvbi9jb250ZXh0cy9jcmVkZW50aWFsLWV4dGVuc2lvbnMtMjAyMi5qc29ubGQuanNvbiJdLCJpZCI6ImRpZDp2ZWxvY2l0eTp2MjoweGYwZjkyYzVlYjE2ZDhlMTEyNTMxOTg3ZDdiNWFiYjFlNWNiNWViYWU6MTUxMDk3NDUzOTQ4MDc0OjI3MDEiLCJjcmVkZW50aWFsU2NoZW1hIjp7InR5cGUiOiJKc29uU2NoZW1hVmFsaWRhdG9yMjAxOCIsImlkIjoiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vc2NoZW1hcy9vcGVuLWJhZGdlLWNyZWRlbnRpYWwuc2NoZW1hLmpzb24ifSwiY3JlZGVudGlhbFN0YXR1cyI6eyJ0eXBlIjoiVmVsb2NpdHlSZXZvY2F0aW9uTGlzdEphbjIwMjEiLCJpZCI6ImV0aGVyZXVtOjB4RDg5MEYyRDYwQjQyOWY5ZTI1N0ZDMEJjNThFZjIyMzc3NzZERDkxQi9nZXRSZXZva2VkU3RhdHVzP2FkZHJlc3M9MHhGMGY5MmM1ZWIxNmQ4RTExMjUzMTk4N0Q3QjVhYkIxZTVjYjVlQkFFJmxpc3RJZD03MzY4NzYxMTkwMzE5MSZpbmRleD0xMTA0In0sInJlZnJlc2hTZXJ2aWNlIjp7InR5cGUiOiJWZWxvY2l0eU5ldHdvcmtSZWZyZXNoU2VydmljZTIwMjQiLCJpZCI6ImRpZDppb246RWlCTXN3MjdJS1JZSWR3VU9mRGVCZDBMbldWZUcyZlB4eEppOUwxZnZqTTIwZyN2bGMtaW5zcGVjdG9yLXYtMS0xIn0sInZuZlByb3RvY29sVmVyc2lvbiI6MiwiY3JlZGVudGlhbFN1YmplY3QiOnsiaWRlbnRpZmllciI6W3sidHlwZSI6IklkZW50aXR5T2JqZWN0IiwiaGFzaGVkIjoiZmFsc2UiLCJpZGVudGl0eUhhc2giOiJIYXZlIE5hbWUiLCJpZGVudGl0eVR5cGUiOiJ1c2VyTmFtZSJ9XSwidHlwZSI6IkFjaGlldmVtZW50U3ViamVjdCIsImFjaGlldmVtZW50Ijp7ImlkIjoiQUNTRDAwMiIsInR5cGUiOiJBY2hpZXZlbWVudCIsIm5hbWUiOiJSZXNpZGVudGlhbCBFbGVjdHJpY2l0eSIsImFjaGlldmVtZW50VHlwZSI6IkJhZGdlIiwiZGVzY3JpcHRpb24iOiJBIHByb2dyYW0gdGhhdCBwcmVwYXJlcyBpbmRpdmlkdWFscyB0byBhcHBseSB0ZWNobmljYWwga25vd2xlZGdlIGFuZCBza2lsbHMgdG8gaW5zdGFsbCwgb3BlcmF0ZSwgbWFpbnRhaW4sIGFuZCByZXBhaXIgZWxlY3RyaWMgYXBwYXJhdHVzIGFuZCBzeXN0ZW1zIHN1Y2ggYXMgcmVzaWRlbnRpYWwgY29tbWVyY2lhbCwgYW5kIGluZHVzdHJpYWwgZWxlY3RyaWMtcG93ZXIgd2lyaW5nOyBhbmQgREMgYW5kIEFDIG1vdG9ycywgY29udHJvbHMsIGFuZCBlbGVjdHJpY2FsIGRpc3RyaWJ1dGlvbiBwYW5lbHMuICBJbmNsdWRlcyBpbnN0cnVjdGlvbiBpbiB0aGUgcHJpbmNpcGxlcyBvZiBlbGVjdHJvbmljcyBhbmQgZWxlY3RyaWNhbCBzeXN0ZW1zLCB3aXJpbmcsIHBvd2VyIHRyYW5zbWlzc2lvbiwgc2FmZXR5LCBpbmR1c3RyaWFsIGFuZCBob3VzZWhvbGQgYXBwbGlhbmNlcywgam9iIGVzdGltYXRpb24sIGVsZWN0cmljYWwgdGVzdGluZyBhbmQgaW5zcGVjdGlvbiwgYW5kIGFwcGxpY2FibGUgY29kZXMgYW5kIHN0YW5kYXJkcy4iLCJjcml0ZXJpYSI6eyJuYXJyYXRpdmUiOiJUaGlzIGNyZWRlbnRpYWwgcmVxdWlyZXMgY29tcGxldGlvbiBvZiB0aGUgZm9sbG93aW5nIGNvdXJzZXM6IDEuIEZpbmFuY2lhbCBMaXRlcmFjeSAtIFRoaXMgY291cnNlIGluY2x1ZGVzIHRoZSBmb2xsb3dpbmcgbW9kdWxlczogQ3JlYXRpbmcgYSBQZXJzb25hbCBvciBGYW1pbHkgQnVkZ2V0IEJhbmtpbmcgU2VydmljZXM7IEJvcnJvd2luZyBCYXNpY3MuIDIuIE5DQ0VSIENvcmU6IEludHJvZHVjdGlvbiB0byBCYXNpYyBDb25zdHJ1Y3Rpb24gU2tpbGxzIC0gQ29yZTogSW50cm9kdWN0aW9uIHRvIEJhc2ljIENvbnN0cnVjdGlvbiBTa2lsbHMgcHJlcGFyZXMgaW5kaXZpZHVhbHMgZm9yIGVudHJ5LWxldmVsIHBvc2l0aW9ucyBvbiBwcm9qZWN0IHNpdGVzIGJ5IHByb3ZpZGluZyB0aGUgYmFzaWNzIGluIHNhZmV0eSwgaGFuZCBhbmQgcG93ZXIgdG9vbHMsIGNvbnN0cnVjdGlvbiBtYXRoLCBtYXRlcmlhbHMgaGFuZGxpbmcsIGNvbnN0cnVjdGlvbiBkcmF3aW5ncywgcmlnZ2luZyBhbmQgZW1wbG95YWJpbGl0eSBza2lsbHMuIFRoaXMgY291cnNlIGluY2x1ZGVzIHRoZSBmb2xsb3dpbmcgbW9kdWxlczogQmFzaWMgU2FmZXR5IChCYXNpYyBTaXRlIFNhZmV0eSBPcmllbnRhdGlvbik7IEludHJvZHVjdGlvbiB0byBDb25zdHJ1Y3Rpb24gTWF0aDsgSW50cm9kdWN0aW9uIHRvIEhhbmQgVG9vbHM7IEludHJvZHVjdGlvbiB0byBQb3dlciBUb29sczsgSW50cm9kdWN0aW9uIHRvIENvbnN0cnVjdGlvbiBEcmF3aW5nczsgQmFzaWMgQ29tbXVuaWNhdGlvbiBTa2lsbHM7IEJhc2ljIEVtcGxveWFiaWxpdHkgU2tpbGxzOyBJbnRyb2R1Y3Rpb24gdG8gTWF0ZXJpYWxzIEhhbmRsaW5nLiAzLiBOQ0NFUiBDcmFmdDogRWxlY3RyaWNhbCBMZXZlbCAxIC0gVGhpcyBjb21wcmVoZW5zaXZlIEVsZWN0cmljYWwgY3VycmljdWx1bSBwcmVwYXJlcyBsZWFybmVycyBmb3IgYSBjYXJlZXIgYXMgc2tpbGxlZCBwcm9mZXNzaW9uYWxzIGluIHRoZSBlbGVjdHJpY2FsIGZpZWxkLiBJdCBwbGFjZXMgc3Ryb25nIGVtcGhhc2lzIG9uIHNhZmV3b3JrIHByYWN0aWNlcywgd2hpbGUgY292ZXJpbmcgYXBwbGllZCBlbGVjdHJpY2FsIHRoZW9yeSBhbmQgcmVzaWRlbnRpYWwsIGNvbW1lcmNpYWwsIGFuZCBpbmR1c3RyaWFsIGVsZWN0cmljYWwga25vd2xlZGdlIGFuZCBza2lsbHMuIFRoaXMgY291cnNlIGluY2x1ZGVzIHRoZSBmb2xsb3dpbmcgbW9kdWxlczogT2NjdXBhdGlvbmFsIE92ZXJ2aWV3OiBUaGUgRWxlY3RyaWNhbCBJbmR1c3RyeTsgU2FmZXR5IGZvciBFbGVjdHJpY2lhbnM7IEludHJvZHVjdGlvbiB0byBFbGVjdHJpY2FsIENpcmN1aXRzOyBFbGVjdHJpY2FsIFRoZW9yeTsgSW50cm9kdWN0aW9uIHRvIHRoZSBOYXRpb25hbCBFbGVjdHJpY2FsIENvZGU7IERldmljZSBCb3hlczsgSGFuZCBCZW5kaW5nOyBXaXJld2F5cywgUmFjZXdheXMsIGFuZCBGaXR0aW5nczsgQ29uZHVjdG9ycyBhbmQgQ2FibGVzOyBCYXNpYyBFbGVjdHJpY2FsIENvbnN0cnVjdGlvbiBEb2N1bWVudHM7IFJlc2lkZW50aWFsIFdpcmluZzsgRWxlY3RyaWNhbCBUZXN0IEVxdWlwbWVudC4gNC4gUmVzaWRlbnRpYWwgRWxlY3RyaWNpdHkgUHJhY3RpY3VtIC0gVGhpcyBjb3Vyc2UgaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBtb2R1bGVzOiBQbGFubmluZyBhbmQgUHJlcGFyaW5nIGEgUmVzaWRlbnRpYWwgV2lyaW5nIEpvYjsgUmVzaWRlbnRpYWwgU2VydmljZSBFbnRyYW5jZXMgYW5kIEVxdWlwbWVudDsgUmVzaWRlbnRpYWwgRWxlY3RyaWNhbCBTeXN0ZW0tIFJvdWdoLWluOyBSZXNpZGVudGlhbCBFbGVjdHJpY2FsIFN5c3RlbSAtIFRyaW0tb3V0OyBNYWludGFpbmluZyBhbmQgVHJvdWJsZXNob290aW5nIGEgUmVzaWRlbnRpYWwgRWxlY3RyaWNhbCBXaXJpbmcgU3lzdGVtOyBBbHRlcm5hdGl2ZSBFbmVyZ3kgU3lzdGVtcy4gNS4gV29ya3BsYWNlIEh1bWFuIFJlbGF0aW9ucyAtIFRoZSBjb3Vyc2UgaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBtb2R1bGVzOiBGb3JtdWxhcyBmb3IgQ2FyZWVyIFN1Y2Nlc3M7IEVtcGxveWFiaWxpdHkgU2tpbGxzOyBXb3JrcGxhY2UgSXNzdWVzOyBFbXBsb3llZSBDb21wZW5zYXRpb24gQ29tcG9uZW50cy4ifSwiaW1hZ2UiOnsiaWQiOiJodHRwczovL3d3dy52ZWxvY2l0eW5ldHdvcmsuZm91bmRhdGlvbi93cC1jb250ZW50L3VwbG9hZHMvMjAyNC8wOC9SZXNpZGVudGlhbC1FbGVjdHJpY2l0eS1CYWRnZS5qcGciLCJ0eXBlIjoiSW1hZ2UifSwiYWxpZ25tZW50IjpbeyJ0YXJnZXROYW1lIjoiQXJrYW5zYXMgQ29ycmVjdGlvbmFsIFNjaG9vbCBEaXN0cmljdCBDb21wbGV0aW9uIENlcnRpZmljYXRlIC0gUmVzaWRlbnRpYWwgRWxlY3RyaWNpdHkiLCJ0YXJnZXRVcmwiOiJodHRwczovL2NyZWRlbnRpYWxmaW5kZXIub3JnL2NyZWRlbnRpYWwvODgwOTAvUmVzaWRlbnRpYWxfRWxlY3RyaWNpdHlfQ2VydGlmaWNhdGUiLCJ0YXJnZXREZXNjcmlwdGlvbiI6IkFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcG93ZXJlZCBieSB0aGUgQ3JlZGVudGlhbCBSZWdpc3RyeS4iLCJ0YXJnZXRDb2RlIjoiY2UtZmY0ZjUzMmItZDJjNy00OWZlLWIwN2QtY2I1MWU5OGNiNGEyIiwidGFyZ2V0RnJhbWV3b3JrIjoiQ3JlZGVudGlhbCBUcmFuc3BhcmVuY3kgRGVzY3JpcHRpb24gTGFuZ3VhZ2UiLCJ0eXBlIjoiQWxpZ25tZW50In1dfSwicmVzdWx0IjpbeyJ0eXBlIjoicmVzdWx0IiwicmVzdWx0RGVzY3JpcHRpb24iOiJUaGlzIGlzIGFuIGVudHJ5LWxldmVsIHByb2dyYW0gdGhhdCBwcmVwYXJlcyBwYXJ0aWNpcGFudHMgZm9yIGVtcGxveW1lbnQgaW4gdGhlIGVsZWN0cmljYWwgZmllbGQuIFBhcnRpY2lwYW50cyBsZWFybiB0aGUgYmFzaWMgc2tpbGxzIG5lZWRlZCB0byBiZSBzdWNjZXNzZnVsIGluIGEgbW9kZXJuIHdvcmtwbGFjZS4ifV0sInJvbGUiOiJNZW1iZXIiLCJAY29udGV4dCI6WyJodHRwczovL3B1cmwuaW1zZ2xvYmFsLm9yZy9zcGVjL29iL3YzcDAvY29udGV4dC0zLjAuMy5qc29uIl0sImlkIjoiZGlkOmp3azpleUpqY25ZaU9pSnpaV053TWpVMmF6RWlMQ0pyZEhraU9pSkZReUlzSW5naU9pSkNibmhKY1ZCQlVGQjVSVE5PVlRKRWVqaGFVbmhJUVVoSVFXOWFXbUZVZW05NVJ5MU9OVzF2YTJwaklpd2llU0k2SW1RM2FFaFVObE5xYlZkT1lrZHBZbmh6Vm5JM1VUaEVWVTFzYlZOU1kyNDViR0Z5VUcwNFIzaGFUWE1pZlEifX0sIm5iZiI6MTcyNzY5OTI5NSwianRpIjoiZGlkOnZlbG9jaXR5OnYyOjB4ZjBmOTJjNWViMTZkOGUxMTI1MzE5ODdkN2I1YWJiMWU1Y2I1ZWJhZToxNTEwOTc0NTM5NDgwNzQ6MjcwMSIsImlzcyI6ImRpZDppb246RWlCTXN3MjdJS1JZSWR3VU9mRGVCZDBMbldWZUcyZlB4eEppOUwxZnZqTTIwZyIsInN1YiI6ImRpZDpqd2s6ZXlKamNuWWlPaUp6WldOd01qVTJhekVpTENKcmRIa2lPaUpGUXlJc0luZ2lPaUpDYm5oSmNWQkJVRkI1UlROT1ZUSkVlamhhVW5oSVFVaElRVzlhV21GVWVtOTVSeTFPTlcxdmEycGpJaXdpZVNJNkltUTNhRWhVTmxOcWJWZE9Za2RwWW5oelZuSTNVVGhFVlUxc2JWTlNZMjQ1YkdGeVVHMDRSM2hhVFhNaWZRIiwiaWF0IjoxNzI3Njk5Mjk1fQ.wjB2eS7dNBAe-jbP3Cy82QM1wHbgdNvvbYJlX7aAyY2TTmnC6HyH1HV2-OVYFu4oAa6QHe5-sdmvxvet8IjnIg',
    createdAt: '2024-09-30T12:28:20.716Z',
    updatedAt: '2024-09-30T12:28:20.716Z',
    linkCodeCommitment: {
      type: 'VelocityCredentialLinkCodeCommitment2022',
      value: 'EiAGssvLlNEKWTVITfuxV4T/qOErtVyy8wbcvNO7zCXgXw==',
    },
    relatedResource: [
      {
        id: 'https://ethereum.github.io/yellowpaper/paper.pdf',
        mediaType: 'application/pdf',
        name: 'myPDFattach',
      },
      {
        id: 'https://img.lovepik.com/png/20230929/red-geometric-background-credentials-decoration-certification-award_27287_wh1200.png',
        mediaType: 'image/png',
      },
      {
        id: 'https://cdn.worldvectorlogo.com/logos/credential-group.svg',
        mediaType: 'image/svg+xml',
      },
      {
        id: 'https://ethereum.github.io/yellowpaper/1234567890',
        mediaType: 'application/pdf',
      },
      {
        id: 'https://ethereum.github.io/yellowpaper/image.gif',
        mediaType: 'image/gif',
      },
      {
        id: 'https://ethereum.github.io/yellowpaper/certificate.jpg',
        mediaType: 'image/jpeg',
      },
    ],
  },
  {
    id: '66fa996429ae2f0cca02ea37',
    type: ['EmploymentPastV1.1', 'VelocityNetworkLayer1Credential', 'VerifiableCredential'],
    did: 'did:velocity:v2:0xf0f92c5eb16d8e112531987d7b5abb1e5cb5ebae:151097453948074:2434',
    auth0UserId: 'auth0|66f40b9cd151bbe59dd8ac9b',
    userDid:
      'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    credentialStatus: {
      type: 'VelocityRevocationListJan2021',
      id: 'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0xF0f92c5eb16d8E112531987D7B5abB1e5cb5eBAE&listId=73687611903191&index=3851',
    },
    issuer: {
      id: 'did:ion:EiBMsw27IKRYIdwUOfDeBd0LnWVeG2fPxxJi9L1fvjM20g',
    },
    contentHash: {
      type: 'VelocityContentHash2020',
      value: '44c29e689299e68a8f265f96243f1ebe0802dc4513bcd71ba689589847e541d8',
    },
    credentialSchema: {
      type: 'JsonSchemaValidator2018',
      id: 'https://devlib.velocitynetwork.foundation/schemas/employment-past-v1.1.schema.json',
    },
    vnfProtocolVersion: 2,
    context: [
      'https://www.w3.org/2018/credentials/v1',
      'https://devlib.velocitynetwork.foundation/contexts/credential-extensions-2022.jsonld.json',
    ],
    credentialSubject: {
      type: 'Employment',
      '@context': [
        'https://devlib.velocitynetwork.foundation/contexts/layer1-v1.1.jsonld.json',
        'https://velocitynetwork.foundation/contexts/employment',
      ],
      legalEmployer: {
        name: 'AnatTest Organization',
        identifier: 'did:ion:EiBMsw27IKRYIdwUOfDeBd0LnWVeG2fPxxJi9L1fvjM20g',
        place: {
          addressCountry: 'US',
          type: 'Place',
        },
        type: 'Organization',
      },
      role: 'Support & Enablement Director',
      description:
        'Support and Enablement Director responsible for onboarding new customers and assist them with any technical issues',
      employmentType: ['permanent', 'full-time'],
      place: {
        name: 'Head Office',
        addressCountry: 'US',
        type: 'Place',
      },
      startDate: '2016-10-01',
      endDate: '2023-10-30',
      recipient: {
        givenName: 'N',
        familyName: 'P',
        type: 'PersonName',
      },
      alignment: [
        {
          targetName: 'Technical Support',
          targetUrl: 'https://credentialfinder.org/WorkRole/31/Technical_Support',
          targetFramework: 'Technical Support Framework',
          type: 'AlignmentObject',
        },
      ],
      id: 'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    },
    jti: 'did:velocity:v2:0xf0f92c5eb16d8e112531987d7b5abb1e5cb5ebae:151097453948074:2434',
    iss: 'did:ion:EiBMsw27IKRYIdwUOfDeBd0LnWVeG2fPxxJi9L1fvjM20g',
    encodedCredential:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6dmVsb2NpdHk6djI6MHhmMGY5MmM1ZWIxNmQ4ZTExMjUzMTk4N2Q3YjVhYmIxZTVjYjVlYmFlOjE1MTA5NzQ1Mzk0ODA3NDoyNDM0I2tleS0xIn0.eyJ2YyI6eyJ0eXBlIjpbIkVtcGxveW1lbnRQYXN0VjEuMSIsIlZlbG9jaXR5TmV0d29ya0xheWVyMUNyZWRlbnRpYWwiLCJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJpc3N1ZXIiOnsiaWQiOiJkaWQ6aW9uOkVpQk1zdzI3SUtSWUlkd1VPZkRlQmQwTG5XVmVHMmZQeHhKaTlMMWZ2ak0yMGcifSwicmVsYXRlZFJlc291cmNlIjpbeyJpZCI6Imh0dHBzOi8vZXRoZXJldW0uZ2l0aHViLmlvL3llbGxvd3BhcGVyL3BhcGVyLnBkZiIsIm1lZGlhVHlwZSI6ImFwcGxpY2F0aW9uL3BkZiJ9XSwiY29udGVudEhhc2giOnsidHlwZSI6IlZlbG9jaXR5Q29udGVudEhhc2gyMDIwIiwidmFsdWUiOiI0NGMyOWU2ODkyOTllNjhhOGYyNjVmOTYyNDNmMWViZTA4MDJkYzQ1MTNiY2Q3MWJhNjg5NTg5ODQ3ZTU0MWQ4In0sImxpbmtDb2RlQ29tbWl0bWVudCI6eyJ0eXBlIjoiVmVsb2NpdHlDcmVkZW50aWFsTGlua0NvZGVDb21taXRtZW50MjAyMiIsInZhbHVlIjoiRWlBVXpkS3g3c3dldlVEUXN6TmQ5UW9HaXVPYkdlZDFkWWZobExESGFkRGVxZz09In0sIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vY29udGV4dHMvY3JlZGVudGlhbC1leHRlbnNpb25zLTIwMjIuanNvbmxkLmpzb24iXSwiaWQiOiJkaWQ6dmVsb2NpdHk6djI6MHhmMGY5MmM1ZWIxNmQ4ZTExMjUzMTk4N2Q3YjVhYmIxZTVjYjVlYmFlOjE1MTA5NzQ1Mzk0ODA3NDoyNDM0IiwiY3JlZGVudGlhbFNjaGVtYSI6eyJ0eXBlIjoiSnNvblNjaGVtYVZhbGlkYXRvcjIwMTgiLCJpZCI6Imh0dHBzOi8vZGV2bGliLnZlbG9jaXR5bmV0d29yay5mb3VuZGF0aW9uL3NjaGVtYXMvZW1wbG95bWVudC1wYXN0LXYxLjEuc2NoZW1hLmpzb24ifSwiY3JlZGVudGlhbFN0YXR1cyI6eyJ0eXBlIjoiVmVsb2NpdHlSZXZvY2F0aW9uTGlzdEphbjIwMjEiLCJpZCI6ImV0aGVyZXVtOjB4RDg5MEYyRDYwQjQyOWY5ZTI1N0ZDMEJjNThFZjIyMzc3NzZERDkxQi9nZXRSZXZva2VkU3RhdHVzP2FkZHJlc3M9MHhGMGY5MmM1ZWIxNmQ4RTExMjUzMTk4N0Q3QjVhYkIxZTVjYjVlQkFFJmxpc3RJZD03MzY4NzYxMTkwMzE5MSZpbmRleD0zODUxIn0sInJlZnJlc2hTZXJ2aWNlIjp7InR5cGUiOiJWZWxvY2l0eU5ldHdvcmtSZWZyZXNoU2VydmljZTIwMjQiLCJpZCI6ImRpZDppb246RWlCTXN3MjdJS1JZSWR3VU9mRGVCZDBMbldWZUcyZlB4eEppOUwxZnZqTTIwZyN2bGMtaW5zcGVjdG9yLXYtMS0xIn0sInZuZlByb3RvY29sVmVyc2lvbiI6MiwiY3JlZGVudGlhbFN1YmplY3QiOnsibGVnYWxFbXBsb3llciI6eyJuYW1lIjoiQW5hdFRlc3QgT3JnYW5pemF0aW9uIiwiaWRlbnRpZmllciI6ImRpZDppb246RWlCTXN3MjdJS1JZSWR3VU9mRGVCZDBMbldWZUcyZlB4eEppOUwxZnZqTTIwZyIsInBsYWNlIjp7ImFkZHJlc3NDb3VudHJ5IjoiVVMiLCJ0eXBlIjoiUGxhY2UifSwidHlwZSI6Ik9yZ2FuaXphdGlvbiJ9LCJyb2xlIjoiU3VwcG9ydCAmIEVuYWJsZW1lbnQgRGlyZWN0b3IgUmVwbGFjZWQiLCJkZXNjcmlwdGlvbiI6IlN1cHBvcnQgYW5kIEVuYWJsZW1lbnQgRGlyZWN0b3IgcmVzcG9uc2libGUgZm9yIG9uYm9hcmRpbmcgbmV3IGN1c3RvbWVycyBhbmQgYXNzaXN0IHRoZW0gd2l0aCBhbnkgdGVjaG5pY2FsIGlzc3VlcyIsImVtcGxveW1lbnRUeXBlIjpbInBlcm1hbmVudCIsImZ1bGwtdGltZSJdLCJwbGFjZSI6eyJuYW1lIjoiSGVhZCBPZmZpY2UiLCJhZGRyZXNzQ291bnRyeSI6IlVTIiwidHlwZSI6IlBsYWNlIn0sInN0YXJ0RGF0ZSI6IjIwMTYtMTAtMDEiLCJlbmREYXRlIjoiMjAyMy0xMC0zMCIsInJlY2lwaWVudCI6eyJnaXZlbk5hbWUiOiJOIiwiZmFtaWx5TmFtZSI6IlAiLCJ0eXBlIjoiUGVyc29uTmFtZSJ9LCJhbGlnbm1lbnQiOlt7InRhcmdldE5hbWUiOiJUZWNobmljYWwgU3VwcG9ydCIsInRhcmdldFVybCI6Imh0dHBzOi8vY3JlZGVudGlhbGZpbmRlci5vcmcvV29ya1JvbGUvMzEvVGVjaG5pY2FsX1N1cHBvcnQiLCJ0YXJnZXRGcmFtZXdvcmsiOiJUZWNobmljYWwgU3VwcG9ydCBGcmFtZXdvcmsiLCJ0eXBlIjoiQWxpZ25tZW50T2JqZWN0In1dLCJ0eXBlIjoiRW1wbG95bWVudCIsIkBjb250ZXh0IjpbImh0dHBzOi8vZGV2bGliLnZlbG9jaXR5bmV0d29yay5mb3VuZGF0aW9uL2NvbnRleHRzL2xheWVyMS12MS4xLmpzb25sZC5qc29uIiwiaHR0cHM6Ly92ZWxvY2l0eW5ldHdvcmsuZm91bmRhdGlvbi9jb250ZXh0cy9lbXBsb3ltZW50Il0sImlkIjoiZGlkOmp3azpleUpqY25ZaU9pSnpaV053TWpVMmF6RWlMQ0pyZEhraU9pSkZReUlzSW5naU9pSkNibmhKY1ZCQlVGQjVSVE5PVlRKRWVqaGFVbmhJUVVoSVFXOWFXbUZVZW05NVJ5MU9OVzF2YTJwaklpd2llU0k2SW1RM2FFaFVObE5xYlZkT1lrZHBZbmh6Vm5JM1VUaEVWVTFzYlZOU1kyNDViR0Z5VUcwNFIzaGFUWE1pZlEifX0sIm5iZiI6MTcyNzY5OTI5NSwianRpIjoiZGlkOnZlbG9jaXR5OnYyOjB4ZjBmOTJjNWViMTZkOGUxMTI1MzE5ODdkN2I1YWJiMWU1Y2I1ZWJhZToxNTEwOTc0NTM5NDgwNzQ6MjQzNCIsImlzcyI6ImRpZDppb246RWlCTXN3MjdJS1JZSWR3VU9mRGVCZDBMbldWZUcyZlB4eEppOUwxZnZqTTIwZyIsInN1YiI6ImRpZDpqd2s6ZXlKamNuWWlPaUp6WldOd01qVTJhekVpTENKcmRIa2lPaUpGUXlJc0luZ2lPaUpDYm5oSmNWQkJVRkI1UlROT1ZUSkVlamhhVW5oSVFVaElRVzlhV21GVWVtOTVSeTFPTlcxdmEycGpJaXdpZVNJNkltUTNhRWhVTmxOcWJWZE9Za2RwWW5oelZuSTNVVGhFVlUxc2JWTlNZMjQ1YkdGeVVHMDRSM2hhVFhNaWZRIiwiaWF0IjoxNzI3Njk5Mjk1fQ.WPjVHW-pFNHbbyl6iySJXUHcGYJvVbCUYNEIe4luHGzqb1oC4GwHrJCJyHO6Z-Td-ZgHZoy_yEdfmQ3FCCBjXw',
    createdAt: '2024-09-30T12:28:20.716Z',
    updatedAt: '2024-09-30T12:28:20.716Z',
    linkCodeCommitment: {
      type: 'VelocityCredentialLinkCodeCommitment2022',
      value: 'EiAUzdKx7swevUDQszNd9QoGiuObGed1dYfhlLDHadDeqg==',
    },
    relatedResource: [
      {
        id: 'https://ethereum.github.io/yellowpaper/paper.pdf',
        mediaType: 'application/pdf',
      },
    ],
  },
  {
    id: '66f91232b94d2ad224f6dcc3',
    type: ['DriversLicenseV1.0', 'VerifiableCredential'],
    did: 'did:velocity:v2:0x6256b18921eabd39351ec23f1c94f880604e70e7:61422217259828:195',
    auth0UserId: 'auth0|66f40b9cd151bbe59dd8ac9b',
    userDid:
      'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    credentialStatus: {
      type: 'VelocityRevocationListJan2021',
      id: 'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0x6256b18921EaBD39351eC23F1C94f880604e70E7&listId=223397283901117&index=8688',
      statusListIndex: 8688,
      statusListCredential:
        'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0x6256b18921EaBD39351eC23F1C94f880604e70E7&listId=223397283901117',
    },
    issuer: {
      id: 'did:ion:EiAehWmpX5mHBuc93SIhPXF8bsEx68G6mPcdIaLNGbozPA',
    },
    contentHash: {
      type: 'VelocityContentHash2020',
      value: '6b8cf9ae10e54762c6e6909f70c74c3f22398b9154b3c03c294114782896cded',
    },
    credentialSchema: {
      id: 'https://devlib.velocitynetwork.foundation/schemas/drivers-license-v1.0.schema.json',
      type: 'JsonSchemaValidator2018',
    },
    vnfProtocolVersion: 2,
    context: [
      'https://www.w3.org/2018/credentials/v1',
      'https://devlib.velocitynetwork.foundation/contexts/credential-extensions-2022.jsonld.json',
    ],
    credentialSubject: {
      type: 'DriversLicense',
      '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://devlib.velocitynetwork.foundation/contexts/layer1-v1.0.jsonld.json',
      ],
      'name:': 'California Driver License',
      authority: {
        name: 'California DMV',
        place: {
          addressRegion: 'CA',
          addressCountry: 'US',
          type: 'Place',
        },
        type: 'Organization',
      },
      validity: {
        validFrom: '2015-02-01',
        validUntil: '2025-01-30',
        type: 'Validity',
      },
      identifier: '12310312312',
      person: {
        givenName: 'Adam',
        familyName: 'Smith',
        birthDate: '1966-06-20',
        gender: 'Male',
        type: 'Person',
      },
      id: 'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    },
    jti: 'did:velocity:v2:0x6256b18921eabd39351ec23f1c94f880604e70e7:61422217259828:195',
    iss: 'did:ion:EiAehWmpX5mHBuc93SIhPXF8bsEx68G6mPcdIaLNGbozPA',
    encodedCredential:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6dmVsb2NpdHk6djI6MHg2MjU2YjE4OTIxZWFiZDM5MzUxZWMyM2YxYzk0Zjg4MDYwNGU3MGU3OjYxNDIyMjE3MjU5ODI4OjE5NSNrZXktMSJ9.eyJ2YyI6eyJ0eXBlIjpbIkRyaXZlcnNMaWNlbnNlVjEuMCIsIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImlkIjoiZGlkOnZlbG9jaXR5OnYyOjB4NjI1NmIxODkyMWVhYmQzOTM1MWVjMjNmMWM5NGY4ODA2MDRlNzBlNzo2MTQyMjIxNzI1OTgyODoxOTUiLCJjcmVkZW50aWFsU3RhdHVzIjp7InR5cGUiOiJWZWxvY2l0eVJldm9jYXRpb25MaXN0SmFuMjAyMSIsImlkIjoiZXRoZXJldW06MHhEODkwRjJENjBCNDI5ZjllMjU3RkMwQmM1OEVmMjIzNzc3NkREOTFCL2dldFJldm9rZWRTdGF0dXM_YWRkcmVzcz0weDYyNTZiMTg5MjFFYUJEMzkzNTFlQzIzRjFDOTRmODgwNjA0ZTcwRTcmbGlzdElkPTIyMzM5NzI4MzkwMTExNyZpbmRleD04Njg4Iiwic3RhdHVzTGlzdEluZGV4Ijo4Njg4LCJzdGF0dXNMaXN0Q3JlZGVudGlhbCI6ImV0aGVyZXVtOjB4RDg5MEYyRDYwQjQyOWY5ZTI1N0ZDMEJjNThFZjIyMzc3NzZERDkxQi9nZXRSZXZva2VkU3RhdHVzP2FkZHJlc3M9MHg2MjU2YjE4OTIxRWFCRDM5MzUxZUMyM0YxQzk0Zjg4MDYwNGU3MEU3Jmxpc3RJZD0yMjMzOTcyODM5MDExMTcifSwibGlua0NvZGVDb21taXRtZW50Ijp7InR5cGUiOiJWZWxvY2l0eUNyZWRlbnRpYWxMaW5rQ29kZUNvbW1pdG1lbnQyMDIyIiwidmFsdWUiOiJFaURSeWR3R001TFpRb0tCdllOK2JoTVB6dkdmQnlUQTgwTE5pWitKajBQUWlRPT0ifSwiaXNzdWVyIjp7ImlkIjoiZGlkOmlvbjpFaUFlaFdtcFg1bUhCdWM5M1NJaFBYRjhic0V4NjhHNm1QY2RJYUxOR2JvelBBIn0sImNvbnRlbnRIYXNoIjp7InR5cGUiOiJWZWxvY2l0eUNvbnRlbnRIYXNoMjAyMCIsInZhbHVlIjoiNmI4Y2Y5YWUxMGU1NDc2MmM2ZTY5MDlmNzBjNzRjM2YyMjM5OGI5MTU0YjNjMDNjMjk0MTE0NzgyODk2Y2RlZCJ9LCJjcmVkZW50aWFsU2NoZW1hIjp7ImlkIjoiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vc2NoZW1hcy9kcml2ZXJzLWxpY2Vuc2UtdjEuMC5zY2hlbWEuanNvbiIsInR5cGUiOiJKc29uU2NoZW1hVmFsaWRhdG9yMjAxOCJ9LCJ2bmZQcm90b2NvbFZlcnNpb24iOjIsIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vY29udGV4dHMvY3JlZGVudGlhbC1leHRlbnNpb25zLTIwMjIuanNvbmxkLmpzb24iXSwiY3JlZGVudGlhbFN1YmplY3QiOnsibmFtZToiOiJDYWxpZm9ybmlhIERyaXZlciBMaWNlbnNlIiwiYXV0aG9yaXR5Ijp7Im5hbWUiOiJDYWxpZm9ybmlhIERNViIsInBsYWNlIjp7ImFkZHJlc3NSZWdpb24iOiJDQSIsImFkZHJlc3NDb3VudHJ5IjoiVVMiLCJ0eXBlIjoiUGxhY2UifSwidHlwZSI6Ik9yZ2FuaXphdGlvbiJ9LCJ2YWxpZGl0eSI6eyJ2YWxpZEZyb20iOiIyMDE1LTAyLTAxIiwidmFsaWRVbnRpbCI6IjIwMjUtMDEtMzAiLCJ0eXBlIjoiVmFsaWRpdHkifSwiaWRlbnRpZmllciI6IjEyMzEwMzEyMzEyIiwicGVyc29uIjp7ImdpdmVuTmFtZSI6IkFkYW0iLCJmYW1pbHlOYW1lIjoiU21pdGgiLCJiaXJ0aERhdGUiOiIxOTY2LTA2LTIwIiwiZ2VuZGVyIjoiTWFsZSIsInR5cGUiOiJQZXJzb24ifSwidHlwZSI6IkRyaXZlcnNMaWNlbnNlIiwiaWQiOiJkaWQ6andrOmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lKQ2JuaEpjVkJCVUZCNVJUTk9WVEpFZWpoYVVuaElRVWhJUVc5YVdtRlVlbTk1UnkxT05XMXZhMnBqSWl3aWVTSTZJbVEzYUVoVU5sTnFiVmRPWWtkcFluaHpWbkkzVVRoRVZVMXNiVk5TWTI0NWJHRnlVRzA0UjNoYVRYTWlmUSIsIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vY29udGV4dHMvbGF5ZXIxLXYxLjAuanNvbmxkLmpzb24iXX19LCJuYmYiOjE3MDcxNDU5NjksImp0aSI6ImRpZDp2ZWxvY2l0eTp2MjoweDYyNTZiMTg5MjFlYWJkMzkzNTFlYzIzZjFjOTRmODgwNjA0ZTcwZTc6NjE0MjIyMTcyNTk4Mjg6MTk1IiwiaXNzIjoiZGlkOmlvbjpFaUFlaFdtcFg1bUhCdWM5M1NJaFBYRjhic0V4NjhHNm1QY2RJYUxOR2JvelBBIiwic3ViIjoiZGlkOmp3azpleUpqY25ZaU9pSnpaV053TWpVMmF6RWlMQ0pyZEhraU9pSkZReUlzSW5naU9pSkNibmhKY1ZCQlVGQjVSVE5PVlRKRWVqaGFVbmhJUVVoSVFXOWFXbUZVZW05NVJ5MU9OVzF2YTJwaklpd2llU0k2SW1RM2FFaFVObE5xYlZkT1lrZHBZbmh6Vm5JM1VUaEVWVTFzYlZOU1kyNDViR0Z5VUcwNFIzaGFUWE1pZlEiLCJpYXQiOjE3MDcxNDU5Njl9.5pJFbh6URXDXYJbhvKuRPi_chctMC6pTEyvGwcbMHN0rAXmgkV-SRNBJqxGsUUnASWsi3-gIVIzN18psKw-lfA',
    createdAt: '2024-09-29T08:39:14.041Z',
    updatedAt: '2024-09-29T08:39:14.041Z',
    linkCodeCommitment: {
      type: 'VelocityCredentialLinkCodeCommitment2022',
      value: 'EiDRydwGM5LZQoKBvYN+bhMPzvGfByTA80LNiZ+Jj0PQiQ==',
    },
  },
  {
    id: '66f91232b94d2ad224f6dcc4',
    type: ['EmailV1.0', 'VerifiableCredential'],
    did: 'did:velocity:v2:0x6256b18921eabd39351ec23f1c94f880604e70e7:61422217259828:6732',
    auth0UserId: 'auth0|66f40b9cd151bbe59dd8ac9b',
    userDid:
      'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    credentialStatus: {
      type: 'VelocityRevocationListJan2021',
      id: 'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0x6256b18921EaBD39351eC23F1C94f880604e70E7&listId=223397283901117&index=2274',
      statusListIndex: 2274,
      statusListCredential:
        'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0x6256b18921EaBD39351eC23F1C94f880604e70E7&listId=223397283901117',
    },
    issuer: {
      id: 'did:ion:EiAehWmpX5mHBuc93SIhPXF8bsEx68G6mPcdIaLNGbozPA',
    },
    contentHash: {
      type: 'VelocityContentHash2020',
      value: '676b442bdb92e9632d075571abd6058a942e29410fff158e17b7a1bc7aab7377',
    },
    credentialSchema: {
      id: 'https://devlib.velocitynetwork.foundation/schemas/email-v1.0.schema.json',
      type: 'JsonSchemaValidator2018',
    },
    vnfProtocolVersion: 2,
    context: [
      'https://www.w3.org/2018/credentials/v1',
      'https://devlib.velocitynetwork.foundation/contexts/credential-extensions-2022.jsonld.json',
    ],
    credentialSubject: {
      type: 'Email',
      '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://devlib.velocitynetwork.foundation/contexts/layer1-v1.0.jsonld.json',
      ],
      email: 'adam.smith@example.com',
      id: 'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    },
    jti: 'did:velocity:v2:0x6256b18921eabd39351ec23f1c94f880604e70e7:61422217259828:6732',
    iss: 'did:ion:EiAehWmpX5mHBuc93SIhPXF8bsEx68G6mPcdIaLNGbozPA',
    encodedCredential:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6dmVsb2NpdHk6djI6MHg2MjU2YjE4OTIxZWFiZDM5MzUxZWMyM2YxYzk0Zjg4MDYwNGU3MGU3OjYxNDIyMjE3MjU5ODI4OjY3MzIja2V5LTEifQ.eyJ2YyI6eyJ0eXBlIjpbIkVtYWlsVjEuMCIsIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImlkIjoiZGlkOnZlbG9jaXR5OnYyOjB4NjI1NmIxODkyMWVhYmQzOTM1MWVjMjNmMWM5NGY4ODA2MDRlNzBlNzo2MTQyMjIxNzI1OTgyODo2NzMyIiwiY3JlZGVudGlhbFN0YXR1cyI6eyJ0eXBlIjoiVmVsb2NpdHlSZXZvY2F0aW9uTGlzdEphbjIwMjEiLCJpZCI6ImV0aGVyZXVtOjB4RDg5MEYyRDYwQjQyOWY5ZTI1N0ZDMEJjNThFZjIyMzc3NzZERDkxQi9nZXRSZXZva2VkU3RhdHVzP2FkZHJlc3M9MHg2MjU2YjE4OTIxRWFCRDM5MzUxZUMyM0YxQzk0Zjg4MDYwNGU3MEU3Jmxpc3RJZD0yMjMzOTcyODM5MDExMTcmaW5kZXg9MjI3NCIsInN0YXR1c0xpc3RJbmRleCI6MjI3NCwic3RhdHVzTGlzdENyZWRlbnRpYWwiOiJldGhlcmV1bToweEQ4OTBGMkQ2MEI0MjlmOWUyNTdGQzBCYzU4RWYyMjM3Nzc2REQ5MUIvZ2V0UmV2b2tlZFN0YXR1cz9hZGRyZXNzPTB4NjI1NmIxODkyMUVhQkQzOTM1MWVDMjNGMUM5NGY4ODA2MDRlNzBFNyZsaXN0SWQ9MjIzMzk3MjgzOTAxMTE3In0sImxpbmtDb2RlQ29tbWl0bWVudCI6eyJ0eXBlIjoiVmVsb2NpdHlDcmVkZW50aWFsTGlua0NvZGVDb21taXRtZW50MjAyMiIsInZhbHVlIjoiRWlDQm5XTFlHVUhVOFZNcXVsU2RVSUVpMTJBZDEyWE5tMGZmc1dnMWRPbE15UT09In0sImlzc3VlciI6eyJpZCI6ImRpZDppb246RWlBZWhXbXBYNW1IQnVjOTNTSWhQWEY4YnNFeDY4RzZtUGNkSWFMTkdib3pQQSJ9LCJjb250ZW50SGFzaCI6eyJ0eXBlIjoiVmVsb2NpdHlDb250ZW50SGFzaDIwMjAiLCJ2YWx1ZSI6IjY3NmI0NDJiZGI5MmU5NjMyZDA3NTU3MWFiZDYwNThhOTQyZTI5NDEwZmZmMTU4ZTE3YjdhMWJjN2FhYjczNzcifSwiY3JlZGVudGlhbFNjaGVtYSI6eyJpZCI6Imh0dHBzOi8vZGV2bGliLnZlbG9jaXR5bmV0d29yay5mb3VuZGF0aW9uL3NjaGVtYXMvZW1haWwtdjEuMC5zY2hlbWEuanNvbiIsInR5cGUiOiJKc29uU2NoZW1hVmFsaWRhdG9yMjAxOCJ9LCJ2bmZQcm90b2NvbFZlcnNpb24iOjIsIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vY29udGV4dHMvY3JlZGVudGlhbC1leHRlbnNpb25zLTIwMjIuanNvbmxkLmpzb24iXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiZW1haWwiOiJhZGFtLnNtaXRoQGV4YW1wbGUuY29tIiwidHlwZSI6IkVtYWlsIiwiaWQiOiJkaWQ6andrOmV5SmpjbllpT2lKelpXTndNalUyYXpFaUxDSnJkSGtpT2lKRlF5SXNJbmdpT2lKQ2JuaEpjVkJCVUZCNVJUTk9WVEpFZWpoYVVuaElRVWhJUVc5YVdtRlVlbTk1UnkxT05XMXZhMnBqSWl3aWVTSTZJbVEzYUVoVU5sTnFiVmRPWWtkcFluaHpWbkkzVVRoRVZVMXNiVk5TWTI0NWJHRnlVRzA0UjNoYVRYTWlmUSIsIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vY29udGV4dHMvbGF5ZXIxLXYxLjAuanNvbmxkLmpzb24iXX19LCJuYmYiOjE3MDcxNDUyMjUsImp0aSI6ImRpZDp2ZWxvY2l0eTp2MjoweDYyNTZiMTg5MjFlYWJkMzkzNTFlYzIzZjFjOTRmODgwNjA0ZTcwZTc6NjE0MjIyMTcyNTk4Mjg6NjczMiIsImlzcyI6ImRpZDppb246RWlBZWhXbXBYNW1IQnVjOTNTSWhQWEY4YnNFeDY4RzZtUGNkSWFMTkdib3pQQSIsInN1YiI6ImRpZDpqd2s6ZXlKamNuWWlPaUp6WldOd01qVTJhekVpTENKcmRIa2lPaUpGUXlJc0luZ2lPaUpDYm5oSmNWQkJVRkI1UlROT1ZUSkVlamhhVW5oSVFVaElRVzlhV21GVWVtOTVSeTFPTlcxdmEycGpJaXdpZVNJNkltUTNhRWhVTmxOcWJWZE9Za2RwWW5oelZuSTNVVGhFVlUxc2JWTlNZMjQ1YkdGeVVHMDRSM2hhVFhNaWZRIiwiaWF0IjoxNzA3MTQ1MjI1fQ.lhe14XGsQBGvp10x5sSV4nPqndFw9q1rAGVt1QIeHRK-VTNl6v77Q86oi1IfYvTW44KeM42Sqn31GI9tPMCtOg',
    createdAt: '2024-09-29T08:39:14.041Z',
    updatedAt: '2024-09-29T08:39:14.041Z',
    linkCodeCommitment: {
      type: 'VelocityCredentialLinkCodeCommitment2022',
      value: 'EiCBnWLYGUHU8VMqulSdUIEi12Ad12XNm0ffsWg1dOlMyQ==',
    },
  },
  {
    id: '66f91232b94d2ad224f6dcc5',
    type: ['PhoneV1.0', 'VerifiableCredential'],
    did: 'did:velocity:v2:0x6256b18921eabd39351ec23f1c94f880604e70e7:61422217259828:2251',
    auth0UserId: 'auth0|66f40b9cd151bbe59dd8ac9b',
    userDid:
      'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    credentialStatus: {
      type: 'VelocityRevocationListJan2021',
      id: 'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0x6256b18921EaBD39351eC23F1C94f880604e70E7&listId=223397283901117&index=8313',
      statusListIndex: 8313,
      statusListCredential:
        'ethereum:0xD890F2D60B429f9e257FC0Bc58Ef2237776DD91B/getRevokedStatus?address=0x6256b18921EaBD39351eC23F1C94f880604e70E7&listId=223397283901117',
    },
    issuer: {
      id: 'did:ion:EiAehWmpX5mHBuc93SIhPXF8bsEx68G6mPcdIaLNGbozPA',
    },
    contentHash: {
      type: 'VelocityContentHash2020',
      value: '4f0252c4e128e6d3197cea07b76fcbaa126de3d40bf6579dfa5345e5cf1a8fb2',
    },
    credentialSchema: {
      id: 'https://devregistrar.velocitynetwork.foundation/schemas/phone-v1.0.schema.json',
      type: 'JsonSchemaValidator2018',
    },
    vnfProtocolVersion: 2,
    context: [
      'https://www.w3.org/2018/credentials/v1',
      'https://devlib.velocitynetwork.foundation/contexts/credential-extensions-2022.jsonld.json',
    ],
    credentialSubject: {
      '@context': [
        'https://www.w3.org/2018/credentials/v1',
        'https://devlib.velocitynetwork.foundation/contexts/layer1-v1.0.jsonld.json',
      ],
      phone: '+15556192191',
      id: 'did:jwk:eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJCbnhJcVBBUFB5RTNOVTJEejhaUnhIQUhIQW9aWmFUem95Ry1ONW1va2pjIiwieSI6ImQ3aEhUNlNqbVdOYkdpYnhzVnI3UThEVU1sbVNSY245bGFyUG04R3haTXMifQ',
    },
    jti: 'did:velocity:v2:0x6256b18921eabd39351ec23f1c94f880604e70e7:61422217259828:2251',
    iss: 'did:ion:EiAehWmpX5mHBuc93SIhPXF8bsEx68G6mPcdIaLNGbozPA',
    encodedCredential:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6dmVsb2NpdHk6djI6MHg2MjU2YjE4OTIxZWFiZDM5MzUxZWMyM2YxYzk0Zjg4MDYwNGU3MGU3OjYxNDIyMjE3MjU5ODI4OjIyNTEja2V5LTEifQ.eyJ2YyI6eyJ0eXBlIjpbIlBob25lVjEuMCIsIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImlkIjoiZGlkOnZlbG9jaXR5OnYyOjB4NjI1NmIxODkyMWVhYmQzOTM1MWVjMjNmMWM5NGY4ODA2MDRlNzBlNzo2MTQyMjIxNzI1OTgyODoyMjUxIiwiY3JlZGVudGlhbFN0YXR1cyI6eyJ0eXBlIjoiVmVsb2NpdHlSZXZvY2F0aW9uTGlzdEphbjIwMjEiLCJpZCI6ImV0aGVyZXVtOjB4RDg5MEYyRDYwQjQyOWY5ZTI1N0ZDMEJjNThFZjIyMzc3NzZERDkxQi9nZXRSZXZva2VkU3RhdHVzP2FkZHJlc3M9MHg2MjU2YjE4OTIxRWFCRDM5MzUxZUMyM0YxQzk0Zjg4MDYwNGU3MEU3Jmxpc3RJZD0yMjMzOTcyODM5MDExMTcmaW5kZXg9ODMxMyIsInN0YXR1c0xpc3RJbmRleCI6ODMxMywic3RhdHVzTGlzdENyZWRlbnRpYWwiOiJldGhlcmV1bToweEQ4OTBGMkQ2MEI0MjlmOWUyNTdGQzBCYzU4RWYyMjM3Nzc2REQ5MUIvZ2V0UmV2b2tlZFN0YXR1cz9hZGRyZXNzPTB4NjI1NmIxODkyMUVhQkQzOTM1MWVDMjNGMUM5NGY4ODA2MDRlNzBFNyZsaXN0SWQ9MjIzMzk3MjgzOTAxMTE3In0sImxpbmtDb2RlQ29tbWl0bWVudCI6eyJ0eXBlIjoiVmVsb2NpdHlDcmVkZW50aWFsTGlua0NvZGVDb21taXRtZW50MjAyMiIsInZhbHVlIjoiRWlBZkVPajNGZXVwTjF6N2RZai9nazFtNHFiMVoyQ1FVYU9ad24vRkJjcmtOUT09In0sImlzc3VlciI6eyJpZCI6ImRpZDppb246RWlBZWhXbXBYNW1IQnVjOTNTSWhQWEY4YnNFeDY4RzZtUGNkSWFMTkdib3pQQSJ9LCJjb250ZW50SGFzaCI6eyJ0eXBlIjoiVmVsb2NpdHlDb250ZW50SGFzaDIwMjAiLCJ2YWx1ZSI6IjRmMDI1MmM0ZTEyOGU2ZDMxOTdjZWEwN2I3NmZjYmFhMTI2ZGUzZDQwYmY2NTc5ZGZhNTM0NWU1Y2YxYThmYjIifSwiY3JlZGVudGlhbFNjaGVtYSI6eyJpZCI6Imh0dHBzOi8vZGV2cmVnaXN0cmFyLnZlbG9jaXR5bmV0d29yay5mb3VuZGF0aW9uL3NjaGVtYXMvcGhvbmUtdjEuMC5zY2hlbWEuanNvbiIsInR5cGUiOiJKc29uU2NoZW1hVmFsaWRhdG9yMjAxOCJ9LCJ2bmZQcm90b2NvbFZlcnNpb24iOjIsIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly9kZXZsaWIudmVsb2NpdHluZXR3b3JrLmZvdW5kYXRpb24vY29udGV4dHMvY3JlZGVudGlhbC1leHRlbnNpb25zLTIwMjIuanNvbmxkLmpzb24iXSwiY3JlZGVudGlhbFN1YmplY3QiOnsicGhvbmUiOiIrMTU1NTYxOTIxOTEiLCJpZCI6ImRpZDpqd2s6ZXlKamNuWWlPaUp6WldOd01qVTJhekVpTENKcmRIa2lPaUpGUXlJc0luZ2lPaUpDYm5oSmNWQkJVRkI1UlROT1ZUSkVlamhhVW5oSVFVaElRVzlhV21GVWVtOTVSeTFPTlcxdmEycGpJaXdpZVNJNkltUTNhRWhVTmxOcWJWZE9Za2RwWW5oelZuSTNVVGhFVlUxc2JWTlNZMjQ1YkdGeVVHMDRSM2hhVFhNaWZRIiwiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczovL2RldmxpYi52ZWxvY2l0eW5ldHdvcmsuZm91bmRhdGlvbi9jb250ZXh0cy9sYXllcjEtdjEuMC5qc29ubGQuanNvbiJdfX0sIm5iZiI6MTcwNzE0NTk2OSwianRpIjoiZGlkOnZlbG9jaXR5OnYyOjB4NjI1NmIxODkyMWVhYmQzOTM1MWVjMjNmMWM5NGY4ODA2MDRlNzBlNzo2MTQyMjIxNzI1OTgyODoyMjUxIiwiaXNzIjoiZGlkOmlvbjpFaUFlaFdtcFg1bUhCdWM5M1NJaFBYRjhic0V4NjhHNm1QY2RJYUxOR2JvelBBIiwic3ViIjoiZGlkOmp3azpleUpqY25ZaU9pSnpaV053TWpVMmF6RWlMQ0pyZEhraU9pSkZReUlzSW5naU9pSkNibmhKY1ZCQlVGQjVSVE5PVlRKRWVqaGFVbmhJUVVoSVFXOWFXbUZVZW05NVJ5MU9OVzF2YTJwaklpd2llU0k2SW1RM2FFaFVObE5xYlZkT1lrZHBZbmh6Vm5JM1VUaEVWVTFzYlZOU1kyNDViR0Z5VUcwNFIzaGFUWE1pZlEiLCJpYXQiOjE3MDcxNDU5Njl9.1AhgdHIVTB7Cf0hFT8zCw9UXWHyF6Eizf3Lz7zq9GRSLO7ok20WZS7dTsBbAU_-aQ6wGLKFBHVsho0oGmyxO6w',
    createdAt: '2024-09-29T08:39:14.041Z',
    updatedAt: '2024-09-29T08:39:14.041Z',
    linkCodeCommitment: {
      type: 'VelocityCredentialLinkCodeCommitment2022',
      value: 'EiAfEOj3FeupN1z7dYj/gk1m4qb1Z2CQUaOZwn/FBcrkNQ==',
    },
  },
];
