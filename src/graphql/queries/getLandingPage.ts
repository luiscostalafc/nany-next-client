const GET_LANDING_PAGE = /* GraphQL */ `
  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionsModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionSchedule on LandingPage {
    sectionSchedule {
      title
      description
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  fragment sectionSlider on LandingPage {
    sectionSlider {
      title
      reviews {
        name
        text
        photo {
          url
        }
      }
    }
  }

  query GET_LANDIG_PAGE {
    landingPage {
      ...sectionTech
      ...sectionModules
      ...sectionSchedule
      ...sectionFaq
      ...sectionSlider
    }
  }
`

export default GET_LANDING_PAGE
