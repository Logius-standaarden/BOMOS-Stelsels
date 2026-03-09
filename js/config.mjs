import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "company" : "Logius",
        "companyURL" : "http://www.logius.nl/",
        "name" : "Sander Boer"
      } ],
  editors: [ 
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl/",
        "name" : "Gül Işik"
      },
      { 
        "company" : "Logius",
        "companyURL" : "https://www.logius.nl/",
        "name" : "Edwin Wisse"
      }
    ],
  github: "https://github.com/Logius-standaarden/BOMOS-Stelsels",
  maxTocLevel: 3,
  previousMaturity: "DEF",
  pubDomain: "bomos",
  publishDate: "2022-06-07",
  publishVersion: "3.0.0",
  prevVersion: [],
  shortName: "stelsels",
  specStatus: "WV",
  specType: "HR"
});
