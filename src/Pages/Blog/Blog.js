import React from 'react';

const Blog = () => {
    return (
        <div className='m-16'>
            <p><strong>1:- What are the different ways to manage a state in a React application?</strong></p><br />
            <p><strong>Answer:</strong>There are four main types of state you need to properly manage in your React apps:
                Local state
                Global state
                Server state
                URL state
                Let's cover each of these in detail:
                Local (UI) state – Local state is data we manage in one or another component.
                Local state is most often managed in React using the useState hook.
                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                Global (UI) state – Global state is data we manage across multiple components.
                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                Sometimes state we think should be local might become global.
                Server state – Data that comes from an external server that must be integrated with our UI state.
                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                URL state – Data that exists on our URLs, including the pathname and query parameters.
                URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p><br />
            <p><strong>2:- How does prototypical inheritance work?</strong></p><br />
            <p><strong>Answer:</strong>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p><br />
            <p><strong>3:- What is a unit test? Why should we write unit tests?</strong></p><br />
            <p><strong>Answer:</strong>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit tests help to fix bugs early in the development cycle and save costs.
            It helps the developers to understand the testing code base and enables them to make changes quickly
            Good unit tests serve as project documentation
            Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.</p><br />
            <p><strong>4:- React vs. Angular vs. Vue?</strong></p><br />
            <p><strong>Answer:</strong>Angular:The best thing about Angular is its constant updates. Angular launches an update every 6 months and the new versions build upon the older ones. Take Angular 11 update, for example, which has gotten rid of all bugs the previous version had. Of course, you need to keep a watch on the updates, as the code may be affected in case of a major update. But Google makes sure to wait another 6 months after an update before pulling the previous tools, giving you a full year to change code if the need arises. However, this is just the tip of the iceberg. There are several more reasons why Angular is a favorite for large scale apps with complex functionalities, which wish to scale further.React JS:
This open-source Javascript library has become quite the rage for developing interactive web and mobile apps since Facebook launched it in 2013.

There are primarily three reasons which have made the React library a developer darling -

Code Reusability- it allows developers to reuse blocks of code for a simple function

Ease-of-use - React, though tougher than Vue, has a less steep learning curve than Angular JS.

Customizable - The crucial difference between the library and framework is about control. This is where React is ahead of Angular- it is highly customizable. You are in control and you incorporate the parts of the library you need, unlike Angular, which does not allow much modification.Since Vue is the new kid on the block, not many businesses have ventured into Vue JS development yet, and thus, real-time assessment of the pros and cons of Vue is not very well-documented. However, what we do know is that Vue has the best of both worlds- two-way data binding like Angular and flexibility in code like React. Because of this, Vue is rising steadily through the ranks and has a massive market in Asia- Alibaba and Xiaomi are the big names using Vue JS.

Hence, the fastest JavaScript framework – TezJS, uses Vue as the primary base of the language

Vue is best utilized in cases of lightweight yet high performance, intuitive apps as the applications are quickly ready for the market without compromising on the performance or functionalities. Let us take a quick look at what makes Vue JS a lucrative choice for businesses.</p>
        </div>
    );
};

export default Blog;