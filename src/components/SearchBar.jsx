import React, { useCallback, useState } from "react";
import react from "@astrojs/react";
import skills from "@util/skills";
import { query as searchQuery } from "../searchQueryStore.js";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  // console.log("search query", searchQuery.get());

  function handleJobNameInput(e) {
    setQuery(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    // console.log(e.target.querySelector("#job-name").value);
    searchQuery.set(query);
  }

  return (
    <div className="search-bar-component">
      <form onSubmit={handleSubmitForm}>
        <div className="search-bar-container">
          <div className="search-bar-right">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_331_1115"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x={1}
                y={1}
                width={17}
                height={17}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.6665 1.66663H17.8972V17.8975H1.6665V1.66663Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_331_1115)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.78178 2.91665C5.99595 2.91665 2.91595 5.99582 2.91595 9.78165C2.91595 13.5675 5.99595 16.6475 9.78178 16.6475C13.5668 16.6475 16.6468 13.5675 16.6468 9.78165C16.6468 5.99582 13.5668 2.91665 9.78178 2.91665ZM9.78185 17.8975C5.30685 17.8975 1.66602 14.2566 1.66602 9.78163C1.66602 5.30663 5.30685 1.66663 9.78185 1.66663C14.2568 1.66663 17.8968 5.30663 17.8968 9.78163C17.8968 14.2566 14.2568 17.8975 9.78185 17.8975Z"
                  fill="#737373"
                />
              </g>
              <mask
                id="mask1_331_1115"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x={14}
                y={14}
                width={5}
                height={5}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.3667 14.7558H18.5534V18.9347H14.3667V14.7558Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_331_1115)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.9286 18.9347C17.7694 18.9347 17.6094 18.8739 17.4869 18.7522L14.5502 15.8239C14.3061 15.5797 14.3052 15.1839 14.5494 14.9397C14.7927 14.6939 15.1886 14.6956 15.4336 14.9381L18.3702 17.8672C18.6144 18.1114 18.6152 18.5064 18.3711 18.7506C18.2494 18.8739 18.0886 18.9347 17.9286 18.9347Z"
                  fill="#737373"
                />
              </g>
            </svg>
            <input
              type="text"
              placeholder="What are you looking for?"
              id="job-name"
              value={query}
              onChange={handleJobNameInput}
            />
            <svg
              className="break-line"
              width={2}
              height={65}
              viewBox="0 0 2 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0V65" stroke="#121214" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="search-bar-middel">
            <div className="job-type-pick">
              <div className="job-type-pick-header">Job Type</div>
              <select id="job-type-selector">
                <option selected value>
                  Select
                </option>
                <option value="entrylevel">Entry-level</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <svg
              width={2}
              height={65}
              viewBox="0 0 2 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0V65" stroke="#121214" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="search-bar-left">
            <div className="search-tags">
              <div className="write-tags">
                <div className="write-tags-header">Tags:</div>
                <select id="selectTag">
                  <option value>Select tag</option>
                  {"{"}skills.map((skill) =&gt; {"{"}
                  return{" "}
                  <option value="{skill.skill}">
                    {"{"}skill.skill{"}"}
                  </option>
                  ;{"}"}){"}"}
                </select>
              </div>
              <div className="selectedTags-container">
                <div id="selectedTags" />
              </div>
            </div>
          </div>
          <div className="search-bar-end">
            <button id="submit-button" type="submit">
              <svg
                className="large-screen-search-button"
                viewBox="0 0 42 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_277_595"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x={3}
                  y={4}
                  width={35}
                  height={35}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 4.40063H37.5844V38.4854H3.5V4.40063Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_277_595)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5428 7.02567C12.5925 7.02567 6.12451 13.4919 6.12451 21.4422C6.12451 29.3924 12.5925 35.8604 20.5428 35.8604C28.4913 35.8604 34.9593 29.3924 34.9593 21.4422C34.9593 13.4919 28.4913 7.02567 20.5428 7.02567M20.5428 38.4854C11.1453 38.4854 3.49951 30.8396 3.49951 21.4421C3.49951 12.0446 11.1453 4.40063 20.5428 4.40063C29.9403 4.40063 37.5843 12.0446 37.5843 21.4421C37.5843 30.8396 29.9403 38.4854 20.5428 38.4854"
                    fill="white"
                  />
                </g>
                <mask
                  id="mask1_277_595"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x={30}
                  y={31}
                  width={9}
                  height={10}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.1702 31.8878H38.9623V40.6636H30.1702V31.8878Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_277_595)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.6501 40.6636C37.3159 40.6636 36.9799 40.5359 36.7226 40.2804L30.5556 34.1309C30.0429 33.6181 30.0411 32.7869 30.5539 32.2741C31.0649 31.7579 31.8961 31.7614 32.4106 32.2706L38.5776 38.4219C39.0904 38.9346 39.0921 39.7641 38.5794 40.2769C38.3239 40.5359 37.9861 40.6636 37.6501 40.6636"
                    fill="white"
                  />
                </g>
              </svg>
            </button>
            <div className="small-screen-filter-option">
              <svg
                className="filter-option-arrow-down"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.45925 5.10152C2.60576 4.95501 2.83502 4.94169 2.99658 5.06157L3.04286 5.10152L6.60271 8.66118L10.1626 5.10152C10.3091 4.95501 10.5383 4.94169 10.6999 5.06157L10.7462 5.10152C10.8927 5.24803 10.906 5.4773 10.7861 5.63885L10.7462 5.68514L6.89452 9.53679C6.74801 9.6833 6.51874 9.69662 6.35719 9.57675L6.3109 9.53679L2.45925 5.68514C2.29809 5.52398 2.29809 5.26268 2.45925 5.10152Z"
                  fill="#2E333B"
                  stroke="#2E333B"
                  strokeWidth="0.777778"
                />
              </svg>
              <svg
                className="filter-option-arrow-up"
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.45925 9.53678C2.60576 9.68329 2.83502 9.69661 2.99658 9.57674L3.04286 9.53678L6.60271 5.97712L10.1626 9.53678C10.3091 9.68329 10.5383 9.69661 10.6999 9.57674L10.7462 9.53678C10.8927 9.39027 10.906 9.16101 10.7861 8.99945L10.7462 8.95317L6.89452 5.10151C6.74801 4.95501 6.51874 4.94169 6.35719 5.06156L6.3109 5.10151L2.45925 8.95317C2.29809 9.11433 2.29809 9.37562 2.45925 9.53678Z"
                  fill="#2E333B"
                  stroke="#2E333B"
                  strokeWidth="0.777778"
                />
              </svg>
              <button id="fillterButtonToggle">Filter</button>
            </div>
          </div>
          <div id="warning-card">
            <p>Please fill in the search field or select at least one tag</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

/*
<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins&display=swap");
  html {
    font-family: "Montserrat", sans-serif;
    font-family: "Poppins", sans-serif;
  }
  .search-bar-component {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-bar-container {
    font-family: "Montserrat";
    width: 1541px;
    height: 90px;

    background: #ffff;

    border: 1px solid #000;
    border-radius: 50px;

    display: flex;
    justify-content: space-between;

    font-family: "Montserrat";
    font-weight: 400;
    font-size: 14px;
    line-height: 36px;
  }
  .search-bar-right {
    width: 610px;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 60px;
  }
  .search-bar-right input {
    width: 498px;
    height: 80px;
  }
  input:focus,
  select:focus {
    outline: none;
  }
  .search-bar-middel {
    width: 198px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .job-type-pick {
    width: 118px;
    height: 70px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: stretch;

    padding-left: 4px;
  }
  .job-type-pick-header {
    width: 67px;
    height: 37px;

    font-weight: 600;
  }
  .job-type-pick select,
  .write-tags select {
    appearance: none;

    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNzI0NjggNy41NDIwN0MzLjk0NjU3IDcuMzIwMTggNC4yOTM3OSA3LjMwMDAxIDQuNTM4NDcgNy40ODE1NUw0LjYwODU3IDcuNTQyMDdMOS45OTk5NiAxMi45MzMyTDE1LjM5MTQgNy41NDIwN0MxNS42MTMyIDcuMzIwMTggMTUuOTYwNSA3LjMwMDAxIDE2LjIwNTEgNy40ODE1NUwxNi4yNzUyIDcuNTQyMDdDMTYuNDk3MSA3Ljc2Mzk2IDE2LjUxNzMgOC4xMTExOCAxNi4zMzU4IDguMzU1ODVMMTYuMjc1MiA4LjQyNTk1TDEwLjQ0MTkgMTQuMjU5M0MxMC4yMiAxNC40ODEyIDkuODcyNzkgMTQuNTAxMyA5LjYyODEyIDE0LjMxOThMOS41NTgwMiAxNC4yNTkzTDMuNzI0NjggOC40MjU5NUMzLjQ4MDYxIDguMTgxODcgMy40ODA2MSA3Ljc4NjE0IDMuNzI0NjggNy41NDIwN1oiIGZpbGw9IiM4RThFOEUiLz4KPC9zdmc+Cg==");
    background-repeat: no-repeat;
    background-position: right 0.25rem center;
    background-color: #fff;

    padding-right: 1.5rem;

    border: none;
    border-radius: 0.25rem;

    color: #7b7b7b;

    cursor: pointer;

    font-weight: 600;
  }
  .search-bar-left {
    width: 630px;
    height: 90px;

    display: flex;
    align-items: center;
  }
  .search-tags {
    width: 592px;
    height: 74px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .write-tags {
    widht: 630px;
    height: 37px;

    display: flex;
    justify-content: space-between;
  }

  .write-tags-header {
    width: 34px;
    height: 29px;

    font-weight: 600;
    color: #000000;
  }

  .write-tags select {
    width: 549px;
  }

  .selectedTags-container {
    width: 549px;
    min-height: 27px;
    max-height: 100px;

    overflow: auto;
  }
  #selectedTags {
    display: flex;
    flex-wrap: wrap;

    padding-bottom: 10px;

    font-family: "Inter";
    line-height: 23px;
  }
  #submit-button {
    width: 101px;
    height: 90px;
    min-width: 97px;

    border-radius: 0 50px 50px 0;

    background: #0374e2;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .search-bar-end svg {
    width: 42px;
    height: 43px;

    margin-bottom: 5px;
    margin-right: 5px;
  }

  #warning-card {
    display: none;

    position: fixed;
    top: 100px;
    right: 0;

    width: 540px;
    height: 50px;

    background-color: #f44336;
    color: white;

    padding: 10px;

    transform: translateX(100%) translateY(-100%);
    animation: slide-in 0.5s forwards;

    font-weight: 600;

    border-radius: 5px 0 0 5px;

    cursor: pointer;
  }

  #warning-card.show {
    transform: translate(0, 50px);

    display: inline-block;
  }

  .small-screen-filter-option {
    display: none;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%) translateY(-100%);
    }
    to {
      transform: translateX(0) translateY(0);
    }
  }

  @media (min-width: 1300px) and (max-width: 1690px) {
    .search-bar-container {
      width: 1261px;

      margin: 0 auto;
    }
    .search-bar-right {
      width: 488px;
    }

    .search-bar-right input {
      padding-left: 9px;
    }
    .search-tags {
      width: 483px;
    }
    .write-tags select {
      width: 441px;
    }
    .selectedTags-container {
      width: 490px;
    }
    .search-bar-left {
      width: 557px;
    }
  }
  @media (min-width: 1196px) and (max-width: 1299px) {
    .search-bar-container {
      width: 1153px;

      margin: 0 auto;
    }
    .search-bar-right {
      width: 431px;
    }

    .search-bar-right input {
      padding-left: 9px;
    }

    .search-bar-left {
      width: 446px;
    }
    .search-tags {
      width: 483px;
    }
    .write-tags {
      width: 424px;
    }
    .write-tags select {
      width: 382px;
    }
    .selectedTags-container {
      width: 421px;
    }
  }
  @media (min-width: 992px) and (max-width: 1195px) {
    .search-bar-container {
      width: 902px;

      margin: 0 auto;
    }
    .search-bar-right {
      width: 323px;
    }
    .search-bar-right input {
      padding-left: 9px;
    }
    .search-bar-left {
      width: 321px;
    }
    .search-tags {
      width: 267px;
    }
    .write-tags select {
      width: 225px;
    }
    .selectedTags-container {
      width: 289px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .search-bar-container {
      width: 746px;
      margin: 0 auto;
    }
    .search-bar-right {
      width: 245px;
      padding-left: 29px;
    }
    .search-bar-right input {
      padding-left: 9px;
    }

    .search-bar-left {
      width: 294px;
    }
    .search-tags {
      width: 198px;
    }
    .write-tags select {
      width: 193px;
      padding-left: 4px;
    }
    .selectedTags-container {
      width: 234px;
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    .search-bar-container {
      all: unset;

      width: 367px;
      min-height: 50px;
      max-height: 245px;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
    }
    .search-bar-right {
      width: 100%;
      height: 50px;

      display: flex;

      background: #eef0f1;

      border-radius: 10px;

      justify-content: space-evenly;

      padding-left: 0px;
      margin-bottom: 10px;
    }
    .break-line {
      display: none;
    }
    .search-bar-right input {
      width: 288px;
      height: 100%;

      font-family: "Poppins";
      font-weight: 400;
      font-size: 12px;

      background-color: #eef0f1;
    }
    .search-bar-middel,
    .search-bar-left {
      width: 367px;
      height: 50px;

      background: #eef0f1;

      border-radius: 10px;

      margin-bottom: 10px;

      display: none;
    }
    .search-bar-left {
      height: 100px;
    }

    .search-bar-middel svg {
      display: none;
    }
    .job-type-pick-header {
      font-size: 11px;

      width: 49px;

      display: none;
    }
    .job-type-pick {
      width: 100%;

      display: flex;
      justify-content: center;

      padding-left: 26px;
      padding-right: 10px;
    }
    .job-type-pick select,
    .write-tags select {
      font-size: 14px;

      background-color: #eef0f1;

      width: 100%;
    }
    .write-tags {
      width: 359px;

      display: flex;
      justify-content: center;

      padding-left: 26px;
    }
    .write-tags-header {
      font-size: 11px;

      display: none;
    }

    #selectedTags {
      width: 252px;

      font-family: "Inter";
      font-size: 8.6px;
      line-height: 12px;

      padding-left: 18px;
    }
    .search-bar-end {
      all: unset;

      width: 100%;

      display: flex;
      justify-content: center;
    }
    #submit-button {
      display: none;
    }
    #warning-card {
      width: 408px;

      font-size: 11px;

      top: 166px;
    }
    .large-screen-search-button {
      display: none;
    }
    .small-screen-filter-option {
      display: flex;
      align-items: center;

      width: 44px;
      height: 21px;
    }
    .small-screen-filter-option button {
      all: unset;

      font-family: "poppins";
      font-size: 11px;

      color: #2e333b;
    }
    .filter-option-arrow-down {
      display: flex;
    }
    .filter-option-arrow-up {
      display: none;
    }
    #warning-card {
      width: 285px;

      font-size: 10px;

      top: 166px;
    }
  }

  @media (max-width: 575px) {
    .search-bar-container {
      all: unset;
      width: 307px;
      min-height: 50px;
      max-height: 245px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
    }
    .search-bar-right {
      width: 100%;
      height: 50px;
      display: flex;
      background: #eef0f1;
      border-radius: 10px;
      justify-content: space-evenly;
      padding-left: 0px;
      margin-bottom: 10px;
    }
    .break-line {
      display: none;
    }
    .search-bar-right input {
      width: 249px;
      height: 100%;
      font-family: "Poppins";
      background-color: #eef0f1;
      font-weight: 400;
      font-size: 12px;
    }
    .search-bar-middel,
    .search-bar-left {
      width: 307px;
      height: 50px;
      background: #eef0f1;
      border-radius: 10px;
      display: flex;
      margin-bottom: 10px;
      display: none;
    }
    .search-bar-left {
      height: 100px;
    }

    .search-bar-middel svg {
      display: none;
    }
    .job-type-pick-header {
      font-size: 11px;

      width: 49px;

      display: none;
    }
    .job-type-pick {
      width: 100%;

      display: flex;
      justify-content: center;

      padding-left: 18px;
    }
    .job-type-pick select,
    .write-tags select {
      font-size: 14px;

      background-color: #eef0f1;

      width: 100%;
    }
    .write-tags {
      width: 304px;

      display: flex;
      justify-content: center;

      padding-left: 18px;
    }
    .write-tags-header {
      font-size: 11px;

      display: none;
    }

    #selectedTags {
      width: 252px;

      font-family: "Inter";
      font-size: 8.6px;
      line-height: 12px;

      padding-left: 18px;
    }
    .search-bar-end {
      all: unset;

      width: 100%;

      display: flex;
      justify-content: center;
    }
    #submit-button {
      display: none;
    }
    #warning-card {
      width: 408px;

      font-size: 11px;

      top: 166px;
    }
    .large-screen-search-button {
      display: none;
    }
    .small-screen-filter-option {
      display: flex;
      align-items: center;

      width: 44px;
      height: 21px;
    }
    .small-screen-filter-option button {
      all: unset;

      font-family: "poppins";
      font-size: 11px;

      color: #2e333b;
    }
    .filter-option-arrow-down {
      display: flex;
    }
    .filter-option-arrow-up {
      display: none;
    }
    #warning-card {
      width: 285px;

      font-size: 10px;

      top: 166px;
    }
  }
</style>

<script is:inline type="module">
  const tags = [];
  const selectTag = document.querySelector("#selectTag");
  const list = document.querySelector("#selectedTags");
  const JobtypeSelect = document.querySelector("#job-type-selector");
  const searchButton = document.querySelector("#submit-button");
  const jobNameInput = document.querySelector("#job-name");
  const warningCard = document.querySelector("#warning-card");
  const filterOption = document.querySelector("#fillterButtonToggle");
  let close = true;
  export let query = {
    JobType: "",
    Tags: [""],
    JobName: "",
  };

  selectTag.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    if (selectedOption) {
      tags.push(selectedOption);
      const newTag = document.createElement("span");
      newTag.classList.add("tag");
      newTag.textContent = selectedOption;
      newTag.style.backgroundColor = "#002838";
      newTag.style.color = "white";
      newTag.style.padding = "6px 10px";
      newTag.style.borderRadius = "5px";
      newTag.style.marginRight = "10px";
      newTag.style.marginBottom = "3px";
      newTag.style.cursor = "pointer";
      if (list) {
        list.appendChild(newTag);
      }
      newTag.addEventListener("click", (event) => {
        const tagIndex = tags.indexOf(event.target.textContent.trim());
        if (tagIndex >= 0) {
          tags.splice(tagIndex, 1);
          event.target.remove();
        }
      });
    }
  });

  searchButton.addEventListener("click", hanelSearch);
  jobNameInput.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
      hanelSearch();
    }
  });

  warningCard.addEventListener("click", () => {
    warningCard.classList.remove("show");
  });

  function hanelSearch() {
    const jobName = document.querySelector("#job-name").value;
    const selectedTags = tags;
    const selectedJobType = JobtypeSelect.value;
    if (!jobName && selectedTags.length === 0) {
      warningCard.classList.add("show");
      setTimeout(() => {
        warningCard.classList.remove("show");
      }, 3000);
    } else {
      query = { jobName, selectedTags, selectedJobType };
      //console.log(query)
    }
  }
  filterOption.addEventListener("click", () => {
    const searchBarMiddel = document.querySelector(".search-bar-middel");
    const searchBarLeft = document.querySelector(".search-bar-left");
    const filterOptionArrowDown = document.querySelector(
      ".filter-option-arrow-down"
    );
    const filterOptionArrowUp = document.querySelector(
      ".filter-option-arrow-up"
    );

    if (close) {
      searchBarMiddel.style.display = "flex";
      searchBarLeft.style.display = "flex";
      filterOptionArrowDown.style.display = "none";
      filterOptionArrowUp.style.display = "block";
      close = !close;
    } else {
      searchBarMiddel.style.display = "none";
      searchBarLeft.style.display = "none";
      filterOptionArrowDown.style.display = "block";
      filterOptionArrowUp.style.display = "none";
      close = !close;
    }
  });
</script>
*/
