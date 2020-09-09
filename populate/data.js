//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website Server
//Date: 08/06/2020
//Description: Script to prepopulate data in MongoDB for development purposes.

const data = {
    portfolios: [
        {
          title: 'Job in Netcentric',
          company: 'Netcentric',
          companyWebsite: 'www.google.com',
          location: 'Spain, Barcelona',
          jobTitle: 'Engineer',
          description: 'Doing something, programing....',
          startDate: '01/01/2014',
          endDate: '01/01/2016',
          userId:"auth0|5f57fe31aa32d70069e86125"
        },
        {
          title: 'Job in Siemens',
          company: 'Siemens',
          companyWebsite: 'www.google.com',
          location: 'Slovakia, Kosice',
          jobTitle: 'Software Engineer',
          description: 'Responsoble for parsing framework for JSON medical data.',
          startDate: '01/01/2011',
          endDate: '01/01/2013',
          userId:"auth0|5f57fe31aa32d70069e86125"
        },
        {
          title: 'Work in USA',
          company: 'WhoKnows',
          companyWebsite: 'www.google.com',
          location: 'USA, Montana',
          jobTitle: 'Housekeeping',
          description: 'So much responsibility....Overloaaaaaad',
          startDate: '01/01/2010',
          endDate: '01/01/2011',
          userId:"auth0|5f57fe31aa32d70069e86125"
        }
      ]
}

module.exports = data;