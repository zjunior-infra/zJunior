import { Input } from '@components/UI/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
import { Textarea } from '@components/UI/textarea';
import { Button } from '@components/UI/Button';
import React from 'react';
import { Loader2 } from 'lucide-react';


const suggestionSchema = z.object({
    email: z.string().email('Invalid email format'),
    description: z.string().min(50, 'Description must be at least 50 characters').max(1024, 'Description can have at most 1024 characters'),
});
type suggestionSchema = z.infer<typeof suggestionSchema>

const Suggest = () => {
  const [Loading,isLoading] = React.useState<boolean>(false)
  const successLink = React.useRef<HTMLAnchorElement>()
  const { 
    register, 
    handleSubmit,
    formState: { errors } } = useForm<suggestionSchema>({
    resolver: zodResolver(suggestionSchema)
  });

  const onSubmit:SubmitHandler<suggestionSchema> = async (data) => {
    const appendType = {...data,type:'suggestion'}
    isLoading(true)
      const request = await fetch('/api/report',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body:JSON.stringify(appendType)
    })
    console.log(appendType)
    if(request.status === 201){
      location.replace('/success')
    }
    else{
      location.replace('/')
    }
};

return (
    <form onSubmit= {handleSubmit(onSubmit)} className='flex flex-col gap-4 z-50'>
      <div>
        <label>Email</label>
        <Input variant={errors.email ? 'error' : 'default'} id='email' placeholder='Enter your email address' className='mt-1' type="email" {...register('email')} />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label>What is your Idea</label>
        <Textarea id='description' placeholder="We're excited to hear your suggestions!" className='mt-1 h-[17rem] text-start' {...register('description')} error={errors.description ? true : false}/>
        {errors.description && <p className="text-red-600">{errors.description.message}</p>}
      </div>
      <div className='flex items-center gap-16 my-6'>
        <p className='text-xs text-input'>You can also email us directly at <a href="mailto:help@zjunior.com" className='underline'>help@zjunior.com</a></p>
        {Loading ?
          <Button className='bg-primary/60' disabled><Loader2 className='animate-spin'/></Button> 
          : <Button className='' type="submit">Suggest</Button>
        }
        <a href="/success" ref={successLink} className='sr-only' id='dis'></a>
      </div>
    </form>
  );
};

export default Suggest;
