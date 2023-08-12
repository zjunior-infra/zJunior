import { Input } from '@components/UI/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
import { Textarea } from '@components/UI/textarea';


const IssueSchema = z.object({
    email: z.string().email('Invalid email format'),
    description: z.string().min(50, 'Description must be at least 50 characters').max(1024, 'Description can have at most 1024 characters'),
});
type IssueSchema = z.infer<typeof IssueSchema>

const Reports = () => {
  const { 
    register, 
    handleSubmit,
    formState: { errors } } = useForm<IssueSchema>({
    resolver: zodResolver(IssueSchema)
  });

  const onSubmit:SubmitHandler<IssueSchema> = async (data) => {
    const appendType = {...data,type:'issue'}

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
    <form onSubmit= {handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div>
        <label>Email</label>
        <Input id='email' placeholder='Enter your email address' type="email" {...register('email')} />
        {errors.email && <p>{errors.email?.message}</p>}
      </div>
      <div>
        <label>What is your Idea</label>
        <Textarea id='description' placeholder="We're excited to hear your suggestions!" className='h-[16rem] text-start' {...register('description')} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div className='flex items-center gap-16 my-10'>
        <p className='text-xs text-input/30'>You can also email us directly at <a href="mailto:help@zjunior.com" className='underline'>help@zjunior.com</a></p>
        <button className='btn-3d actions h-9 z-50 w-[8rem] flex items-center justify-center' type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Reports;
