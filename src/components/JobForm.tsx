import React, { useCallback, useState } from 'react';
import react from '@astrojs/react';
import useInput from 'hooks/use-input';
import InputWrapper from './wrappers/InputWrapper/InputWrapper';
import CustomizedHook from './AutoCompleteInput/AutoCompleteInput';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css'; 

// import Test from './AutoCompleteInput/Test';
// import { addJob, getjj } from '@util/database';

export const JobForm = () => {
  const [contactWay, setContactWay]: any = useState('link');
  console.log(contactWay)
  const {
    value: enteredCompany,
    isValid: enteredCompanyIsValid,
    hasError: companyHasError,
    onChangeHandler: onChangeCompanyHandler,
    onBlurHandler: onBlurCompanyHandler,
    resetInputHandler: resetCompanyInput
  } = useInput((value) => !!value, null);
  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleHasError,
    onChangeHandler: onChangeTitleHandler,
    onBlurHandler: onBlurTitleHandler,
    resetInputHandler: resetTitleInput
  } = useInput((value) => !!value, null);
  const {
    value: enteredType,
    isValid: enteredTypeIsValid,
    hasError: typeHasError,
    onChangeHandler: onChangeTypeHandler,
    onBlurHandler: onBlurTypeHandler,
    resetInputHandler: resetTypeInput
  } = useInput((value) => ['Internship', 'EntryLevel'].includes(value), 'Internship');
  const {
    value: enteredDeadLine,
    isValid: enteredDeadLineIsValid,
    hasError: deadLineHasError,
    onChangeHandler: onChangeDeadLineHandler,
    onBlurHandler: onBlurDeadLineHandler,
    resetInputHandler: resetDeadLineInput
  } = useInput((value) => !!value, '2023-02-01');
  const {
    value: enteredLogo,
    isValid: enteredLogoIsValid,
    hasError: logoHasError,
    onChangeHandler: onChangeLogoHandler,
    onBlurHandler: onBlurLogoHandler,
    resetInputHandler: resetLogoInput
  } = useInput((value) => !!value.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*\.(jpg|jpeg|svg|png|jfif|bmp|webp|tiff|ico))/gi), null);
  const {
    value: enteredSkills,
    isValid: enteredSkillsIsValid,
    hasError: skillsHasError,
    onChangeHandler: onChangeSkillsHandler,
    onBlurHandler: onBlurSkillsHandler,
    setValueHandler: setSkillsValueHandler,
    resetInputHandler: resetSkillsInput
  } = useInput((value) => value.length > 0, []);
  const {
    value: enteredLink,
    isValid: enteredLinkIsValid,
    hasError: linkHasError,
    onChangeHandler: onChangeLinkHandler,
    onBlurHandler: onBlurLinkHandler,
    resetInputHandler: resetLinkInput
  } = useInput((value) => !!value.match(/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/), '');
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    onChangeHandler: onChangeEmailHandler,
    onBlurHandler: onBlurEmailHandler,
    resetInputHandler: resetEmailInput
  } = useInput((value) => !!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), '');

  const syncSkillsHandler = useCallback((value: any) => {
    setSkillsValueHandler(value)
  }, [])

  // getjj().then((res) => console.log(res)).catch((err) => console.log(err))

  let formIsValid = false;
  //check if form is valid
  if (enteredCompanyIsValid &&
    enteredTitleIsValid &&
    enteredTypeIsValid &&
    enteredDeadLineIsValid &&
    enteredSkillsIsValid &&
    enteredLogoIsValid &&
    (enteredEmailIsValid || enteredLinkIsValid)
  )
    formIsValid = true;
  // reset all form inputs
  const resetFormHandler = () => {
    resetCompanyInput()
    resetTitleInput()
    resetTypeInput()
    resetDeadLineInput()
    resetSkillsInput()
    resetLogoInput()
    resetEmailInput()
    resetLinkInput()
  }
  // touch all form inputs
  const touchFormHandler = () => {
    onBlurCompanyHandler()
    onBlurTitleHandler()
    onBlurTypeHandler()
    onBlurDeadLineHandler()
    onBlurSkillsHandler()
    onBlurLogoHandler()
    onBlurEmailHandler()
    onBlurLinkHandler()
  }
  const addJobHandler = async () => {
    const res = await fetch('/api/JobPost', {
      method: "POST",
      body:
        JSON.stringify({
          company: enteredCompany,
          title: enteredTitle,
          type: enteredType,
          deadline: enteredDeadLine,
          skills: enteredSkills.map((el: any) => el.skill).join(),
          logo: enteredLogo,
          email: enteredEmail,
          link: enteredLink
        })
    })
    return res;
  }
  const onSubmitFormHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // touch all form inputs
    touchFormHandler();
    if (!formIsValid){
      toast.error("Please fill all required fields")
      return;
    }
    const formToast = toast.loading("Adding you job...")
    try {
      // add job to db
      const res = await addJobHandler();
      if (!res.ok) {
        const resText = await res.text();
        throw new Error(resText)
      }
      // reset form
      resetFormHandler();
      toast.update(formToast,
        {
          render: "Your job has been added successfully",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          isLoading: false,
          type: toast.TYPE.SUCCESS,
          closeButton: true,
        }
      )
    } catch (e : any) {
      toast.update(formToast,
        {
          render: e.message,
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          isLoading: false,
          type: toast.TYPE.ERROR,
          closeButton: true,
        })
    }

  }
  return (
    <div className="container mt-4 bg-zinc-200/50 rounded-md relative ring-2 ring-slate-800 shadow-lg p-7 mb-7 max-w-[380px] sm:max-w-2xl">
      <ToastContainer />

      <h1 className="text-center text-lg absolute top-0 left-0 ml-4 mt-2 text-slate-800">Add a Job </h1>
      <form onSubmit={onSubmitFormHandler}>
        <InputWrapper
          title="Company"
          name="company"
        >


          <input
            type="text"
            id="company"
            name="company"
            placeholder="Instabug"
            value={enteredCompany}
            onChange={onChangeCompanyHandler}
            className={`block w-full p-2 shadow-md text-gray-900 border-gray-300 rounded-md bg-white sm:text-xs border-[1px] hover:border-[#40a9ff] focus:border-[#40a9ff] outline-none duration-100 ${companyHasError ?  'border-red-700': ''}`}/>
        </InputWrapper>

        <InputWrapper
          title="Title"
          name="title"
        >
          <input
            type="text"
            name="title"
            placeholder="Software engineer"
            id="title"
            value={enteredTitle}
            onChange={onChangeTitleHandler}
            className={`block w-full p-2 shadow-md text-gray-900  border-gray-300 rounded-md bg-white sm:text-xs border-[1px] hover:border-[#40a9ff] focus:border-[#40a9ff] outline-none duration-100  ${titleHasError ?  'border-red-700': ''}`}/>
        </InputWrapper>
        <InputWrapper
          title="Type"
          name="type"
        >
          <select
            id="Type"
            name='type'
            aria-label="type"
            aria-labelledby="type"
            placeholder='Choose the type'
            value={enteredType}
            onChange={onChangeTypeHandler}
            className={`w-full p-2 shadow-md text-gray-900 border-gray-300 rounded-md bg-white sm:text-xs border-[1px] hover:border-[#40a9ff] focus:border-[#40a9ff] outline-none duration-100ne ${typeHasError ?  'border-red-700': ''}`}>
            <option >Choose the type</option>
            <option value="Internship">Internship</option>
            <option value="EntryLevel">EntryLevel</option>
          </select>
        </InputWrapper>
        <InputWrapper
          title="Deadline"
          name="deadline"
        >
          <input
            placeholder='Deadline'
            className={`w-52 p-2 sm:cursor-pointer shadow-md text-gray-900 border-gray-300 rounded-md border-[1px] bg-white sm:text-xs hover:border-[#40a9ff] focus:border-[#40a9ff] outline-none duration-100 ${deadLineHasError ?  'border-red-700': ''}` }
            type="date"
            id="deadline"
            name='deadline'
            // value="2023-01-01" 
            min="2023-01-01"
            max="2030-12-20"
            value={enteredDeadLine}
            onChange={onChangeDeadLineHandler}
          />
        </InputWrapper>

        <InputWrapper
          title="Logo"
          name="logo"
        >
          <input
            type="text"
            placeholder="https://img.com/logo.png"
            id="logo"
            name="logo"
            value={enteredLogo}
            onChange={onChangeLogoHandler}
            className={`block w-full p-2 shadow-md text-gray-900 border-gray-300 rounded-md bg-white sm:text-xs border-[1px] hover:border-[#40a9ff] focus:border-[#40a9ff] outline-none duration-100 ${logoHasError ?  'border-red-700': ''}`}/>
        </InputWrapper>

        <CustomizedHook
          setSkillsHandler={syncSkillsHandler}
        />

        {/* <Test /> */}

        <div className="m-8">
          <div className="flex">
            <div className="flex items-center h-5">
              <div className='w-4 h-4 rounded-[50%] border-gray-300 border-[1px] flex items-center justify-center cursor-pointer'
                onClick={() => setContactWay('link')}
              >
                {contactWay === "link" && <span className='block w-2 h-2 rounded-[50%] bg-blue-500'></span>}
              </div>
            </div>
            <div className="ml-2 text-sm">
              <label htmlFor="helper-radio" className="font-medium text-zinc-800 ">Link</label>
              <p id="helper-radio-textt" className="text-xs font-normal text-gray-500">Link to the job form or career site</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center h-5">
              <div className='w-4 h-4 rounded-[50%] border-gray-300 border-[1px] flex items-center justify-center cursor-pointer'
                onClick={() => setContactWay('email')}
              >
                {contactWay === "email" && <span className='block w-2 h-2 rounded-[50%] bg-blue-500'></span>}
              </div>
            </div>
            <div className="ml-2 text-sm">
              <label htmlFor="helper-radio" className="font-medium text-zinc-800 ">Email</label>
              <p id="helper-radio-text" className="text-xs font-normal text-gray-500" >Opprtunity via mailing the recuriter</p>
            </div>
          </div>
        </div>

        {
          contactWay === 'link' ? (
            <InputWrapper
              title="Link"
              name="link"
            >
              <input
                type="text"
                placeholder="www.instabug.com/careers"
                id="link"
                name="link"
                value={enteredLink}
                onChange={onChangeLinkHandler}
                className={`block w-full p-2 shadow-md text-gray-900  border-gray-300 rounded-md bg-white sm:text-xs border-[1px] hover:border-[#40a9ff] focus:border-[#40a9ff] outline-none duration-100  ${linkHasError ?  'border-red-700': ''}`}/>
            </InputWrapper>
          ) : (
            <InputWrapper
              title="Email"
              name="email"
            >
              <input
                type="text"
                placeholder="careers@instabug.com"
                id="email"
                name="email"
                value={enteredEmail}
                onChange={onChangeEmailHandler}
                className={`block w-full p-2 shadow-md text-gray-900  border-gray-300 rounded-md bg-white sm:text-xs border-[1px] hover:border-[#40a9ff] focus:border-[#40a9ff] outline-none duration-100  ${emailHasError ?  'border-red-700': ''}`}/>
            </InputWrapper>
          )
        }
        <div className="flex justify-end items-center">

          <button type='submit' className="relative inline-flex items-center justify-center p-[0.1rem] mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-slate-500 hover:text-white  focus:ring-2 focus:outline-none focus:ring-cyan-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              Post Job
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

function saveSettings(settings: any): Promise<unknown> {
  throw new Error('Function not implemented.');
}

