import { Input } from '@components/UI/input';
import { getUser, signIn } from '@lib/supabase/auth.ts';
import { userCreds } from '@util/utils';
import { Fragment, useEffect, useRef } from 'react';

export function Auth(){
    const handleLogin = async () =>{
        await signIn('github')
    }
    useEffect(()=>{
        if(location.href.includes('#')){
            const creds:credentials = userCreds(window.location.href);
            document.cookie = `access-token=${creds.accessToken}; path=/; expires=${creds.expires}; SameSite=Lax; secure`
            document.cookie = `refresh-token=${creds.refreshToken}; path=/; expires=${creds.expires}; SameSite=Lax; secure`
        }
    },[])
    return (
    <Fragment>
        <div className='flex  w-[15rem] my-10 mx-auto'>
        <Input type='email' placeholder='Email'/>

        </div>
    </Fragment>
    )
}