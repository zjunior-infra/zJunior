import InputWrapper from '@components/wrappers/InputWrapper/InputWrapper'
import skills, { ISkill } from '@util/skills'
import React, { useState, useEffect } from 'react'


function useDebounce(value: string, time: number = 250)  {
  const [debounceValue, setDebounceValue] = useState<string>(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time)
    return () => {
      clearTimeout(timeout)
    };
  }, [value , time]);
  return debounceValue;
};

const Test = () => {

  const getSkills = async (query: string): Promise<ISkill[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          skills.filter(skills =>
            skills.skill.toLowerCase().includes(query.toLowerCase())
          ).sort()
        )
      }, 0)
    })
  }

  const [query, setQuery] = useState<string>('')
  const [skillsArr, setSkillsArr] = useState<ISkill[]>(skills)
  const debounceQuery = useDebounce(query);

  useEffect(() => {
    (async () => {
      if (debounceQuery === '') {
        setSkillsArr(skills)
        return;
      }
      const data = await getSkills(debounceQuery);
      setSkillsArr(prev => data);
    })();
    console.log(1)
  }, [debounceQuery])
  
  console.log(skillsArr)
  console.log(debounceQuery)
  return (
    <InputWrapper
      title='Skills'
      name='skills'
    >
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Instabug"
        onChange={(e) => setQuery(e.target.value)}
        className="block w-full p-2 shadow-md text-gray-900 border-gray-500 rounded-lg bg-gray-50 sm:text-xs focus:border-slate-500" />
      <ul className="bg-white w-80 max-h-64 rounded-md overflow-auto mt-1 ">

        {
          skillsArr.map((el,i) => (
            <li key={i} className="px-3 py-1 flex cursor-pointer duration-100 hover:bg-[#e6f7ff]">
              <span className='flex-grow-1 '>{el.skill}</span>
            </li>
          ))
        }
      </ul>
    </InputWrapper>
  )
}

export default Test