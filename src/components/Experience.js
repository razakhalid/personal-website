import React from "react";

import recipebook from "../images/recipe-book.png";
import personalwebsite from "../images/personal-website.png";
import pokemon from "../images/pokemon-app.png";

export default function Experience() {
  return (
    <>
      <div className="experience__wrapper">
        <div className="experience__header">
          <h2 className="header-1">Professional Experience</h2>
          <p>Coming Soon</p>
        </div>
        <div className="experience__cards-wrapper">
          {/* <div className="card">
            <h3 className="header-2 card-header">
              Front End Development at Chanl Health
            </h3>
            <div className="card-content-wrapper">
              <div className="card-img-wrapper">
                <img className="card-img" src={chanl} />
              </div>
              <div className="card-text-wrapper">
                <div className="header-3 card-text-header">What they do:</div>
                <ul className="card-text-body">
                  <li>
                    "Chanl Health is a SaaS company whose software allows their
                    clients (hospitals) to remotely conduct rehabilitiation for
                    cardiac patients.";
                  </li>
                </ul>

                <div className="header-3 card-text-header">What I did:</div>
                <ul className="card-text-body">
                  
                </ul>

                <div className="header-3 card-text-header">
                  Technologies Used:
                </div>
              </div>
            </div>
            <a
              target="_blank"
              href="https://friendly-hypatia-5bb7b2.netlify.app/"
            >
              <button className="btn">See Project</button>
            </a>
          </div>
          <div className="card">
            <h3 className="header-2 card-header">Recipe Book</h3>

            <div className="card-content-wrapper">
              <div className="card-img-wrapper">
                <img className="card-img" src={quill} />
              </div>
              <div className="card-text-wrapper">
                <div className="header-3 card-text-header">Description</div>
                <ul className="card-text-body">
                  <li>
                    Recipe Book allows you to create, edit and delete recipes.
                  </li>
                  <li>
                    You specify details such as the name, servings, instructions
                    and ingredients.
                  </li>
                  <li>
                    The app stores the recipes in your browser's local storage.
                  </li>
                </ul>
                <br />
                <br />

                <div className="header-3 card-text-header">
                  Technologies Used
                </div>
                <ul className="card-text-body">
                  <li>React, JS, CSS</li>
                </ul>
              </div>
            </div>
            <a
              target="_blank"
              href="https://friendly-hypatia-5bb7b2.netlify.app/"
            >
              <button className="btn">See Project</button>
            </a>
          </div>
          <div className="card">
            <h3 className="header-2 card-header">Recipe Book</h3>

            <div className="card-content-wrapper">
              <div className="card-img-wrapper">
                <img className="card-img" src={portkey} />
              </div>
              <div className="card-text-wrapper">
                <div className="header-3 card-text-header">Description</div>
                <ul className="card-text-body">
                  <li>
                    Recipe Book allows you to create, edit and delete recipes.
                  </li>
                  <li>
                    You specify details such as the name, servings, instructions
                    and ingredients.
                  </li>
                  <li>
                    The app stores the recipes in your browser's local storage.
                  </li>
                </ul>
                <br />
                <br />

                <div className="header-3 card-text-header">
                  Technologies Used
                </div>
                <ul className="card-text-body">
                  <li>React, JS, CSS</li>
                </ul>
              </div>
            </div>
            <a
              target="_blank"
              href="https://friendly-hypatia-5bb7b2.netlify.app/"
            >
              <button className="btn">See Company</button>
            </a>
          </div>
          <div className="card">
            <h3 className="header-2 card-header">Recipe Book</h3>

            <div className="card-content-wrapper">
              <div className="card-img-wrapper">
                <img className="card-img" src={ibex} />
              </div>
              <div className="card-text-wrapper">
                <div className="header-3 card-text-header">Description</div>
                <ul className="card-text-body">
                  <li>
                    Recipe Book allows you to create, edit and delete recipes.
                  </li>
                  <li>
                    You specify details such as the name, servings, instructions
                    and ingredients.
                  </li>
                  <li>
                    The app stores the recipes in your browser's local storage.
                  </li>
                </ul>
                <br />
                <br />

                <div className="header-3 card-text-header">
                  Technologies Used
                </div>
                <ul className="card-text-body">
                  <li>React, JS, CSS</li>
                </ul>
              </div>
            </div>
            <a
              target="_blank"
              href="https://friendly-hypatia-5bb7b2.netlify.app/"
            >
              <button className="btn">See Company</button>
            </a>
          </div> */}
        </div>
        <div className="experience__header">
          <h2 className="header-1">Side Projects</h2>
        </div>
        <div className="experience__cards-wrapper">
          <div className="experience__card">
            <img className="experience__card-img" src={recipebook} alt="" />
            <div className="experience__card-body">
              <div className="experience__card-label">
                <h3>Recipe Book</h3>
              </div>
              <div className="experience__card-description">
                <p>Create, edit and delete recipes using Recipe Book!</p>
              </div>
            </div>
            <div className="experience__btn-wrapper">
              <a
                target="_blank"
                href="https://friendly-hypatia-5bb7b2.netlify.app/"
                rel="noreferrer"
              >
                <button className="btn">See Live App</button>
              </a>
              <a
                target="_blank"
                href="https://github.com/razakhalid/react-recipe-app"
                rel="noreferrer"
              >
                <button className="btn">See Code</button>
              </a>
            </div>
          </div>
          <div className="experience__card">
            <img className="experience__card-img" src={pokemon} alt="" />
            <div className="experience__card-body">
              <div className="experience__card-label">
                <h3>PokeData</h3>
              </div>
              <div className="experience__card-description">
                <p>
                  Scroll through the pages of Pokemon to learn about the stats
                  and abilities of each. Looking for a specific one? Just
                  search!
                </p>
              </div>
            </div>
            <div className="experience__btn-wrapper">
              <a
                target="_blank"
                href="https://jolly-hamilton-d90bd8.netlify.app/"
                rel="noreferrer"
              >
                <button className="btn">See Live App</button>
              </a>
              <a
                target="_blank"
                href="https://github.com/razakhalid/react-pokemon-app"
                rel="noreferrer"
              >
                <button className="btn">See Code</button>
              </a>
            </div>
          </div>
          <div className="experience__card">
            <img
              className="experience__card-img"
              src={personalwebsite}
              alt=""
            />
            <div className="experience__card-body">
              <div className="experience__card-label">
                <h3>This Website</h3>
              </div>
              <div className="experience__card-description">
                <p>
                  I built this website using React to showcase some side
                  projects I did to practice React and other technologies.
                </p>
              </div>
            </div>
            <div className="experience__btn-wrapper">
              <button className="btn">See Live App</button>
              <a
                target="_blank"
                href="https://github.com/razakhalid/personal-website"
                rel="noreferrer"
              >
                <button className="btn">See Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
