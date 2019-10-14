import React, { Component } from "react";

import CV from "react-cv";
//import { CVData } from './data';

// this.setState({rightSide: ${this.state.education.start_date} - ${this.state.education.end_date}})

export default class App extends Component {
  state = {
    education: {
      index: null,
      start_date: "1900",
      end_date: "2099",
      title: "",
      authority: "",
      authorityWebSite: "",
      rightSide: `1900 - 2099`
    },
    personalData: {
      name: "Full Name",
      title: "Title",
      image: "https://bulma.io/images/placeholders/128x128.png",
      contacts: [
        { type: "email", value: "john@example.com" },
        { type: "phone", value: "+00 (123) 456 78 90" },
        { type: "website", value: "example.com" },
        { type: "linkedin", value: "linkedin.com/in/notexists" },
        { type: "twitter", value: "twitter.com/404" },
        { type: "github", value: "github.com/404" }
      ]
    },
    sections: [
      {
        type: "text",
        title: "Career Profile",
        content:
          "When I was child, I always want to be a developer. I think I am now. Culpa proident ad officia minim Lorem sint excepteur irure culpa nisi aliquip nostrud.Laborum voluptate nostrud fugiat occaecat proident veniam excepteur pariatur amet ex sit.Anim aliquip do in commodo adipisicing.Nulla adipisicing nisi enim ullamco sunt veniam.Ullamco labore sunt Lorem veniam id et Lorem magna eiusmod aute. Aliquip minim est consectetur anim mollit aliqua ex elit do et nulla do. Cupidatat ad sunt cillum sint consectetur sunt cillum eiusmod ad esse aliqua. Aute anim elit amet in duis aute ipsum deserunt qui deserunt officia excepteur veniam. Et laboris nostrud est ipsum nulla fugiat deserunt magna velit irure. Ullamco duis ut magna ea tempor enim in ipsum.",
        icon: "usertie"
      },
      {
        type: "common-list",
        title: "Education",
        icon: "graduation",
        // sections.items.push({title, authority, authorityWebsite, rightSide})
        // items.filter()
        items: [
          {
            title: "Computer Engineering (BS)",
            authority: "University",
            authorityWebSite: "https://sample.edu",
            rightSide: "2013 - 2017"
          },
          {
            title: "Some Department (PHD)",
            authority: "Another University",
            authorityWebSite: "https://sample.edu",
            rightSide: "2017 - Present"
          },
          {
            title: "Some Department (PHD)",
            authority: "Another University",
            authorityWebSite: "https://sample.edu",
            rightSide: "2017 - Present"
          }
        ]
      },
      {
        type: "experiences-list",
        title: "Experiences",
        description: "Optional",
        icon: "archive",
        items: [
          {
            title: "Lead Software Developer",
            company: "Some Company Example INC",
            description: "I'm working as a lead developer yeeeey!",
            companyWebSite: "http://somecompanyexample.com",
            companyMeta: "",
            datesBetween: "2017.10 - Present",
            descriptionTags: ["Javascript", "React"]
          },
          {
            title: "Software Developer",
            company: "Some Company Example INC",
            description:
              "I'm using ReactJS and working as a front-end developer",
            companyWebSite: "http://somecompanyexample.com",
            companyMeta: "Little info about company",
            datesBetween: "2016.8 - 2017.10"
          },
          {
            title: "Intern",
            company: "Some Software Example INC",
            description: "I was warming up.",
            companyWebSite: "http://someexamplecompany.com",
            companyMeta: "SF USA",
            datesBetween: "2012.06 - 2012.10"
          }
        ]
      },
      {
        type: "projects-list",
        title: "Projects",
        description: "Optional",
        icon: "tasks",
        groups: [
          {
            sectionHeader: "Company Name",
            description: "Optional",
            items: [
              {
                title: "Project",
                projectUrl: "optional",
                description: "Optional"
              },
              {
                title: "Project",
                projectUrl: "optional",
                description: "Optional"
              },
              {
                title: "Project",
                projectUrl: "optional",
                description: "Optional"
              }
            ]
          }
        ]
      },
      {
        type: "common-list",
        title: "Conferences & Certificates",
        description: "",
        icon: "comments",
        items: [
          {
            title: "Some Conferences / 2019",
            authority: "SomeConf",
            authorityWebSite: "https://www.someconf.somesome"
          },
          {
            title: "Some Conferences / 2019",
            authority: "SomeConf",
            authorityMeta: "Speaker",
            authorityWebSite: "https://www.someconf.somesome",
            rightSide: "test"
          },
          {
            title: "Some Conferences / 2012",
            authorityMeta: "Speaker"
          }
        ]
      },
      {
        type: "common-list",
        title: "Languages",
        icon: "language",
        items: [
          {
            authority: "English",
            authorityMeta: "Professional"
          },
          {
            authority: "Spanish",
            authorityMeta: "Beginner"
          }
        ]
      },
      {
        type: "tag-list",
        title: "Skills Proficiency",
        icon: "rocket",
        items: ["React", "Javascript", "CSS", "SQL", "SomeTech", "CoolTech"]
      },
      {
        type: "tag-list",
        title: "Hobies & Interests",
        icon: "cubes",
        items: ["Photography", "Poetry"]
      }
    ],
    emailDisabled: "true",
    phoneDisabled: "ture",
    websiteDisabled: "ture",
    linkedinDisabled: "ture",
    twitterDisabled: "ture",
    githubDisabled: "ture"
  };
  onSubmit = e => {
    e.preventDefault();
    const personalData = this.state.personalData;
    const contacts = [];
    const name = e.target.name.value;
    const title = e.target.title.value;
    const image = e.target.image.value;
    // const type = e.target.contacttype.value;
    // const value = e.target.contactvalue.value;
    // const email = e.target.email.value;emailDisabled
    // const phone = e.target.phone.value;
    // const website = e.target.website.value;
    // const linkedin = e.target.linkedin.value;
    // const twitter = e.target.twitter.value;
    // const github = e.target.github.value;

    personalData.name = name || personalData.name;
    personalData.title = title || personalData.title;
    personalData.image = image || personalData.image;
    // personalData.contacts[0].value = email || personalData.contacts[0].value;
    // personalData.contacts[1].value = phone || personalData.contacts[1].value;
    // personalData.contacts[2].value = website || personalData.contacts[2].value;
    // personalData.contacts[3].value = linkedin || personalData.contacts[3].value;
    // personalData.contacts[4].value = twitter || personalData.contacts[4].value;
    // personalData.contacts[5].value = github || personalData.contacts[5].value;

    // if (e.target.email.disabled == false) {
    //   const type = "email";
    //   const value = e.target.email.value;
    //   contacts[0] = { type, value };
    // }

    // if (e.target.phone.disabled == false) {
    //   const type = "phone";
    //   const value = e.target.phone.value;
    //   // const contacts = this.state.personalData.contacts;
    //   contacts[1] = { type, value };
    // }

    // const contacts = this.state.personalData.contacts;
    // contacts[1] = { type, value };

    const contact_field_keys = [
      "email",
      "phone",
      "website",
      "linkedin",
      "twitter",
      "github"
    ];
    contact_field_keys.forEach((key, index) => {
      if (e.target[key].disabled == false) {
        const type = key;
        const value = e.target[key].value;
        console.log(type, value);
        if (value !== "")
          // const contacts = this.state.personalData.contacts;
          contacts[index] = { type, value };
      }
    });

    personalData.contacts = contacts;
    // for (let index = 0; index < personalData.contacts.length; index++) {
    //

    //   personalData.contacts[index].value =
    //     e.target[stuff[index]].value || personalData.contacts[index].value;
    // }
    console.log("contacts", contacts);
    // personalData.contacts.push({type, value})
    this.setState({ personalData });
  };

  // renderEducationForm(title) {
  //   title = "Computer Engineering (BS)";
  //   const data = this.state.sections[1];
  //   const index = data.items.findIndex(item => item.title === title);
  //   return data.items[index];
  //   // data.items[index].title = "Content";
  // }

  render() {
    console.log(this.state.education);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>Personal Data</h3>
          <label>Name: </label>
          <input name="name" type="name" placeholder="name" />
          <label>title: </label>
          <input name="title" type="title" placeholder="title" />
          <label>image: </label>
          <input name="image" type="" placeholder="image link" />

          <label>email: </label>
          <input
            type="checkbox"
            onChange={() =>
              this.setState({ emailDisabled: !this.state.emailDisabled })
            }
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            disabled={this.state.emailDisabled}
          />

          <label>phone: </label>
          <input
            type="checkbox"
            onChange={() =>
              this.setState({ phoneDisabled: !this.state.phoneDisabled })
            }
          />
          <input
            name="phone"
            type="phone"
            placeholder="phone"
            disabled={this.state.phoneDisabled}
          />
          <label>website: </label>
          <input
            type="checkbox"
            onChange={() =>
              this.setState({ websiteDisabled: !this.state.websiteDisabled })
            }
          />
          <input
            name="website"
            type="website"
            placeholder="website"
            disabled={this.state.websiteDisabled}
          />
          <label>linkedin: </label>
          <input
            type="checkbox"
            onChange={() =>
              this.setState({ linkedinDisabled: !this.state.linkedinDisabled })
            }
          />

          <input
            name="linkedin"
            type="linkedin"
            placeholder="linkedin"
            disabled={this.state.linkedinDisabled}
          />
          <label>twitter: </label>
          <input
            type="checkbox"
            onChange={() =>
              this.setState({ twitterDisabled: !this.state.twitterDisabled })
            }
          />
          <input
            name="twitter"
            type="twitter"
            placeholder="twitter"
            disabled={this.state.twitterDisabled}
          />
          <label>github: </label>
          <input
            type="checkbox"
            onChange={() =>
              this.setState({ githubDisabled: !this.state.githubDisabled })
            }
          />
          <input
            name="github"
            type="github"
            placeholder="github"
            disabled={this.state.githubDisabled}
          />

          {/* <label>Social Links: </label>
          <input name='contacttype' placeholder='contact type'/>
          <input name='contactvalue' placeholder='contact value'/>
          <input name='contactvalue' placeholder='contact value' /> */}

          <input type="submit" />
        </form>

        <form>
          <select name="options">
            <option value="opt1">opt1</option>
          </select>
          <fieldset>
            <legend>year</legend>
            <label for="from">from</label>
            <input
              type="number"
              min="1900"
              id="from"
              name="from"
              onChange={e => {
                const value = e.target.value;
                const _state = this.state.education;
                _state.start_date = value;

                this.setState({ education: _state });
              }}
            />

            <label for="to">to</label>
            <input
              type="number"
              max="2099"
              id="to"
              name="to"
              // value={this.state.education.end_date}
              onChange={e => {
                const value = e.target.value;
                this.setState(prevState => {
                  const _state = prevState.education;
                  _state.end_date = value;
                  return { education: _state };
                });
              }}
            />
          </fieldset>
          <input type="submit" />
        </form>

        <CV {...this.state} />
      </div>
    );
  }
}
