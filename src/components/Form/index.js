import React from "react";
import {
  ConversationalForm,
  FlowEvents,
  EventDispatcher,
} from "./forked-cf/conversational-form";
import { getCodeList, overwrite } from "country-list";
import styled from 'styled-components';

import { createNewMember, updateMember, clearMemberId } from '../../services/froware';

const FrowareChatForm = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
  width: fill-available;

  @media (min-width: 320px) {
    max-width: 15rem;
  }

  @media (min-width: 425px) {
    max-width: 17rem;
  }

  @media (min-width: 768px) {
    max-width: 32rem;
  }

  @media (min-width: 1024px) {
    max-width: 36rem;
  }

  .conversational-form, .conversational-form-inner {
    position: relative !important;    
  }
`;

export default class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    var formFields = [
      {
        tag: "input",
        type: "text",
        name: "first_name",
        "cf-questions": "What's your first name?",
        required: true,
        "cf-error": "Sorry, we need to know your name — it's only polite",
      },
      {
        tag: "input",
        type: "text",
        name: "last_name",
        "cf-questions": "Thanks {first_name}! And what's your surname?",
      },
      {
        tag: "select",
        name: "country",
        "cf-questions": "Where do you live?",
        "cf-input-placeholder": "Choose your country",
        isMultiChoice: false,
      },
      {
        tag: "input",
        type: "email",
        name: "email_address",
        "cf-questions": "What is your email address?",
      },
      {
        tag: "fieldset",
        type: "text",
        "cf-questions":
          "Would you be happy to subscribe to our spam-free mailing list?",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "mailing_list",
            value: "yes",
            "cf-label": "Yes",
          },
          {
            tag: "input",
            type: "radio",
            name: "mailing_list",
            value: "no",
            "cf-label": "No",
          },
        ],
      },
      {
        tag: "fieldset",
        "cf-questions": "Are you willing to tell us more about your self?",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "cfc-profile",
            id: "profile-yes",
            value: "yes",
            "cf-label": "Yes",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-profile",
            id: "profile-no",
            value: "no",
            "cf-label": "No",
          },
        ],
      },
      {
        tag: "cf-robot-message",
        type: "text",
        name: "cfc-profile-ending",
        "cf-questions": `No problem, we’ll let you know when we’re preparing to launch. You will be redirected to our blog`,
        "cf-conditional-cfc-profile": "no",
      },
      {
        tag: "select",
        "cf-questions":
          "Thank you so much. We promise this will take less than five minutes or your money back&& Your ethnicity?",
        "cf-conditional-cfc-profile": "yes",
        name: "cfc-ethnicity",
        isMultiChoice: false,
        children: [
          {
            tag: "option",
            value: "black",
            "cf-label": "Black",
          },
          {
            tag: "option",
            value: "white",
            "cf-label": "White",
          },
          {
            tag: "option",
            value: "asian",
            "cf-label": "Asian",
          },
          {
            tag: "option",
            value: "oriental",
            "cf-label": "Oriental",
          },
          {
            tag: "option",
            value: "mixed-heritage",
            "cf-label": "Mixed (Black)",
          },
          {
            tag: "option",
            value: "mixed-other",
            "cf-label": "Mixed (Other)",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "have_you_ever_experienced_discrimination_or_negativity",
        "cf-questions": "Have you ever experienced discrimination or negativity as a Black professional in the industry?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "cfc-ethnicity-feedback",
            value: "yes",
            "cf-label": "Yes",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-ethnicity-feedback",
            value: "no",
            "cf-label": "No",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "cfc-gender",
        "cf-questions": "How do you define your gender?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "cfc-gender",
            value: "unspecified",
            "cf-label": "Prefer not to say",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-gender",
            value: "man",
            "cf-label": "Man",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-gender",
            value: "woman",
            "cf-label": "Woman",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-gender",
            value: "non-binary",
            "cf-label": "Non-binary",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-gender",
            value: "other",
            "cf-label": "Other",
          },
        ],
      },
      {
        tag: "fieldset",
        "cf-questions": "Have you ever experienced gender-based discrimination or negativity in the industry?",
        "cf-conditional-cfc-gender": "woman||non-binary||other",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "cfc-gender-feedback",
            value: "yes",
            "cf-label": "Yes",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-gender-feedback",
            value: "no",
            "cf-label": "No",
          },
        ],
      },
      {
        tag: "fieldset",
        "cf-questions": "Are you currently employed in a tech role?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "cfc-current-employment",
            value: "yes",
            "cf-label": "Yes",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-current-employment",
            value: "no",
            "cf-label": "No",
          },
        ],
      },
      {
        tag: "input",
        type: "text",
        name: "job_title",
        "cf-questions": "What's your current job title?",
        "cf-conditional-cfc-current-employment": "yes",
      },
      {
        tag: "fieldset",
        "cf-questions": "How long have you worked in tech?",
        "cf-conditional-cfc-current-employment": "yes",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "cfc-career-experience",
            value: "0",
            "cf-label": "<1 year",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-career-experience",
            value: "1-2",
            "cf-label": "1-2 years",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-career-experience",
            value: "3-5",
            "cf-label": "3-5 years",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-career-experience",
            value: "6-10",
            "cf-label": "6-10 years",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-career-experience",
            value: "11-19",
            "cf-label": "11-19 years",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-career-experience",
            value: "20-",
            "cf-label": "20+ years",
          },
        ],
      },
      {
        tag: "select",
        name: "pathway",
        "cf-questions": "What pathway are you taking/planning to take into tech?",
        "cf-conditional-cfc-current-employment": "no",
        children: [
          {
            tag: "option",
            value: "bootcamp",
            "cf-label": "Bootcamp",
          },
          {
            tag: "option",
            value: "apprenticeship",
            "cf-label": "Apprenticeship",
          },
          {
            tag: "option",
            value: "internship",
            "cf-label": "Internship",
          },
          {
            tag: "option",
            value: "university",
            "cf-label": "University",
          },
          {
            tag: "option",
            value: "self-study",
            "cf-label": "Self-study",
          },
          {
            tag: "option",
            value: "mixed-other",
            "cf-label": "Mixed (Other)",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "fields_of_interest",
        "cf-questions": "What are your fields of interest?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Agile",
            "cf-label": "Agile",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "AI",
            "cf-label": "AI/ML",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Blockchain",
            "cf-label": "Blockchain/crypto",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Cloud Computing",
            "cf-label": "Cloud Computing",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Consumer Electronics",
            "cf-label": "Consumer Electronics",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Culture",
            "cf-label": "Culture",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Data Science",
            "cf-label": "Data Science",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "DevOps",
            "cf-label": "DevOps",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "IoT",
            "cf-label": "IoT",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Networking",
            "cf-label": "Networking",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Product Management",
            "cf-label": "Product Management",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Robotics",
            "cf-label": "Robotics",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Social Media",
            "cf-label": "Social Media",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Software Development",
            "cf-label": "Software Development",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Systems Engineering",
            "cf-label": "Systems Engineering",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Tech Support",
            "cf-label": "Tech Support",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "UX",
            "cf-label": "UX",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-interests",
            value: "Other",
            "cf-label": "Other",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "do_you_feel_well_informed",
        "cf-questions": "Do you feel well-informed about events and resources that are available to you?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "cfc-knowledge-events",
            value: "yes",
            "cf-label": "Yes",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-knowledge-events",
            value: "no",
            "cf-label": "No",
          },
        ],
      },
      {
        tag: "fieldset",
        namae: "how_many_tech_experts_do_you_know",
        "cf-questions":
          "How many Black tech experts do you know of personally/professionally/virtually?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "cfc-knowledge-experts",
            value: "None",
            "cf-label": "None",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-knowledge-experts",
            value: "Very few",
            "cf-label": "Very few",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-knowledge-experts",
            value: "A few",
            "cf-label": "A few",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-knowledge-experts",
            value: "Some",
            "cf-label": "Some",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-knowledge-experts",
            value: "Many",
            "cf-label": "Many",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-knowledge-experts",
            value: "Very many",
            "cf-label": "ALL the experts",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "how_connected_to_black_tech_professionals_industry_disciplines",
        "cf-questions":
          "How connected are you to other Black professionals in your or other industry disciplines?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "radio",
            name: "cfc-network-strength",
            value: "Not at all",
            "cf-label": "Not at all",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-network-strength",
            value: "Very weak",
            "cf-label": "Very weakly",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-network-strength",
            value: "Weak",
            "cf-label": "Weakly",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-network-strength",
            value: "Moderate",
            "cf-label": "Moderately",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-network-strength",
            value: "Strong",
            "cf-label": "Strongly",
          },
          {
            tag: "input",
            type: "radio",
            name: "cfc-network-strength",
            value: "Very strong",
            "cf-label": "I live in Wakanda",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "black_tech_professionals_meeting_tool",
        "cf-questions":
          "How do you currently meet/network with other Black tech professionals?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-platforms",
            value: "Facebook",
            "cf-label": "Facebook",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-platforms",
            value: "Instagram",
            "cf-label": "Instagram",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-platforms",
            value: "LinkedIn",
            "cf-label": "LinkedIn",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-platforms",
            value: "Twitter",
            "cf-label": "Twitter",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-platforms",
            value: "Instant messenger apps (Telegram/WhatsApp/Slack)",
            "cf-label": "Instant messengers",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "career_goals",
        "cf-questions": "What are your career goals?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-goals",
            value: "C-Suite",
            "cf-label": "Become a C-Suite executive",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-goals",
            value: "Early retirement",
            "cf-label": "Retire early",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-goals",
            value: "Startup exit",
            "cf-label": "Make a significant exit from a startup",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-goals",
            value: "Subject matter expert",
            "cf-label": "Become a renowned expert in my field",
          },
        ],
      },
      {
        tag: "fieldset",
        name: "community_participation_interest",
        "cf-questions": "How would you like to participate in our community?",
        "cf-conditional-cfc-ethnicity": "black||mixed-heritage",
        children: [
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-participation",
            value: "Creating content",
            "cf-label": "Creating content on our site",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-participation",
            value: "Syndicating content",
            "cf-label": "Syndicating content from my existing channel",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-participation",
            value: "Leading conversations",
            "cf-label": "Leading conversations in my field(s) of expertise",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-participation",
            value: "Open-source contribution",
            "cf-label": "Contributing to open-source development",
          },
          {
            tag: "input",
            type: "checkbox",
            name: "cfc-participation",
            value: "Not sure",
            "cf-label": "I'm not sure yet",
          },
        ],
      },
      {
        tag: "textarea",
        type: "text",
        name: "questions_feedback",
        "cf-questions": "Do you have any questions or feedback you'd like to share?",
        //"cf-conditional-cfc-ethnicity": "black||mixed-heritage"
      },
      {
        tag: "cf-robot-message",
        type: "text",
        name: "cfc-profile-ending",
        "cf-questions": `Thank for completing this form, we’ll let you know when we’re preparing to launch. You will be redirected to our blog where you can get updates on our progress`,
        //"cf-conditional-cfc-profile": "no",
      },
    ];

    formFields = this.setConditions(formFields);
    formFields = this.loadCountries(formFields);

    this.formFields = formFields;
    this.submitCallback = this.submitCallback.bind(this);
  }

   /**
   * Sets conditional display properties for all <fieldset /> child elements
   * @param {Object[]} formFields - an array of objects representing form elements
   */
  setConditions(formFields) {
    return formFields.map((field) => {
      if (
        field.tag === "fieldset" &&
        field.children &&
        field.children.length > 0
      ) {
        const conditionalProperty = Object.keys(field).filter(
          (key) => ~key.indexOf("cf-conditional-")
        )[0];

        if ("undefined" !== typeof conditionalProperty) {
          field.children = field.children.map((child) => {
            child[conditionalProperty] = field[conditionalProperty];

            return child;
          });
        }
      }

      return field;
    });
  }

  /**
   * Loads country list
   * @param {Object[]} formFields - an array of objects representing form elements
   */
  loadCountries(formFields) {
    // Shorten default label for UK
    overwrite([{
      code: 'gb',
      name: 'United Kingdom'
    }]);

    const countries = getCodeList();
    const countryField = formFields.find((field) => "country" === field.name);

    if ("undefined" !== typeof countryField) {
      const applyPrefixes = (arr) => {
        const prefixes = ["gb", "us", "ca", "ng", "gh"];

        // Repositions the specified elements at the start of array
        for (let i = prefixes.length - 1; i >= 0; i--) {
          let pos = arr.findIndex((option) => option.value === prefixes[i]);
          if (-1 !== pos) {
            arr.unshift(arr.splice(pos, 1)[0]);
          }
        }
      };
      // Generates option elements
      const children = Object.keys(countries).map((code) => ({
        tag: "option",
        value: code,
        "cf-label": countries[code],
      })).sort((a, b) => a['cf-label'] > b['cf-label']);

      applyPrefixes(children);
      countryField.children = children;
    }

    return formFields;
  }

  submitCallback() {
    const formDataSerialized = this.cf.getFormData(true);
    updateMember(formDataSerialized)
      .then(data => console.log('data ==> ', data))
      .catch(error => console.log('error ==> ', error));

    this.cf.addRobotChatResponse(
      "Thank you for chatting with us, please visit our parent site <a href='https://frocentric.org' title='frocentric'>frocentric</a> for updates about our launch."
    );
  }

  endConversationHandler = (event) => {
    const evt = this.getFormEventAction(event.detail.tag.name);
    if (evt === 'end') {
      window.ConversationalForm.flowManager.stop();
      document.querySelector("#conversational-form").style["pointer-events"] = "none";
      clearMemberId();
      setTimeout(() => {
        document.location.href = "https://frocentric.org";
      }, 7000);
    }
  }

  // blatnently should be a useReducer LOL!
  getFormEventAction = (name) => {
    const events = {
      'cfc-profile-ending': 'end',
      'comments': 'end',
      'mailing_list':'create',
      'cfc-profile': 'update'
    };
    return  events[name] || undefined;
  }

  formEventHandler = (event) => {
    this.endConversationHandler(event);
    const evt = this.getFormEventAction(event.detail.tag.name);

    if (evt === 'create') {
      const formDataSerialized = this.cf.getFormData(true);
      createNewMember(formDataSerialized);
    }
    if (evt === 'update') {
      const formDataSerialized = this.cf.getFormData(true);
      updateMember(formDataSerialized);
    }
    if (event.detail.step >= 7) {
      const formDataSerialized = this.cf.getFormData(true);
      updateMember(formDataSerialized);
    }
  }

  componentDidMount() {
    this.dispatcher = new EventDispatcher();
    this.dispatcher.addEventListener(
      FlowEvents.FLOW_UPDATE,
      this.formEventHandler,
      false
    );
        
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback,
        preventAutoFocus: false,
        eventDispatcher: this.dispatcher,
        // loadExternalStyleSheet: false
      },
      tags: this.formFields,
    });

    this.elem.appendChild(this.cf.el)
  }

  render() {
    return <FrowareChatForm ref={(ref) => (this.elem = ref)} />;
  }
}
