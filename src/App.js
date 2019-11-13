import React, { Component } from "react";

import CV from "react-cv";
//import { CVData } from './data';

// this.setState({rightSide: ${this.state.education.start_date} - ${this.state.education.end_date}})

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationItems: [],
      experienceItems: [],
      projectsGroups: [],
      projectItems: [],
      conferencesAndCertificatesItems: [],
      languageItems: [],
      skillsProficiencyItems: [],
      hobiesAndInterests: [],

      dropdown: null, // title
      education: {
        index: null,
        title: "",
        authority: "",
        authorityWebSite: "",
        start_date: "",
        end_date: "",
        rightSide: ""
      },
      experiences: {
        index: null,
        title: "",
        company: "",
        description: "",
        companyWebSite: "",
        companyMeta: "",
        descriptionTags: [],
        datesBetween: "",
        start_date_: "",
        end_date: ""
      },
      projects: {
        index: null,
        sectionHeader: "",
        description: ""
        // items: []
      },
      // project_items: [],
      /*   index: "",
        title: "",
        projectUrl: "",
        description: ""
      }, */
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
          // description: "Optional",
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
              // "Javascript,React,SQL,".split(',') => ['']
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
          // description: "Optional",
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
  }
  onSubmitPersonaldata = e => {
    e.preventDefault();
    const personalData = this.state.personalData;
    const contacts = [];
    const name = e.target.name.value;
    const title = e.target.title.value;
    const image = e.target.image.value;

    personalData.name = name || personalData.name;
    personalData.title = title || personalData.title;
    personalData.image = image || personalData.image;

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
        if (value !== "") contacts[index] = { type, value };
      }
    });

    personalData.contacts = contacts;

    console.log("contacts", contacts);

    this.setState({ personalData });
  };

  //Education

  addEducation = education => {
    const educationItems = this.state.educationItems;
    educationItems.push(education);

    this.setState({ educationItems });
  };

  updateEducation = (education, index) => {
    this.setState(state => {
      const educationItems = state.educationItems.map((item, j) => {
        if (j === index) {
          return education;
        } else {
          return item;
        }
      });

      return {
        educationItems
      };
    });
  };

  onRemoveEducation = index => {
    this.setState(state => {
      const educationItems = state.educationItems.filter((item, j) => {
        return index !== j;
      });

      return {
        educationItems
      };
    });
  };

  onSubmitEducation = e => {
    e.preventDefault();
    if (
      this.state.education.title !== "" &&
      this.state.education.authority !== "" &&
      this.state.education.authorityWebSite !== "" &&
      this.state.education.start_date !== "" &&
      this.state.education.end_date !== ""
    ) {
      let education = {
        title: this.state.education.title,
        authority: this.state.education.authority,
        authorityWebSite: this.state.education.authorityWebSite,
        start_date: this.state.education.start_date,
        end_date: this.state.education.end_date,
        rightSide:
          this.state.education.start_date +
          " - " +
          this.state.education.end_date
      };
      if (this.state.dropdown === null) {
        this.addEducation(education);
      } else {
        this.updateEducation(education, this.state.dropdown);
      }
    } else {
      alert("education data missing!!");
    }
  };

  handleEditEducation(e) {
    const index = e.target.value === null ? null : parseInt(e.target.value);
    this.setState(prevState => {
      const education = [...prevState.educationItems];
      return {
        education: {
          ...education[index]
        },
        dropdown: index
      };
    });
  }

  //experiences

  addExperiences = experiences => {
    const experienceItems = this.state.experienceItems;
    experienceItems.push(experiences);

    this.setState({ experienceItems });
  };

  updateExperiences = (experiences, index) => {
    this.setState(state => {
      const experienceItems = state.experienceItems.map((item, j) => {
        if (j === index) {
          return experiences;
        } else {
          return item;
        }
      });

      return {
        experienceItems
      };
    });
  };

  onRemoveExperiences = index => {
    this.setState(state => {
      const experienceItems = state.experienceItems.filter((item, j) => {
        return index !== j;
      });

      return {
        experienceItems
      };
    });
  };

  onSubmitExperiences = e => {
    e.preventDefault();
    if (
      this.state.experiences.title !== "" &&
      this.state.experiences.company !== "" &&
      this.state.experiences.description !== "" &&
      this.state.experiences.companyWebSite !== "" &&
      this.state.experiences.companyMeta !== "" &&
      this.state.experiences.description !== "" &&
      this.state.experiences.start_date !== "" &&
      this.state.experiences.end_date !== ""
    ) {
      const tags =
        this.state.experiences.descriptionTags !== undefined
          ? this.state.experiences.descriptionTags
          : [];
      console.log(tags);
      let experiences = {
        title: this.state.experiences.title,
        company: this.state.experiences.company,
        description: this.state.experiences.description,
        companyWebSite: this.state.experiences.companyWebSite,
        companyMeta: this.state.experiences.companyMeta,
        descriptionTags: Array.isArray(tags) ? tags : tags.split(" "),
        start_date: this.state.experiences.start_date,
        end_date: this.state.experiences.end_date,
        datesBetween:
          this.state.experiences.start_date +
          " - " +
          this.state.experiences.end_date
      };
      console.log(experiences);
      if (this.state.dropdown === null) {
        this.addExperiences(experiences);
      } else {
        this.updateExperiences(experiences, this.state.dropdown);
      }
    } else {
      alert("experiences data missing!!");
    }
  };

  handleEditExperiences(e) {
    const index = e.target.value === null ? null : parseInt(e.target.value);
    this.setState(prevState => {
      const experiences = [...prevState.experienceItems];
      return {
        experiences: {
          ...experiences[index]
        },
        dropdown: index
      };
    });
  }

  // Projects

  addProjects = projects => {
    const projectsGroups = this.state.projectsGroups;
    projectsGroups.push(projects);

    this.setState({ projectsGroups });
  };

  updateProjects = (projects, index) => {
    this.setState(state => {
      const projectsGroups = state.projectsGroups.map((item, j) => {
        if (j === index) {
          return projects;
        } else {
          return item;
        }
      });

      return {
        projects
      };
    });
  };

  onRemoveProjects = index => {
    this.setState(state => {
      const projectsGroups = state.projectsGroups.filter((item, j) => {
        return index !== j;
      });

      return {
        projectsGroups
      };
    });
  };

  onSubmitProjects = e => {
    e.preventDefault();
    console.log(this.state.projectsGroups);
    if (
      this.state.projects.sectionHeader !== "" &&
      this.state.projects.description !== ""
      // this.state.projects.items !== ""
    ) {
      let projects = {
        title: this.state.projects.sectionHeader,
        company: this.state.projects.description,
        description: this.state.projects.items
      };
      if (this.state.dropdown === null) {
        this.addProjects(projects);
      } else {
        this.updateProjects(projects, this.state.dropdown);
      }
    } else {
      alert("Projects data missing!!");
    }
  };

  handleEditProjects(e) {
    const index = e.target.value === null ? null : parseInt(e.target.value);
    this.setState(prevState => {
      const projects = [...prevState.projectsGroups];
      return {
        projects: {
          ...projects[index]
        },
        dropdown: index
      };
    });
  }

  render() {
    const sections = [];

    if (this.state.educationItems.length > 0) {
      sections.push({
        type: "common-list",
        title: "Education",
        icon: "graduation",
        items: this.state.educationItems
      });
    }

    if (this.state.experienceItems.length > 0) {
      sections.push({
        type: "experiences-list",
        title: "Experiences",
        // description: "Optional",
        icon: "archive",
        items: this.state.experienceItems
      });
    }

    if (this.state.projectsGroups.length > 0) {
      sections.push({
        type: "projects-list",
        title: "Projects",
        // description: "Optional",
        icon: "tasks",
        groups: this.state.projectsGroups
      });
    }
    const props = { personalData: this.state.personalData, sections: sections };
    return (
      <div>
        <form onSubmit={this.onSubmitPersonaldata}>
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
            onUpdateItem
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

          <input type="submit" />
        </form>

        <br></br>

        <h3>Education</h3>
        <select
          name="options"
          onChange={e => this.handleEditEducation(e)}
          value={this.state.dropdown}
        >
          <option key={null} value={null}>
            Select an Option
          </option>
          {this.state.educationItems.map((item, index) => {
            return (
              <>
                <option
                  key={item.title}
                  value={index}
                  selected={this.state.dropdown === index}
                >
                  {`${item.title}`}
                </option>
              </>
            );
          })}
        </select>

        <button
          type="button"
          onClick={() => this.onRemoveEducation(this.state.dropdown)}
        >
          Remove
        </button>

        <form onSubmit={this.onSubmitEducation}>
          <label>Education title: </label>
          <input
            value={this.state.education.title}
            name="title"
            type="text"
            placeholder="title"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.education;
                _state.title = value;
                return { education: _state };
              });
            }}
          />

          <label>Education authority: </label>
          <input
            value={this.state.education.authority}
            name="authority"
            type="text"
            placeholder="authority"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.education;
                _state.authority = value;
                return { education: _state };
              });
            }}
          />

          <label>Education authorityWebSite: </label>
          <input
            value={this.state.education.authorityWebSite}
            name="authorityWebSite"
            type="text"
            placeholder="authorityWebSite"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.education;
                _state.authorityWebSite = value;
                return { education: _state };
              });
            }}
          />

          <fieldset>
            <legend>year</legend>
            <label for="from">from</label>
            <input
              type="number"
              min="1900"
              id="from"
              name="from"
              value={this.state.education.start_date}
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
              value={this.state.education.end_date}
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

        <br></br>

        <h3>Experiences</h3>
        <select
          name="options"
          onChange={e => this.handleEditExperiences(e)}
          value={this.state.dropdown}
        >
          <option key={null} value={null}>
            Select an Option
          </option>
          {this.state.experienceItems.map((item, index) => {
            return (
              <>
                <option
                  key={item.title}
                  value={index}
                  selected={this.state.dropdown === index}
                >
                  {`${item.title}`}
                </option>
              </>
            );
          })}
        </select>

        <button
          type="button"
          onClick={() => this.onRemoveExperiences(this.state.dropdown)}
        >
          Remove
        </button>

        <form onSubmit={this.onSubmitExperiences}>
          <label>experience title: </label>
          <input
            value={this.state.experiences.title}
            name="title"
            type="text"
            placeholder="title"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.experiences;
                _state.title = value;
                return { experiences: _state };
              });
            }}
          />

          <label>company name: </label>
          <input
            value={this.state.experiences.company}
            name="company"
            type="text"
            placeholder="company"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.experiences;
                _state.company = value;
                return { experiences: _state };
              });
            }}
          />

          <label>company description: </label>
          <input
            value={this.state.experiences.description}
            name="description"
            type="text"
            placeholder="description"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.experiences;
                _state.description = value;
                return { experiences: _state };
              });
            }}
          />

          <label>company Website: </label>
          <input
            value={this.state.experiences.companyWebSite}
            name="companyWebsite"
            type="text"
            placeholder="companyWebsite"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.experiences;
                _state.companyWebSite = value;
                return { experiences: _state };
              });
            }}
          />

          <label>company info: </label>
          <input
            value={this.state.experiences.companyMeta}
            name="companyMeta"
            type="text"
            placeholder="companyMeta"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.experiences;
                _state.companyMeta = value;
                return { experiences: _state };
              });
            }}
          />

          <label>descriptionTags: </label>
          <input
            value={this.state.experiences.descriptionTags}
            name="descriptionTags"
            type="text"
            placeholder="descriptionTags"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.experiences;
                _state.descriptionTags = value;
                return { experiences: _state };
              });
            }}
          />

          <fieldset>
            <legend>Year and Month</legend>
            <label for="from">from</label>
            <input
              type="number"
              id="from"
              name="from"
              value={this.state.experiences.start_date}
              onChange={e => {
                const value = e.target.value;
                const _state = this.state.experiences;
                _state.start_date = value;
                this.setState({ experiences: _state });
              }}
            />

            <label for="to">to</label>
            <input
              type="number"
              id="to"
              name="to"
              value={this.state.experiences.end_date}
              onChange={e => {
                const value = e.target.value;
                this.setState(prevState => {
                  const _state = prevState.experiences;
                  _state.end_date = value;
                  return { experiences: _state };
                });
              }}
            />
          </fieldset>
          <input type="submit" />
        </form>

        {/* Projects intputs  */}
        <br></br>

        <h3>Projects</h3>
        <select
          name="options"
          onChange={e => this.handleEditProjects(e)}
          value={this.state.dropdown}
        >
          <option key={null} value={null}>
            Select an Option
          </option>
          {this.state.projectsGroups.map((item, index) => {
            return (
              <>
                <option
                  key={item.sectionHeader}
                  value={index}
                  selected={this.state.dropdown === index}
                >
                  {`${item.sectionHeader}`}
                </option>
              </>
            );
          })}
        </select>

        <button
          type="button"
          onClick={() => this.onRemoveProjects(this.state.dropdown)}
        >
          Remove
        </button>

        <form onSubmit={this.onSubmitProjects}>
          <label>sectionHeader: </label>
          <input
            value={this.state.projects.sectionHeader}
            name="sectionHeader"
            type="text"
            placeholder="sectionHeader"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.projects;
                _state.sectionHeader = value;
                return { projects: _state };
              });
            }}
          />

          <label>description: </label>
          <input
            value={this.state.projects.description}
            name="description"
            type="text"
            placeholder="description"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.projects;
                _state.description = value;
                return { projects: _state };
              });
            }}
          />

          {/* <label>items: </label>
          <input
            value={this.state.projects.items}
            name="items"
            type="text"
            placeholder="items"
            onChange={e => {
              const value = e.target.value;
              this.setState(prevState => {
                const _state = prevState.projects;
                _state.items = value;
                return { projects: _state };
              });
            }}
          /> */}

          <input type="submit" />
        </form>

        <CV {...props} />
      </div>
    );
  }
}
